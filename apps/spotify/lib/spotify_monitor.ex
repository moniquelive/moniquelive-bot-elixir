defmodule Spotify.Monitor do
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
  def enqueue(song_id), do: GenServer.cast(__MODULE__, {:enqueue, song_id})
  def skip_song(username), do: GenServer.call(__MODULE__, {:skip_song, username})
  def keep_song(username), do: GenServer.call(__MODULE__, {:keep_song, username})
  def broadcast_song_info(), do: GenServer.cast(__MODULE__, :broadcast_song_info)

  def format_payload(song) do
    artist = hd(song.artists)["name"]
    title = song.name
    song_url = hd(song.album["images"])["url"]
    %{imgUrl: song_url, title: title, artist: artist}
  end

  def broadcast_keepers_and_skippers(),
    do: GenServer.cast(__MODULE__, :broadcast_keepers_and_skippers)

  # Server

  @impl GenServer
  def init(state) do
    {:ok, state, {:continue, :refresh_tokens}}
  end

  @impl GenServer
  def handle_continue(:refresh_tokens, state),
    do:
      handle_info(:refresh_token_timer, state)
      |> Tuple.append({:continue, :monitor_spotify})

  def handle_continue(:monitor_spotify, state),
    do:
      handle_info(:monitor_spotify_timer, state)
      |> Tuple.append({:continue, :setup_timers})

  def handle_continue(:setup_timers, state) do
    :timer.send_interval(50 * 60_000, :refresh_token_timer)
    :timer.send_interval(2_000, :monitor_spotify_timer)
    {:noreply, state}
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

    new_state = %{state | skip_set: skip_set}
    handle_cast(:broadcast_keepers_and_skippers, new_state)
    {:reply, response, new_state}
  end

  def handle_call({:keep_song, username}, _from, state) do
    keep_set =
      state.keep_set
      |> MapSet.put(username |> String.downcase())

    keep_votes = MapSet.size(keep_set)
    skip_votes = MapSet.size(state.skip_set)

    response = "kumaPls parciais: (vaza: #{skip_votes} X fica: #{keep_votes})"

    new_state = %{state | keep_set: keep_set}
    handle_cast(:broadcast_keepers_and_skippers, new_state)
    {:reply, response, new_state}
  end

  @impl GenServer
  def handle_cast({:enqueue, song_id}, state) do
    Spotify.Player.enqueue(state.creds, "spotify:track:#{song_id}")
    {:noreply, state}
  end

  def handle_cast(:broadcast_song_info, state) do
    Phoenix.PubSub.broadcast(
      WebApp.PubSub,
      "spotify:music_changed",
      state.curr
    )

    handle_cast(:broadcast_keepers_and_skippers, state)
  end

  def handle_cast(:broadcast_keepers_and_skippers, state) do
    Phoenix.PubSub.broadcast(
      WebApp.PubSub,
      "spotify:keepers_and_skippers_changed",
      %{
        keepers: state.keep_set |> MapSet.to_list(),
        skippers: state.skip_set |> MapSet.to_list()
      }
    )

    {:noreply, state}
  end

  @impl GenServer
  def handle_info(:monitor_spotify_timer, state) do
    new_state =
      case Spotify.Player.get_current_playback(state.creds) do
        {:ok, curr} ->
          if curr.is_playing and (state.curr == nil or curr.item.id != state.curr.item.id) do
            broadcast_song_info()
            %{state | curr: curr, skip_set: MapSet.new(), keep_set: MapSet.new()}
          else
            state
          end

        _ ->
          state
      end

    {:noreply, new_state}
  end

  def handle_info(:refresh_token_timer, state) do
    {:ok, creds} =
      Spotify.Authentication.refresh(%Spotify.Credentials{refresh_token: state.refresh_token})

    {:noreply, %{state | creds: creds}}
  end
end
