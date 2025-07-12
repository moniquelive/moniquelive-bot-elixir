defmodule Audio do
  @moduledoc false

  @name __MODULE__

  use GenServer

  def start_link(_opts) do
    args = %{difm_payload: nil, spotify_payload: nil}
    GenServer.start_link(@name, args, name: @name)
  end

  def difm_changed(payload), do: GenServer.cast(@name, {:difm_changed, payload})
  def spotify_changed(payload), do: GenServer.cast(@name, {:spotify_changed, payload})
  def broadcast_song_info(), do: GenServer.cast(@name, :broadcast_song_info)
  def current_song_info(), do: GenServer.call(@name, :current_song_info)
  def whos_playing(), do: GenServer.call(@name, :whos_playing)

  @impl true
  def init(state) do
    Phoenix.PubSub.subscribe(WebApp.PubSub, "music_live:mounted")
    {:ok, state}
  end

  defp spotify_is_playing(%{spotify_payload: nil}), do: false
  defp spotify_is_playing(%{spotify_payload: %{is_playing: is_playing}}), do: is_playing

  @impl true
  def handle_cast({:spotify_changed, nil}, state) do
    broadcast_song_info()
    {:noreply, %{state | spotify_payload: nil}}
  end

  def handle_cast({:spotify_changed, payload}, state) do
    broadcast_song_info()

    payload = %{
      title: payload.item.name,
      artist: hd(payload.item.artists)["name"],
      album_cover_url: hd(payload.item.album["images"])["url"],
      is_playing: payload.is_playing
    }

    {:noreply, %{state | spotify_payload: payload}}
  end

  def handle_cast({:difm_changed, payload}, state) do
    if !spotify_is_playing(state), do: broadcast_song_info()

    payload = %{
      title: payload["track"]["display_title"],
      artist: payload["track"]["display_artist"],
      album_cover_url: payload["track"]["album_art"]
    }

    {:noreply, %{state | difm_payload: payload}}
  end

  def handle_cast(:broadcast_song_info, state) do
    payload =
      cond do
        spotify_is_playing(state) -> {:audio, state.spotify_payload}
        state.difm_payload -> {:audio, state.difm_payload}
        true -> nil
      end

    if payload, do: Phoenix.PubSub.broadcast(WebApp.PubSub, "audio:music_changed", payload)
    {:noreply, state}
  end

  @impl true
  def handle_call(:current_song_info, _from, state) do
    message =
      cond do
        spotify_is_playing(state) ->
          "#{state.spotify_payload.title} - #{state.spotify_payload.artist}"

        state.difm_payload ->
          "#{state.difm_payload.title} - #{state.difm_payload.artist}"

        true ->
          "Sem música no momento..."
      end

    {:reply, message, state}
  end

  def handle_call(:whos_playing, _from, state) do
    who = if spotify_is_playing(state), do: :spotify, else: :difm
    {:reply, who, state}
  end

  @impl true
  def handle_info(:music_live_mounted, state) do
    broadcast_song_info()
    {:noreply, state}
  end
end
