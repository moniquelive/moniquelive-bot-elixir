defmodule Chatbot.Commands.Player do
  @moduledoc false

  @doc """
  ----------------------------------------------------------------------------
  !music
  ----------------------------------------------------------------------------
  """
  def current_song() do
    Audio.broadcast_song_info()
    Audio.current_song_info()
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
