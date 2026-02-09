defmodule WebAppWeb.Live.MarqueeLiveTest do
  use WebAppWeb.ConnCase, async: false

  import Phoenix.LiveViewTest

  setup do
    start_supervised!({Phoenix.PubSub, name: WebApp.PubSub})
    start_supervised!(WebAppWeb.Endpoint)
    :ok
  end

  test "updates assigns on marquee events", %{conn: conn} do
    {:ok, view, _html} = live(conn, "/widget/marquee")

    Phoenix.PubSub.broadcast(WebApp.PubSub, "layer:marquee_updated", {:marquee, "hello"})
    assert render(view) =~ "hello"
  end

  test "keeps previous message on invalid payloads", %{conn: conn} do
    {:ok, view, _html} = live(conn, "/widget/marquee")

    Phoenix.PubSub.broadcast(WebApp.PubSub, "layer:marquee_updated", {:marquee, "hello"})
    _ = render(view)

    Phoenix.PubSub.broadcast(WebApp.PubSub, "layer:marquee_updated", {:marquee, nil})
    assert render(view) =~ "hello"
  end
end
