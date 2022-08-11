defmodule Chatbot.Bot do
  @moduledoc false

  use TMI

  alias Chatbot.{Commands, Config, State}

  @impl TMI.Handler
  def handle_message("!" <> _ = command, sender, chat, _tag) do
    [cmd | _] = String.split(command)

    if cmd not in Config.ignored() do
      action = Commands.action_for_command(cmd)

      if is_nil(action) do
        say(chat, "@#{sender}, não conheço esse: #{command}")
      else
        run(action, chat, command, sender)
        State.performed_command(cmd)
      end
    end
  end

  def handle_message(sentence, user, _chat, _tag) do
    State.process_sentence(sentence, user)
  end

  @impl TMI.Handler
  def handle_join("#moniquelive", user),
    do: State.user_joined(user)

  @impl TMI.Handler
  def handle_part("#moniquelive", user),
    do: State.user_left(user)

  @impl TMI.Handler
  def handle_unrecognized({:names_list, _channel, user}),
    do: State.user_joined(user)

  def handle_unrecognized(_),
    do: {}

  def handle_unrecognized(_msg, _tags),
    # IO.puts("*** unrecog/2: #{inspect(msg)}")
    do: []

  @impl TMI.Handler
  def handle_action(msg, sender, chat),
    do: IO.puts({:"action/3", msg, sender, chat})

  @impl TMI.Handler
  def handle_mention(msg, sender, chat),
    do: IO.puts({:"mention/3", msg, sender, chat})

  defp run(action, chat, command, sender) do
    action
    |> Map.get(:responses)
    |> Enum.map(&exec_string(&1, command, sender))
    |> Enum.each(&say(chat, &1))
  end

  defp exec_string(s, command, sender) do
    Regex.replace(~r/{(.*)}/, s, fn _, x ->
      x |> Code.eval_string([command: command, sender: sender], __ENV__) |> elem(0)
    end)
  end
end
