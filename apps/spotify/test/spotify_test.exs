defmodule SpotifyTest do
  use ExUnit.Case
  doctest Spotify

  test "greets the world" do
    assert Spotify.hello() == :world
  end
end
