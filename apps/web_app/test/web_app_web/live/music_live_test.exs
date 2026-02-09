defmodule WebAppWeb.Live.MusicLiveTest do
  use WebAppWeb.ConnCase, async: false

  import Phoenix.LiveViewTest

  setup do
    start_supervised!({Phoenix.PubSub, name: WebApp.PubSub})
    start_supervised!(WebAppWeb.Endpoint)
    :ok
  end

  test "updates assigns on audio events", %{conn: conn} do
    {:ok, view, _html} = live(conn, "/widget/music")

    Phoenix.PubSub.broadcast(
      WebApp.PubSub,
      "audio:music_changed",
      {:audio, %{title: "Song", artist: "Artist", album_cover_url: "cover"}}
    )

    html = render(view)
    assert html =~ "Song"
    assert html =~ "Artist"
  end

  test "keeps previous values on partial payloads", %{conn: conn} do
    {:ok, view, _html} = live(conn, "/widget/music")

    Phoenix.PubSub.broadcast(
      WebApp.PubSub,
      "audio:music_changed",
      {:audio, %{title: "Song", artist: "Artist", album_cover_url: "cover"}}
    )

    _ = render(view)

    Phoenix.PubSub.broadcast(
      WebApp.PubSub,
      "audio:music_changed",
      {:audio, %{title: "Song"}}
    )

    html = render(view)
    assert html =~ "Song"
    assert html =~ "Artist"
  end
end
