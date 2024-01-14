defmodule Chatbot.Commands.Player do
  @moduledoc false

  @doc """
  ----------------------------------------------------------------------------
  !music
  ----------------------------------------------------------------------------
  """
  def current_song() do
    curr_spotify = Audio.Spotify.current_song()

    cond do
      curr_spotify && curr_spotify.is_playing ->
        Audio.Spotify.broadcast_song_info()
        nil

      Audio.Difm.is_playing() ->
        Audio.Difm.broadcast_song_info()
        nil

      true ->
        "sem música no momento..."
    end
  end

  @doc """
  ----------------------------------------------------------------------------
  !skip
  ----------------------------------------------------------------------------
  """
  def skip_song(sender),
    do: Audio.Spotify.skip_song(sender)

  @doc """
  ----------------------------------------------------------------------------
  !keep
  ----------------------------------------------------------------------------
  """
  def keep_song(sender),
    do: Audio.Spotify.keep_song(sender)
end
