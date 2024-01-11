defmodule SpotifyMonitor do
  @moduledoc false

  use GenServer

  # Client

  def start_link(rt),
    do:
      GenServer.start_link(
        __MODULE__,
        %{
          refresh_token: rt,
          curr: nil,
          creds: nil,
          skip_set: MapSet.new(),
          keep_set: MapSet.new()
        },
        name: __MODULE__
      )

  def current_song(), do: GenServer.call(__MODULE__, :current_song)
  def song_info(song_id), do: GenServer.call(__MODULE__, {:song_info, song_id})
  def skip_song(username), do: GenServer.call(__MODULE__, {:skip_song, username})
  def keep_song(username), do: GenServer.call(__MODULE__, {:keep_song, username})
  def get_creds(), do: GenServer.call(__MODULE__, :get_creds)

  def enqueue(song_id), do: GenServer.cast(__MODULE__, {:enqueue, song_id})
  def broadcast_song_info(), do: GenServer.cast(__MODULE__, :broadcast_song_info)

  def broadcast_keepers_and_skippers(),
    do: GenServer.cast(__MODULE__, :broadcast_keepers_and_skippers)

  # Server

  @impl GenServer
  def init(state) do
    Phoenix.PubSub.subscribe(WebApp.PubSub, "music_live:mounted")

    send(self(), :refresh_token_timer)
    send(self(), :monitor_spotify_timer)

    :timer.send_interval(50 * 60_000, :refresh_token_timer)
    :timer.send_interval(2_000, :monitor_spotify_timer)

    broadcast_keepers_and_skippers()
    {:ok, state}
  end

  @impl GenServer
  def handle_call(:get_creds, _from, state) do
    {:reply, state.creds, state}
  end

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
    skip_set =
      state.skip_set
      |> MapSet.put(username |> String.downcase())

    keep_votes = MapSet.size(state.keep_set)
    skip_votes = MapSet.size(skip_set)

    response =
      if skip_votes - keep_votes >= 5 do
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

        Spotify.Player.skip_to_next(state.creds)
        "PULANDO!!!! 💃 (#{skip_members}) X (#{keep_members})"
      else
        "Aaaaa parciais: (vaza: #{skip_votes} X fica: #{keep_votes})"
      end

    broadcast_keepers_and_skippers()
    {:reply, response, %{state | skip_set: skip_set}}
  end

  def handle_call({:keep_song, username}, _from, state) do
    keep_set =
      state.keep_set
      |> MapSet.put(username |> String.downcase())

    keep_votes = MapSet.size(keep_set)
    skip_votes = MapSet.size(state.skip_set)
    response = "kumaPls parciais: (vaza: #{skip_votes} X fica: #{keep_votes})"

    broadcast_keepers_and_skippers()
    {:reply, response, %{state | keep_set: keep_set}}
  end

  defp format_payload(song),
    do: %{
      imgUrl: hd(song.album["images"])["url"],
      title: song.name,
      artist: hd(song.artists)["name"]
    }

  @impl GenServer
  def handle_cast({:enqueue, song_id}, state) do
    Spotify.Player.enqueue(state.creds, "spotify:track:#{song_id}")
    {:noreply, state}
  end

  def handle_cast(:broadcast_song_info, state) do
    payload = format_payload(state.curr.item)
    Phoenix.PubSub.broadcast(WebApp.PubSub, "spotify:music_changed", {:spotify, payload})
    handle_cast(:broadcast_keepers_and_skippers, state)
  end

  def handle_cast(:broadcast_keepers_and_skippers, state) do
    payload = %{
      keepers: state.keep_set |> MapSet.to_list(),
      skippers: state.skip_set |> MapSet.to_list()
    }

    Phoenix.PubSub.broadcast(WebApp.PubSub, "spotify:keepers_and_skippers_changed", payload)
    {:noreply, state}
  end

  @impl GenServer
  def handle_info(:monitor_spotify_timer, state) do
    new_state =
      case Spotify.Player.get_currently_playing(state.creds) do
        # Not playing
        :ok ->
          %{state | curr: nil, skip_set: MapSet.new(), keep_set: MapSet.new()}

        # Track changed
        {:ok, curr}
        when curr.is_playing and (state.curr == nil or curr.item.id != state.curr.item.id) ->
          broadcast_song_info()
          %{state | curr: curr, skip_set: MapSet.new(), keep_set: MapSet.new()}

        # Track playing
        _ ->
          state
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

  def handle_info(:music_live_mounted, state) do
    if state.curr && state.curr.is_playing, do: broadcast_song_info()
    {:noreply, state}
  end
end
