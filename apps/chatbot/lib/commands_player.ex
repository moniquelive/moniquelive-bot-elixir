defmodule Chatbot.Commands.Player do
  @moduledoc false

  @doc """
  ----------------------------------------------------------------------------
  !music
  ----------------------------------------------------------------------------
  """
  def current_song() do
    curr_spotify = Spotify.Monitor.current_song()

    cond do
      curr_spotify && curr_spotify.is_playing ->
        Spotify.Monitor.broadcast_song_info()
        nil

      Difm.is_playing() ->
        Difm.broadcast_song_info()
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
    do: Spotify.Monitor.skip_song(sender)

  @doc """
  ----------------------------------------------------------------------------
  !keep
  ----------------------------------------------------------------------------
  """
  def keep_song(sender),
    do: Spotify.Monitor.keep_song(sender)
end
