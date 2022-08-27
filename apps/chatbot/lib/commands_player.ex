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
  def skip_song(_sender) do
    # TODO: implementar logica de cabo de guerra

    SpotifyMonitor.skip_to_next()

    "pulando..."
  end

  @doc """
  ----------------------------------------------------------------------------
  !keep
  ----------------------------------------------------------------------------
  """
  def keep_song(_sender) do
    # TODO: implementar logica de cabo de guerra

    "ficando..."
  end
end
