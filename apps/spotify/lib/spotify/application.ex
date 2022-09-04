defmodule Spotify.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      {Spotify.Monitor, Application.fetch_env!(:spotify_ex, :refresh_token)}
    ]

    opts = [strategy: :one_for_one, name: Spotify.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
