defmodule Chatbot.Commands.Player do
  @moduledoc false

  @doc """
  ----------------------------------------------------------------------------
  !music
  ----------------------------------------------------------------------------
  """
  def current_song() do
    curr_spotify = SpotifyMonitor.current_song()

    cond do
      curr_spotify && curr_spotify.is_playing ->
        SpotifyMonitor.broadcast_song_info()
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
    do: SpotifyMonitor.skip_song(sender)

  @doc """
  ----------------------------------------------------------------------------
  !keep
  ----------------------------------------------------------------------------
  """
  def keep_song(sender),
    do: SpotifyMonitor.keep_song(sender)
end
