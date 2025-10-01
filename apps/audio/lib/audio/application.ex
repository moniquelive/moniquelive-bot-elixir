defmodule Audio.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    env = Application.fetch_env!(:audio, :environment)

    children =
      [
        Audio,
        Audio.KeepersAndSkippers,
        %{id: Audio.Difm, start: {Audio.Difm, :start_link, []}}
      ] ++ extra(env)

    Supervisor.start_link(children, strategy: :one_for_one, name: Audio.Supervisor)
  end

  defp extra(:test), do: []
  defp extra(_), do: [{Audio.Spotify, Application.fetch_env!(:spotify_ex, :refresh_token)}]
end
