defmodule Audio.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      {Audio.Difm, {}},
      {Audio, {}}
    ]

    extra_children = Application.fetch_env!(:audio, :children)

    opts = [strategy: :one_for_one, name: Audio.Supervisor]
    Supervisor.start_link(children ++ extra_children, opts)
  end
end
