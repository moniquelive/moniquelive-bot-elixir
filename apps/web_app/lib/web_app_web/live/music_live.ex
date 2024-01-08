defmodule WebAppWeb.Live.MusicLive do
  @moduledoc false

  import WebAppWeb.WebAppComponents

  use WebAppWeb, :live_view

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

    temperature = 70

    {:ok,
     socket
     |> assign(:layout, {WebAppWeb.Layouts, "widgets"})
     |> assign(:temperature, temperature)
     |> assign(:content, "Meu Conteudo")
     |> assign(:title, "Loading...")
     |> assign(:artist, "Loading...")
     |> assign(:cover, "Loading...")}
  end

  @impl true
  def handle_event("inc_temperature", _params, socket) do
    {:noreply, update(socket, :temperature, &(&1 + 1))}
  end

  @impl true
  def handle_info({:spotify, payload}, socket) do
    IO.puts(payload)
    # push(socket, "spotify_music_changed", payload)
    {:noreply, socket}
  end

  def handle_info({:difm, payload}, socket) do
    new_socket =
      socket
      |> assign(:title, payload.track.display_title)
      |> assign(:artist, payload.track.display_artist)
      |> assign(:cover, payload.track.album_art)
      |> assign(
        :content,
        "{{ #{payload.track.display_title} // #{payload.track.display_artist} }}"
      )

    {:noreply, new_socket}
  end
end
