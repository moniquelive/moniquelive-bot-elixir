defmodule Chatbot.SpotifyMonitor do
  @moduledoc false

  use GenServer

  # Client

  def start_link(rt),
    do:
      GenServer.start_link(
        __MODULE__,
        %{refresh_token: rt, curr: nil, creds: nil},
        name: __MODULE__
      )

  def current_song(), do: GenServer.call(__MODULE__, :current_song)
  def skip_to_next(), do: GenServer.cast(__MODULE__, :skip_to_next)
  def song_info(song_id), do: GenServer.call(__MODULE__, {:song_info, song_id})
  def enqueue(song_id), do: GenServer.cast(__MODULE__, {:enqueue, song_id})

  # Server

  @impl GenServer
  def init(state) do
    {:noreply, state} = refresh_token_loop(state)
    {:noreply, state} = monitor_loop(state)
    {:ok, state}
  end

  @impl GenServer
  def handle_call(:current_song, _from, state),
    do: {:reply, state.curr, state}

  def handle_call({:song_info, song_id}, _from, state) do
    case Spotify.Track.get_track(state.creds, song_id) do
      {:ok, %{"error" => %{"message" => message}}} ->
        {:reply, {:error, message}, state}

      {:ok, info} ->
        {:reply, {:ok, info}, state}
    end
  end

  @impl GenServer
  def handle_cast(:skip_to_next, state) do
    Spotify.Player.skip_to_next(state.creds)
    {:noreply, state}
  end

  def handle_cast({:enqueue, song_id}, state) do
    Spotify.Player.enqueue(state.creds, "spotify:track:#{song_id}")
    {:noreply, state}
  end

  @impl GenServer
  def handle_info(:monitor_timer, state),
    do: monitor_loop(state)

  def handle_info(:refresh_token_timer, state),
    do: refresh_token_loop(state)

  # --------------------------------------------------------------------------

  defp refresh_token_loop(state) do
    {:ok, creds} =
      Spotify.Authentication.refresh(%Spotify.Credentials{refresh_token: state.refresh_token})

    Process.send_after(self(), :refresh_token_timer, 50 * 1_000 * 60)
    {:noreply, %{state | creds: creds}}
  end

  defp monitor_loop(state) do
    curr =
      case Spotify.Player.get_current_playback(state.creds) do
        {:ok, curr} ->
          if state.curr == nil or curr.item.id != state.curr.item.id do
            artist = hd(curr.item.artists)["name"]
            title = curr.item.name
            song_url = hd(curr.item.album["images"])["url"]

            payload = %{imgUrl: song_url, title: title, artist: artist}
            WebAppWeb.Endpoint.broadcast!("chatbot:events", "spotify_music_changed", payload)
            Phoenix.PubSub.broadcast!(WebApp.PubSub, "spotify:music_changed", curr)
          end

          curr

        _ ->
          state.curr
      end

    Process.send_after(self(), :monitor_timer, 2_000)
    {:noreply, %{state | curr: curr}}
  end
end
