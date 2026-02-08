defmodule Audio.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    env = Application.fetch_env!(:audio, :environment)

    children =
      [
        Audio,
        Audio.KeepersAndSkippers
      ] ++ extra(env)

    Supervisor.start_link(children, strategy: :one_for_one, name: Audio.Supervisor)
  end

  defp extra(:test), do: []

  defp extra(_),
    do: [
      %{id: Audio.Difm, start: {Audio.Difm, :start_link, []}},
      {Audio.Spotify, Application.fetch_env!(:spotify_ex, :refresh_token)}
    ]
end
