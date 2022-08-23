defmodule Chatbot.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  alias Chatbot.{
    Config,
    SpotifyMonitor,
    State
  }

  @impl true
  def start(_type, _args) do
    start_chatbot_supervisor()
    start_spotify_supervisor()
  end

  defp start_chatbot_supervisor() do
    [bot_config] = Application.fetch_env!(:chatbot, :bots)

    children = [
      State,
      {Config, [dirs: [Path.expand("../..", __DIR__)]]},
      {TMI.Supervisor, bot_config}
    ]

    opts = [strategy: :one_for_all, name: Chatbot.Supervisor]
    Supervisor.start_link(children, opts)
  end

  defp start_spotify_supervisor() do
    children = [
      {SpotifyMonitor, Application.fetch_env!(:spotify_ex, :refresh_token)}
    ]

    opts = [strategy: :one_for_one, name: Chatbot.SpotifySupervisor]
    Supervisor.start_link(children, opts)
  end
end
