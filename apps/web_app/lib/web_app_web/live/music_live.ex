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
    if connected?(socket) do
      Phoenix.PubSub.subscribe(WebApp.PubSub, "audio:music_changed")
      Phoenix.PubSub.broadcast(WebApp.PubSub, "music_live:mounted", :music_live_mounted)
    end

    {:ok,
     socket
     |> assign(:title, "Loading...")
     |> assign(:artist, "Loading...")
     |> assign(:cover, "Loading...")}
  end

  @impl true
  def handle_info({:audio, payload}, socket) do
    title =
      Map.get(payload, :title) || Map.get(payload, "title") || socket.assigns.title

    artist =
      Map.get(payload, :artist) || Map.get(payload, "artist") || socket.assigns.artist

    cover =
      Map.get(payload, :album_cover_url) || Map.get(payload, "album_cover_url") ||
        socket.assigns.cover

    {:noreply, assign(socket, title: title, artist: artist, cover: cover)}
  end
end
