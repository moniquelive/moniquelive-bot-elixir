defmodule WebAppWeb.ChatbotChannel do
  @moduledoc false

  use WebAppWeb, :channel

  @impl true
  def join("chatbot:events", _payload, socket) do
    send(self(), :update_pubsub)
    {:ok, socket}
  end

  # # Channels can be used in a request/response fashion
  # # by sending replies to requests from the client
  # @impl true
  # def handle_in("ping", payload, socket) do
  #   {:reply, {:ok, payload}, socket}
  # end

  @impl true
  def handle_info(%Spotify.Playback{item: item}, socket) do
    broadcast(socket, "spotify_music_changed", Spotify.Monitor.format_payload(item))
    {:noreply, socket}
  end

  def handle_info(%{keepers: _, skippers: _} = keepers_and_skippers, socket) do
    broadcast(socket, "keepers_skippers_changed", keepers_and_skippers)
    {:noreply, socket}
  end

  def handle_info(:update_pubsub, state) do
    ["spotify:music_changed", "spotify:keepers_and_skippers_changed"]
    |> Enum.each(fn evt ->
      Phoenix.PubSub.unsubscribe(WebApp.PubSub, evt)
      Phoenix.PubSub.subscribe(WebApp.PubSub, evt)
    end)

    Spotify.Monitor.broadcast_keepers_and_skippers()
    {:noreply, state}
  end
end
