defmodule Audio.Spotify.Client.SpotifyEx do
  @moduledoc false

  @behaviour Audio.Spotify.Client

  @impl true
  def get_currently_playing(creds), do: Spotify.Player.get_currently_playing(creds)

  @impl true
  def refresh(creds), do: Spotify.Authentication.refresh(creds)

  @impl true
  def skip_to_next(creds), do: Spotify.Player.skip_to_next(creds)

  @impl true
  def enqueue(creds, uri), do: Spotify.Player.enqueue(creds, uri)

  @impl true
  def get_track(creds, song_id), do: Spotify.Track.get_track(creds, song_id)
end
