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

    artist = hd(curr.item.artists)["name"]
    title = curr.item.name

    song_url =
      hd(curr.item.album["images"])["url"]
      |> String.replace("https://open.spotify.com/track/", "https://song.link/s/")

    "#{artist} - #{title} - #{song_url}"
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
