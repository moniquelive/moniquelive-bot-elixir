defmodule Chatbot.Commands.Player do
  @moduledoc false

  alias Chatbot.SpotifyMonitor

  @doc """
  ----------------------------------------------------------------------------
  !music
  ----------------------------------------------------------------------------
  """
  def current_song() do
    curr = SpotifyMonitor.current_song()

    if curr && curr.is_playing,
      do: SpotifyMonitor.broadcast_song_info(curr),
      else: "sem música no momento..."
  end

  @doc """
  ----------------------------------------------------------------------------
  !skip
  ----------------------------------------------------------------------------
  """
  def skip_song(sender), do: SpotifyMonitor.skip_song(sender)

  @doc """
  ----------------------------------------------------------------------------
  !keep
  ----------------------------------------------------------------------------
  """
  def keep_song(sender), do: SpotifyMonitor.keep_song(sender)
end
