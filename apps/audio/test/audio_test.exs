defmodule AudioTest do
  use ExUnit.Case, async: false

  doctest Audio

  setup_all do
    ensure_pubsub_started()
    ensure_started(Audio, Audio)
    :ok
  end

  setup do
    :sys.replace_state(Audio, fn _ -> %{difm_payload: nil, spotify_payload: nil} end)
    :ok
  end

  test "current_song_info returns a default message" do
    assert Audio.current_song_info() == "Sem música no momento..."
    assert Audio.whos_playing() == :difm
  end

  test "spotify payload is preferred when playing" do
    Phoenix.PubSub.subscribe(WebApp.PubSub, "audio:music_changed")

    item = %{
      name: "Song",
      artists: [%{"name" => "Artist"}],
      album: %{"images" => [%{"url" => "cover"}]}
    }

    Audio.spotify_changed(%{item: item, is_playing: true})

    assert Audio.current_song_info() == "Song - Artist"
    assert Audio.whos_playing() == :spotify

    Audio.broadcast_song_info()

    assert_receive {:audio,
                    %{title: "Song", artist: "Artist", album_cover_url: "cover", is_playing: true}}
  end

  test "difm payload is used when spotify is not playing" do
    Phoenix.PubSub.subscribe(WebApp.PubSub, "audio:music_changed")

    payload = %{
      "track" => %{
        "display_title" => "DI Song",
        "display_artist" => "DJ",
        "album_art" => "art"
      }
    }

    Audio.difm_changed(payload)

    assert Audio.current_song_info() == "DI Song - DJ"
    assert Audio.whos_playing() == :difm

    Audio.broadcast_song_info()
    assert_receive {:audio, %{title: "DI Song", artist: "DJ", album_cover_url: "art"}}
  end

  test "music_live_mounted triggers a broadcast" do
    Phoenix.PubSub.subscribe(WebApp.PubSub, "audio:music_changed")

    payload = %{
      "track" => %{
        "display_title" => "DI Song",
        "display_artist" => "DJ",
        "album_art" => "art"
      }
    }

    Audio.difm_changed(payload)
    send(Audio, :music_live_mounted)

    assert_receive {:audio, %{title: "DI Song", artist: "DJ", album_cover_url: "art"}}
  end

  defp ensure_pubsub_started do
    case Process.whereis(WebApp.PubSub) do
      nil -> start_supervised!({Phoenix.PubSub, name: WebApp.PubSub})
      _pid -> :ok
    end
  end

  defp ensure_started(name, spec) do
    case Process.whereis(name) do
      nil -> start_supervised!(spec)
      _pid -> :ok
    end
  end
end
