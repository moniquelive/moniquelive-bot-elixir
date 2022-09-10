defmodule Chatbot.Commands.Player do
  @moduledoc false

  @doc """
  ----------------------------------------------------------------------------
  !music
  ----------------------------------------------------------------------------
  """
  def current_song() do
    curr = Spotify.Monitor.current_song()

    if curr && curr.is_playing do
      Spotify.Monitor.broadcast_song_info()
      nil
    else
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
