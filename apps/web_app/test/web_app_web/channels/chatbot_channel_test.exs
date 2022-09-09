defmodule WebAppWeb.ChatbotChannelTest do
  @moduledoc false

  use WebAppWeb.ChannelCase

  setup do
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
    broadcast_from!(socket, "marquee_updated", %{text: "foobar"})
    assert_push "marquee_updated", %{text: "foobar"}
  end
end
