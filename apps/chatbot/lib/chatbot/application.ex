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
    children = [State, {Config, Path.expand("../..", __DIR__)}]
    extra_children = Application.fetch_env!(:chatbot, :environment) |> children()

    opts = [strategy: :one_for_one, name: Chatbot.Supervisor]
    Supervisor.start_link(children ++ extra_children, opts)
  end

  defp children(:test), do: []

  defp children(_) do
    opts = [
      bot: Chatbot.Bot,
      user: "moniquelive_bot",
      pass: System.get_env("TWITCH_TMI_OAUTH"),
      channels: ["moniquelive"],
      mod_channels: ["moniquelive"],
      capabilities: [~c"membership", ~c"tags", ~c"commands"],
      debug: false
    ]

    [{TMI.Supervisor, opts}]
  end
end
