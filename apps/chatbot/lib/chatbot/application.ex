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

  @impl Application
  def start(_type, _args) do
    [bot_config] = Application.fetch_env!(:chatbot, :bots)

    children = [
      State,
      {Config, [dirs: [Path.expand("../..", __DIR__)]]},
      {TMI.Supervisor, bot_config},
      {SpotifyMonitor, Application.fetch_env!(:spotify_ex, :refresh_token)}
    ]

    opts = [strategy: :one_for_one, name: Chatbot.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
