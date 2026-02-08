defmodule Audio.Spotify.Client do
  @moduledoc false

  @callback get_currently_playing(Spotify.Credentials.t() | nil) ::
              :ok | {:ok, map()} | {:error, term()}

  @callback refresh(Spotify.Credentials.t()) :: {:ok, Spotify.Credentials.t()} | {:error, term()}
  @callback skip_to_next(Spotify.Credentials.t()) :: :ok | {:error, term()}
  @callback enqueue(Spotify.Credentials.t(), String.t()) :: :ok | {:error, term()}
  @callback get_track(Spotify.Credentials.t(), String.t()) :: {:ok, map()} | {:error, term()}
end
