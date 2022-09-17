defmodule Chatbot.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  alias Chatbot.{
    Config,
    State
  }

  @impl Application
  def start(_type, _args) do
    children = [
      {State, name: Chatbot.State},
      {Config, Path.expand("../..", __DIR__)}
    ]

    extra_children = Application.fetch_env!(:chatbot, :extra_children)

    opts = [strategy: :one_for_one, name: Chatbot.Supervisor]
    Supervisor.start_link(children ++ extra_children, opts)
  end
end
