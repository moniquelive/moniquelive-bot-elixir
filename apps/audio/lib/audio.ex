defmodule Audio do
  @moduledoc false

  use GenServer

  def start_link(_opts) do
    GenServer.start_link(
      __MODULE__,
      %{difm_payload: nil, spotify_payload: nil},
      name: __MODULE__
    )
  end

  def difm_changed(payload), do: GenServer.cast(__MODULE__, {:difm_changed, payload})
  def spotify_changed(payload), do: GenServer.cast(__MODULE__, {:spotify_changed, payload})
  def broadcast_song_info(), do: GenServer.cast(__MODULE__, :broadcast_song_info)

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
      title: payload.track.display_title,
      artist: payload.track.display_artist,
      album_cover_url: payload.track.album_art
    }

    {:noreply, %{state | difm_payload: payload}}
  end

  def handle_cast(:broadcast_song_info, state) do
    cond do
      spotify_is_playing(state) ->
        Phoenix.PubSub.broadcast(
          WebApp.PubSub,
          "audio:music_changed",
          {:audio, state.spotify_payload}
        )

      !spotify_is_playing(state) && state.difm_payload ->
        Phoenix.PubSub.broadcast(
          WebApp.PubSub,
          "audio:music_changed",
          {:audio, state.difm_payload}
        )

      true ->
        nil
    end

    {:noreply, state}
  end

  @impl true
  def handle_info(:music_live_mounted, state) do
    broadcast_song_info()
    {:noreply, state}
  end
end
