defmodule Chatbot.Commands do
  alias Chatbot.State

  @doc """
  !cmds
  """
  def commands() do
    # TODO: action (count)
    ConfigFileWatcher.commands()
    |> Enum.map(&(&1.actions |> List.first()))
    |> Enum.join(" ")
  end

  @doc """
  !os
  """
  def uname() do
    {result, _} = System.cmd("guname", ["-mor"])
    "macOS #{result}"
  end

  @doc """
  !help
  """
  def help(command), do: helpHelper(String.split(command), "help")

  @doc """
  !ajuda
  """
  def ajuda(command), do: helpHelper(String.split(command), "ajuda")

  def roster(), do: State.roster()

  def hug(sender, command) do
    [_ | args] = String.split(command)

    case args do
      [] -> "♥ #{sender} abraça #{Enum.random(State.roster())} 02Pat"
      [^sender] -> "♥ #{sender} se auto-abraça 02Pat"
      [friend] -> "♥ #{sender} abraça #{friend} 02Pat"
    end
  end

  # --- HELPERS --------------------------------------------------------------

  def actionForCommand(cmd) do
    ConfigFileWatcher.commands()
    |> Enum.filter(&(cmd in &1.actions))
    |> List.first()
  end

  defp helpHelper([_ | rest], attr) do
    action =
      case rest do
        [] ->
          actionForCommand("!" <> attr)

        [h | _] ->
          actionForCommand(h) ||
            actionForCommand("!" <> h) ||
            actionForCommand("!" <> attr)
      end

    cmd = List.first(action.actions)
    msg = action[String.to_atom(attr)]
    aliases = Enum.join(action.actions, ",")
    "#{cmd}: #{msg} (aliases: #{aliases})"
  end
end
