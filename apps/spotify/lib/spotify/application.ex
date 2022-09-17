defmodule Spotify.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = Application.fetch_env!(:spotify, :children)

    opts = [strategy: :one_for_one, name: Spotify.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
