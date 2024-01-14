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

  defp spotify_is_playing(state), do: state.spotify_payload && state.spotify_payload.is_playing

  @impl true
  def handle_cast({:difm_changed, payload}, state) do
    if !spotify_is_playing(state), do: broadcast_song_info()
    {:noreply, %{state | difm_payload: payload}}
  end

  def handle_cast({:spotify_changed, payload}, state) do
    broadcast_song_info()
    {:noreply, %{state | spotify_payload: payload}}
  end

  def handle_cast(:broadcast_song_info, state) do
    if spotify_is_playing(state) do
      Phoenix.PubSub.broadcast(
        WebApp.PubSub,
        "spotify:music_changed",
        {:spotify, format_payload(state.spotify_payload.item)}
      )
    else
      if state.difm_payload,
        do:
          Phoenix.PubSub.broadcast(
            WebApp.PubSub,
            "difm:current_song",
            {:difm, state.difm_payload}
          )
    end

    {:noreply, state}
  end

  defp format_payload(song),
    do: %{
      imgUrl: hd(song.album["images"])["url"],
      title: song.name,
      artist: hd(song.artists)["name"]
    }

  @impl true
  def handle_info(:music_live_mounted, state) do
    broadcast_song_info()
    {:noreply, state}
  end
end
