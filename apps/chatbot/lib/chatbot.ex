defmodule Chatbot.Bot do
  @moduledoc false

  use TMI

  alias Chatbot.{Commands, Config, State, Utils}

  @impl TMI.Handler
  def handle_message("!" <> _ = command_line, sender, chat, _tag) do
    [cmd | _] = String.split(command_line)

    if cmd not in Config.ignored() do
      action = Commands.action_for_command(cmd)

      if is_nil(action) do
        say(chat, "@#{sender}, não conheço esse: #{command_line}")
      else
        run(action, chat, command_line, sender)
        State.performed_command(cmd)
      end
    end
  end

  def handle_message(sentence, user, _chat, _tag),
    do: State.process_sentence(sentence, user)

  @impl TMI.Handler
  def handle_join("#moniquelive", user) do
    Logger.debug("*** #{user} logged in")
    State.user_joined(user)
  end

  @impl TMI.Handler
  def handle_part("#moniquelive", user) do
    Logger.debug("*** #{user} left")
    State.user_left(user)
  end

  @impl TMI.Handler
  def handle_unrecognized({:names_list, _channel, user}) do
    Logger.debug("*** #{user} logged in (unrecog)")
    State.user_joined(user)
  end

  def handle_unrecognized(msg),
    do: Logger.debug("*** unrecog/1: #{inspect(msg)}")

  def handle_unrecognized(msg, _tags),
    do: Logger.debug("*** unrecog/2: #{inspect(msg)}")

  @impl TMI.Handler
  def handle_action(msg, sender, chat),
    do: IO.puts({:"action/3", msg, sender, chat})

  @impl TMI.Handler
  def handle_mention(msg, sender, chat),
    do: IO.puts({:"mention/3", msg, sender, chat})

  # --- PRIVATE ---------------------------------------------------------------

  defp run(action, chat, command, sender) do
    action["responses"]
    |> Enum.map(&eval_string(&1, command, sender))
    |> Enum.flat_map(&Utils.word_wrap(&1, 500))
    |> Enum.each(&say(chat, &1))
  end

  defp eval_string(s, command, sender) do
    Regex.replace(~r/{(.*)}/, s, fn _, capture ->
      capture
      |> Code.eval_string([command: command, sender: sender], __ENV__)
      |> elem(0)
    end)
  end
end
