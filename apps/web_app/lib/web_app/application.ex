defmodule WebApp.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      WebAppWeb.Telemetry,
      {Phoenix.PubSub, name: WebApp.PubSub},
      WebAppWeb.Endpoint
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: WebApp.Supervisor)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    WebAppWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
