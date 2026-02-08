defmodule Chatbot.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    env = Application.fetch_env!(:chatbot, :environment)

    children =
      [
        Chatbot.State,
        {Chatbot.Config, Path.expand("../../priv", __DIR__)}
      ] ++ extra(env)

    Supervisor.start_link(children, strategy: :one_for_one, name: Chatbot.Supervisor)
  end

  defp extra(:test), do: []

  defp extra(_),
    do: [
      {TMI.Supervisor,
       bot: Chatbot.Bot,
       user: "moniquelive_bot",
       pass: System.get_env("TWITCH_TMI_OAUTH"),
       channels: ["moniquelive"],
       mod_channels: ["moniquelive"],
       capabilities: [~c"membership", ~c"tags", ~c"commands"],
       debug: false}
    ]
end
