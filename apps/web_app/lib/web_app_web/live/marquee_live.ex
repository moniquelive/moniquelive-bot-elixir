defmodule WebAppWeb.Live.MarqueeLive do
  @moduledoc false

  import WebAppWeb.WebAppComponents

  use WebAppWeb, :live_widget

  @impl true
  def render(assigns) do
    ~H"""
    <.marquee repeat={1000}>{@message}</.marquee>
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    Phoenix.PubSub.subscribe(WebApp.PubSub, "layer:marquee_updated")
    Phoenix.PubSub.broadcast(WebApp.PubSub, "marquee_live:mounted", :marquee_live_mounted)

    {:ok,
     socket
     |> assign(:message, "Loading...")}
  end

  @impl true
  def handle_info({:marquee, message}, socket) do
    new_socket =
      socket
      |> assign(:message, message)

    {:noreply, new_socket}
  end
end
