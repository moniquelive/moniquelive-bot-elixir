defmodule WebAppWeb.ChatbotChannel do
  @moduledoc false

  use WebAppWeb, :channel

  @impl true
  def join("chatbot:events", _payload, socket) do
    send(self(), :update_pubsub)
    {:ok, socket}
  end

  def join("chatbot:tests", _payload, socket),
    do: {:ok, socket}

  # # Channels can be used in a request/response fashion
  # # by sending replies to requests from the client
  # @impl true
  # def handle_in("ping", payload, socket) do
  #   {:reply, {:ok, payload}, socket}
  # end

  @impl true
  def handle_info({:spotify, payload}, socket) do
    push(socket, "spotify_music_changed", payload)
    {:noreply, socket}
  end

  def handle_info(%{keepers: _, skippers: _} = keepers_and_skippers, socket) do
    push(socket, "keepers_skippers_changed", keepers_and_skippers)
    {:noreply, socket}
  end

  def handle_info({:marquee, marquee_sentence}, socket) do
    push(socket, "marquee_updated", %{text: marquee_sentence})
    {:noreply, socket}
  end

  def handle_info({:difm, payload}, socket) do
    push(socket, "difm_current_song", payload)
    {:noreply, socket}
  end

  def handle_info(:update_pubsub, socket) do
    [
      "spotify:music_changed",
      "spotify:keepers_and_skippers_changed",
      "layer:marquee_updated",
      "difm:current_song"
    ]
    |> Enum.each(fn evt ->
      Phoenix.PubSub.unsubscribe(WebApp.PubSub, evt)
      Phoenix.PubSub.subscribe(WebApp.PubSub, evt)
    end)

    {:noreply, socket}
  end
end
