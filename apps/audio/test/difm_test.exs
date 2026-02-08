defmodule Audio.DifmTest do
  use ExUnit.Case, async: false

  doctest Audio.Difm

  setup do
    Audio.HttpClient.Test.reset()
    :persistent_term.erase({Audio.Difm, :channel_names})
    :ok
  end

  test "loads channel names from priv file" do
    assert "vocaltrance" in Audio.Difm.get_channel_names()
  end

  test "set_channel updates when valid" do
    data = %{channel: "vocaltrance", current_song: %{}, channel_names: ["vocaltrance", "house"]}

    assert {:keep_state, new_data, [{:state_timeout, 0, :refresh_timer}]} =
             Audio.Difm.handle_event(:cast, {:set_channel, "house"}, :refresh_timer, data)

    assert new_data.channel == "house"
  end

  test "set_channel ignores invalid" do
    data = %{channel: "vocaltrance", current_song: %{}, channel_names: ["vocaltrance"]}

    assert :keep_state_and_data =
             Audio.Difm.handle_event(:cast, {:set_channel, "nope"}, :state, data)
  end

  test "refresh timer handles http errors" do
    Audio.HttpClient.Test.put_response("/v1/di/currently_playing", {:error, :timeout})

    data = %{channel: "vocaltrance", current_song: %{}, channel_names: ["vocaltrance"]}

    assert :keep_state_and_data =
             Audio.Difm.handle_event(:state_timeout, :refresh_timer, :state, data)
  end

  test "refresh timer updates current song" do
    duration = 120

    start_time =
      DateTime.utc_now()
      |> DateTime.add(-(10 + duration) + 2)
      |> DateTime.to_iso8601()

    track = %{
      "id" => "123",
      "start_time" => start_time,
      "duration" => duration,
      "display_title" => "Track",
      "display_artist" => "Artist",
      "album_art" => "old"
    }

    song = %{"channel_key" => "vocaltrance", "track" => track}

    Audio.HttpClient.Test.put_response(
      "/v1/di/currently_playing",
      {:ok, %Req.Response{status: 200, body: [song]}}
    )

    Audio.HttpClient.Test.put_response(
      "/v1/radiotunes/currently_playing",
      {:ok, %Req.Response{status: 200, body: []}}
    )

    Audio.HttpClient.Test.put_response(
      "/v1/di/tracks/123",
      {:ok, %Req.Response{status: 200, body: %{"asset_url" => "//cdn/cover.jpg"}}}
    )

    data = %{channel: "vocaltrance", current_song: %{}, channel_names: ["vocaltrance"]}

    assert {:keep_state, new_data, [{:state_timeout, timeout, :refresh_timer}]} =
             Audio.Difm.handle_event(:state_timeout, :refresh_timer, :state, data)

    assert new_data.current_song["track"]["album_art"] == "https://cdn/cover.jpg"
    assert timeout >= 2_000
  end
end
