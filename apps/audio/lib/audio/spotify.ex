defmodule Audio.Spotify do
  @moduledoc false

  use GenServer

  alias Audio.KeepersAndSkippers, as: KS

  # Client

  def start_link(rt) do
    GenServer.start_link(
      __MODULE__,
      %{refresh_token: rt, curr: nil, creds: nil},
      name: __MODULE__
    )
  end

  def current_song(), do: GenServer.call(__MODULE__, :current_song)
  def song_info(song_id), do: GenServer.call(__MODULE__, {:song_info, song_id})
  def skip_song(username), do: GenServer.call(__MODULE__, {:skip_song, username})
  def keep_song(username), do: GenServer.call(__MODULE__, {:keep_song, username})

  def enqueue(song_id), do: GenServer.cast(__MODULE__, {:enqueue, song_id})

  # Server

  @impl GenServer
  def init(state) do
    send(self(), :refresh_token_timer)
    send(self(), :monitor_spotify_timer)

    :timer.send_interval(50 * 60_000, :refresh_token_timer)
    :timer.send_interval(2_000, :monitor_spotify_timer)

    KS.broadcast()
    {:ok, state}
  end

  @impl GenServer
  def handle_call(:current_song, _from, state) do
    {:reply, state.curr, state}
  end

  def handle_call({:song_info, song_id}, _from, state) do
    case Spotify.Track.get_track(state.creds, song_id) do
      {:ok, %{"error" => %{"message" => message}}} ->
        {:reply, {:error, message}, state}

      {:ok, info} ->
        {:reply, {:ok, info}, state}
    end
  end

  def handle_call({:skip_song, username}, _from, state) do
    KS.skip(username)
    KS.broadcast()
    {:reply, KS.skip_response(state.creds), state}
  end

  def handle_call({:keep_song, username}, _from, state) do
    KS.keep(username)
    KS.broadcast()
    {:reply, KS.keep_response(), state}
  end

  @impl GenServer
  def handle_cast({:enqueue, song_id}, state) do
    Spotify.Player.enqueue(state.creds, "spotify:track:#{song_id}")
    {:noreply, state}
  end

  defp stop(state) do
    # IO.puts(:stopped)
    KS.reset()
    Audio.spotify_changed(nil)
    put_in(state.curr, nil)
  end

  defp pause(state) do
    # IO.puts(:paused)
    Audio.spotify_changed(nil)
    put_in(state.curr, nil)
  end

  defp unpause(state, curr) do
    # IO.puts(:unpaused)
    KS.broadcast()
    Audio.spotify_changed(curr)
    put_in(state.curr, curr)
  end

  defp change(state, curr) do
    # IO.puts(:changed)
    KS.reset()
    KS.broadcast()
    Audio.spotify_changed(curr)
    put_in(state.curr, curr)
  end

  defguard stopped(state) when state.curr != nil
  defguard paused(state, curr) when state.curr != nil and not curr.is_playing

  defguard unpaused(state, curr)
           when curr.is_playing and (is_nil(state.curr) or not state.curr.is_playing)

  defguard changed(state, curr)
           when curr.is_playing and (is_nil(state.curr) or curr.item.id != state.curr.item.id)

  @impl GenServer
  def handle_info(:monitor_spotify_timer, state) do
    new_state =
      case Spotify.Player.get_currently_playing(state.creds) do
        :ok when stopped(state) -> stop(state)
        {:ok, curr} when paused(state, curr) -> pause(state)
        {:ok, curr} when unpaused(state, curr) -> unpause(state, curr)
        {:ok, curr} when changed(state, curr) -> change(state, curr)
        _ -> state
      end

    {:noreply, new_state}
  end

  def handle_info(:refresh_token_timer, state) do
    new_state =
      try do
        case Spotify.Authentication.refresh(%Spotify.Credentials{
               refresh_token: state.refresh_token
             }) do
          {:ok, creds} ->
            %{state | creds: creds}
        end
      rescue
        _ ->
          Process.send_after(self(), 15_000, :refresh_token_timer)
          state
      end

    {:noreply, new_state}
  end
end
