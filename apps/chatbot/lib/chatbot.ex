defmodule Chatbot.Bot do
  use TMI

  @impl TMI.Handler
  def handle_message(command, sender, chat) do
    config = ConfigFileWatcher.config()

    if command not in config.ignored_commands do
      config.commands
      |> Enum.filter(&(command in &1.actions))
      |> List.first()
      |> case do
        nil ->
          say(chat, "@#{sender}, não conheço esse: #{command}")

        action ->
          run(action, chat)
      end
    end
  end

  defp run(action, chat) do
    # TODO: tratar os dinamicos
    action
    |> Map.get(:responses)
    |> Enum.each(&say(chat, &1))
  end
end
