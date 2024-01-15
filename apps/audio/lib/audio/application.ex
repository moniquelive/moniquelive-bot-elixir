defmodule Audio.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [Audio, Audio.KeepersAndSkippers, Audio.Difm]
    extra_children = Application.fetch_env!(:audio, :environment) |> children()

    opts = [strategy: :one_for_one, name: Audio.Supervisor]
    Supervisor.start_link(children ++ extra_children, opts)
  end

  defp children(:test), do: []
  defp children(_), do: [{Audio.Spotify, Application.fetch_env!(:spotify_ex, :refresh_token)}]
end
