defmodule Chatbot.SpotifyMonitor do
  @moduledoc false

  use GenServer

  # Client

  # TODO: create 50min timer to refresh tokens

  def start_link(rt) do
    {:ok, creds} = Spotify.Authentication.refresh(%Spotify.Credentials{refresh_token: rt})

    state =
      case Spotify.Player.get_current_playback(creds) do
        {:ok, curr} ->
          %{refresh_token: rt, curr: curr}

        _ ->
          %{refresh_token: rt, curr: %Spotify.Playback{}}
      end

    GenServer.start_link(__MODULE__, state, name: __MODULE__)
  end

  def current_song(), do: GenServer.call(__MODULE__, :current_song)
  def skip_to_next(), do: GenServer.cast(__MODULE__, :skip_to_next)
  def song_info(song_id), do: GenServer.call(__MODULE__, {:song_info, song_id})
  def enqueue(song_id), do: GenServer.cast(__MODULE__, {:enqueue, song_id})

  # Server

  @impl GenServer
  def init(state) do
    monitor_loop(state)
    # refresh_token_loop(state)

    {:ok, state}
  end

  @impl GenServer
  def handle_call(:current_song, _from, state),
    do: {:reply, state.curr, state}

  def handle_call({:song_info, song_id}, _from, state) do
    info =
      try do
        {:ok, creds} =
          Spotify.Authentication.refresh(%Spotify.Credentials{refresh_token: state.refresh_token})

        {:ok, info} = Spotify.Track.get_track(creds, song_id)
        info
      rescue
        Spotify.AuthenticationError ->
          IO.puts("song_info: refresh error")
      end

    {:reply, info, state}
  end

  @impl GenServer
  def handle_cast(:skip_to_next, state) do
    try do
      {:ok, creds} =
        Spotify.Authentication.refresh(%Spotify.Credentials{refresh_token: state.refresh_token})

      Spotify.Player.skip_to_next(creds)
    rescue
      Spotify.AuthenticationError ->
        IO.puts("skip_to_next: refresh error")
    end

    {:noreply, state}
  end

  def handle_cast({:enqueue, song_id}, state) do
    try do
      {:ok, creds} =
        Spotify.Authentication.refresh(%Spotify.Credentials{refresh_token: state.refresh_token})

      Spotify.Player.enqueue(creds, "spotify:track:#{song_id}")
    rescue
      Spotify.AuthenticationError ->
        IO.puts("enqueue: refresh error")
    end

    {:noreply, state}
  end

  @impl GenServer
  def handle_info(:monitor_timer, state),
    do: monitor_loop(state)

  defp monitor_loop(state) do
    try do
      case Spotify.Authentication.refresh(%Spotify.Credentials{refresh_token: state.refresh_token}) do
        {:ok, creds} ->
          curr = notify_if_changed(creds, state)

          Process.send_after(self(), :monitor_timer, 2_000)
          {:noreply, %{state | curr: curr}}

        _ ->
          {:noreply, state}
      end
    rescue
      Spotify.AuthenticationError ->
        IO.puts("monitor_loop: refresh error")
    end
  end

  defp notify_if_changed(creds, state) do
    case Spotify.Player.get_current_playback(creds) do
      {:ok, curr} ->
        if curr.item.id != state.curr.item.id do
          artist = hd(curr.item.artists)["name"]
          title = curr.item.name
          song_url = hd(curr.item.album["images"])["url"]

          Phoenix.PubSub.broadcast!(WebApp.PubSub, "spotify:music_changed", curr)

          WebAppWeb.Endpoint.broadcast!("chatbot:events", "spotify_music_changed", %{
            imgUrl: song_url,
            title: title,
            artist: artist
          })
        end

        curr

      _ ->
        state.curr
    end
  end
end
