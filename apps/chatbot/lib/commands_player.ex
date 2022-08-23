defmodule Chatbot.Commands.Player do
  @moduledoc false

  @doc """
  ----------------------------------------------------------------------------
  !music
  ----------------------------------------------------------------------------
  """
  def current_song() do
    case get_creds() do
      {:ok, creds} ->
        case Spotify.Player.get_current_playback(creds) do
          {:ok, curr} ->
            artist = hd(curr.item.artists)["name"]
            title = curr.item.name

            song_url =
              String.replace(
                hd(curr.item.album["images"])["url"],
                "https://open.spotify.com/track/",
                "https://song.link/s/"
              )

            "#{artist} - #{title} - #{song_url}"

          _ ->
            "não há músicas no momento..."
        end

      _ ->
        "não consegui autenticar..."
    end

    # WebAppWeb.Endpoint.broadcast!("chatbot:events", "spotify_music_changed", %{
    #   imgUrl: ,
    #   title: ,
    #   artist:
    # })
  end

  @doc """
  ----------------------------------------------------------------------------
  !skip
  ----------------------------------------------------------------------------
  """
  def skip_song(_sender) do
    # TODO: implementar logica de cabo de guerra

    case get_creds() do
      {:ok, creds} ->
        Spotify.Player.skip_to_next(creds)
    end

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

  # --------------------------------------------------------------------------
  defp get_creds() do
    rt = Application.fetch_env!(:spotify_ex, :refresh_token)
    Spotify.Authentication.refresh(%Spotify.Credentials{refresh_token: rt})
  end
end
