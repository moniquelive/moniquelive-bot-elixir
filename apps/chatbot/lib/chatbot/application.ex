defmodule Chatbot.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    [bot_config] = Application.fetch_env!(:chatbot, :bots)

    children = [
      # Starts a worker by calling: Chatbot.Worker.start_link(arg)
      # {Chatbot.Worker, arg}
      {ConfigFileWatcher, [dirs: [Path.expand("../..", __DIR__)]]},
      {TMI.Supervisor, bot_config}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Chatbot.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
