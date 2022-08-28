defmodule Chatbot.SpotifyMonitor do
  @moduledoc false

  use GenServer

  # Client

  def start_link(rt),
    do:
      GenServer.start_link(
        __MODULE__,
        %{refresh_token: rt, curr: nil, creds: nil, skip_set: nil, keep_set: nil},
        name: __MODULE__
      )

  def current_song(), do: GenServer.call(__MODULE__, :current_song)
  def song_info(song_id), do: GenServer.call(__MODULE__, {:song_info, song_id})
  def enqueue(song_id), do: GenServer.cast(__MODULE__, {:enqueue, song_id})
  def skip_song(username), do: GenServer.call(__MODULE__, {:skip_song, username})
  def keep_song(username), do: GenServer.call(__MODULE__, {:keep_song, username})

  def broadcast_song_info(curr) do
    artist = hd(curr.item.artists)["name"]
    title = curr.item.name
    song_url = hd(curr.item.album["images"])["url"]

    payload = %{imgUrl: song_url, title: title, artist: artist}
    WebAppWeb.Endpoint.broadcast!("chatbot:events", "spotify_music_changed", payload)
    Phoenix.PubSub.broadcast!(WebApp.PubSub, "spotify:music_changed", curr)
    nil
  end

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

  def handle_call({:skip_song, username}, _from, state) do
    skip_set =
      state.skip_set
      |> MapSet.put(username |> String.downcase())

    keep_votes = MapSet.size(state.keep_set)
    skip_votes = MapSet.size(skip_set)

    keep_members =
      state.keep_set
      |> MapSet.to_list()
      |> Enum.sort()
      |> Enum.join(",")

    skip_members =
      skip_set
      |> MapSet.to_list()
      |> Enum.sort()
      |> Enum.join(",")

    response =
      if skip_votes - keep_votes >= 5 do
        Spotify.Player.skip_to_next(state.creds)
        "PULANDO!!!! 💃 (#{skip_members}) X (#{keep_members})"
      else
        "Aaaaa parciais: (vaza: #{skip_votes} X fica: #{keep_votes})"
      end

    {:reply, response, %{state | skip_set: skip_set}}
  end

  def handle_call({:keep_song, username}, _from, state) do
    keep_set =
      state.keep_set
      |> MapSet.put(username |> String.downcase())

    keep_votes = MapSet.size(keep_set)
    skip_votes = MapSet.size(state.skip_set)

    response = "kumaPls parciais: (vaza: #{skip_votes} X fica: #{keep_votes})"
    {:reply, response, %{state | keep_set: keep_set}}
  end

  @impl GenServer
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
    new_state =
      case Spotify.Player.get_current_playback(state.creds) do
        {:ok, curr} ->
          if curr.is_playing and (state.curr == nil or curr.item.id != state.curr.item.id) do
            broadcast_song_info(curr)
            %{state | curr: curr, skip_set: MapSet.new(), keep_set: MapSet.new()}
          else
            state
          end

        _ ->
          state
      end

    Process.send_after(self(), :monitor_timer, 2_000)
    {:noreply, new_state}
  end
end
