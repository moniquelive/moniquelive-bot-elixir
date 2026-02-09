defmodule WebAppWeb.ChatbotChannelTest do
  @moduledoc false

  use WebAppWeb.ChannelCase

  setup do
    start_supervised!({Phoenix.PubSub, name: WebApp.PubSub})
    start_supervised!(WebAppWeb.Endpoint)

    {:ok, _, socket} =
      WebAppWeb.UserSocket
      |> socket()
      |> subscribe_and_join(WebAppWeb.ChatbotChannel, "chatbot:tests")

    %{socket: socket}
  end

  # no `handle_in` for now...
  #
  # test "shout broadcasts to chatbot:lobby", %{socket: socket} do
  #   push(socket, "shout", %{"hello" => "all"})
  #   assert_broadcast "shout", %{"hello" => "all"}
  # end

  test "broadcasts are pushed to the client", %{socket: socket} do
    broadcast_from!(socket, "anything", %{data: "matches"})
    assert_push "anything", %{data: "matches"}
  end

  test "audio events push music updates", %{socket: socket} do
    send(
      socket.channel_pid,
      {:audio, %{title: "Song", artist: "Artist", album_cover_url: "cover"}}
    )

    assert_push "music_changed", %{title: "Song", artist: "Artist", album_cover_url: "cover"}
  end

  test "marquee events push updates", %{socket: socket} do
    send(socket.channel_pid, {:marquee, "hello"})
    assert_push "marquee_updated", %{text: "hello"}
  end

  test "tts events push audio payload", %{socket: socket} do
    send(socket.channel_pid, {:play_tts, %{mp3: "data"}})
    assert_push "play_tts", %{mp3: "data"}
  end

  test "keepers and skippers events push updates", %{socket: socket} do
    send(socket.channel_pid, %{keepers: ["a"], skippers: ["b"]})
    assert_push "keepers_skippers_changed", %{keepers: ["a"], skippers: ["b"]}
  end
end
