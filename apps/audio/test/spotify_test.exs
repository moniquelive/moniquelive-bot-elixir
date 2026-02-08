defmodule Audio.SpotifyTest do
  use ExUnit.Case, async: false

  alias Audio.KeepersAndSkippers, as: KS

  doctest Audio.Spotify

  setup_all do
    ensure_pubsub_started()
    ensure_started(Audio, Audio)
    ensure_started(Audio.KeepersAndSkippers, Audio.KeepersAndSkippers)
    :ok
  end

  setup do
    Audio.Spotify.Client.Test.reset()
    KS.reset()
    :sys.replace_state(Audio, fn _ -> %{difm_payload: nil, spotify_payload: nil} end)
    :ok
  end

  test "current_song returns the current state" do
    curr = %{item: %{id: "1"}, is_playing: true}

    assert {:reply, ^curr, %{curr: ^curr}} =
             Audio.Spotify.handle_call(:current_song, self(), %{curr: curr})
  end

  test "song_info returns errors from spotify" do
    Audio.Spotify.Client.Test.put_response(
      :get_track,
      {:ok, %{"error" => %{"message" => "nope"}}}
    )

    state = %{creds: %Spotify.Credentials{}}

    assert {:reply, {:error, "nope"}, ^state} =
             Audio.Spotify.handle_call({:song_info, "id"}, self(), state)
  end

  test "song_info returns track info" do
    Audio.Spotify.Client.Test.put_response(:get_track, {:ok, %{"id" => "id"}})
    state = %{creds: %Spotify.Credentials{}}

    assert {:reply, {:ok, %{"id" => "id"}}, ^state} =
             Audio.Spotify.handle_call({:song_info, "id"}, self(), state)
  end

  test "skip_song and keep_song update votes" do
    KS.reset()
    state = %{creds: %Spotify.Credentials{}}

    assert {:reply, "Aaaaa parciais: (vaza: 1 X fica: 0)", ^state} =
             Audio.Spotify.handle_call({:skip_song, "user"}, self(), state)

    assert {:reply, "kumaPls parciais: (vaza: 1 X fica: 1)", ^state} =
             Audio.Spotify.handle_call({:keep_song, "user"}, self(), state)
  end

  test "enqueue delegates to spotify client" do
    state = %{creds: %Spotify.Credentials{}}
    creds = state.creds
    assert {:noreply, ^state} = Audio.Spotify.handle_cast({:enqueue, "track"}, state)

    assert [{:enqueue, ^creds, "spotify:track:track"} | _] =
             Audio.Spotify.Client.Test.calls()
  end

  test "refresh_token_timer updates credentials" do
    creds = %Spotify.Credentials{access_token: "token"}
    Audio.Spotify.Client.Test.put_response(:refresh, {:ok, creds})

    state = %{refresh_token: "rt", creds: nil}
    assert {:noreply, %{creds: ^creds}} = Audio.Spotify.handle_info(:refresh_token_timer, state)
  end

  test "monitor_spotify_timer stops when playback ends" do
    Audio.Spotify.Client.Test.put_response(:get_currently_playing, :ok)

    state = %{curr: %{item: %{id: "1"}, is_playing: true}, creds: %Spotify.Credentials{}}
    assert {:noreply, %{curr: nil}} = Audio.Spotify.handle_info(:monitor_spotify_timer, state)
  end

  test "monitor_spotify_timer updates when track changes" do
    new_curr = %{
      item: %{
        id: "new",
        name: "Song",
        artists: [%{"name" => "Artist"}],
        album: %{"images" => [%{"url" => "cover"}]}
      },
      is_playing: true
    }

    Audio.Spotify.Client.Test.put_response(:get_currently_playing, {:ok, new_curr})

    state = %{curr: %{item: %{id: "old"}, is_playing: true}, creds: %Spotify.Credentials{}}

    assert {:noreply, %{curr: ^new_curr}} =
             Audio.Spotify.handle_info(:monitor_spotify_timer, state)
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
