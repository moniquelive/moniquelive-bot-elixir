defmodule WebAppWeb.Live.MusicLive do
  @moduledoc false

  import WebAppWeb.WebAppComponents

  use WebAppWeb, :live_widget

  @impl true
  def render(assigns) do
    ~H"""
    <.music title={@title} artist={@artist} cover={@cover} />
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    Phoenix.PubSub.subscribe(WebApp.PubSub, "spotify:music_changed")
    Phoenix.PubSub.subscribe(WebApp.PubSub, "difm:current_song")
    Phoenix.PubSub.broadcast(WebApp.PubSub, "music_live:mounted", :music_live_mounted)

    {:ok,
     socket
     |> assign(:title, "Loading...")
     |> assign(:artist, "Loading...")
     |> assign(:cover, "Loading...")}
  end

  @impl true
  def handle_info({:spotify, payload}, socket) do
    new_socket =
      socket
      |> assign(:title, payload.title)
      |> assign(:artist, payload.artist)
      |> assign(:cover, payload.imgUrl)

    {:noreply, new_socket}
  end

  def handle_info({:difm, payload}, socket) do
    new_socket =
      socket
      |> assign(:title, payload.track.display_title)
      |> assign(:artist, payload.track.display_artist)
      |> assign(:cover, payload.track.album_art)

    {:noreply, new_socket}
  end
end
