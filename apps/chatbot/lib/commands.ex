defmodule Chatbot.Commands do
  @moduledoc false

  alias Chatbot.{State, Config}

  @doc """
  !cmds
  """
  def commands() do
    c = State.command_count()

    Config.commands()
    |> Enum.map_join(" ", &(&1.actions |> format_action_counter(c)))
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
  def help(command), do: help_helper(String.split(command), "help")

  @doc """
  !ajuda
  """
  def ajuda(command), do: help_helper(String.split(command), "ajuda")

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

  def action_for_command(cmd) do
    Config.commands()
    |> Enum.filter(&(cmd in &1.actions))
    |> List.first()
  end

  defp help_helper([_ | rest], attr) do
    action =
      case rest do
        [] ->
          action_for_command("!" <> attr)

        [h | _] ->
          action_for_command(h) ||
            action_for_command("!" <> h) ||
            action_for_command("!" <> attr)
      end

    cmd = List.first(action.actions)
    msg = action[String.to_atom(attr)]
    aliases = Enum.join(action.actions, ",")
    "#{cmd}: #{msg} (aliases: #{aliases})"
  end

  defp format_action_counter(actions, counters) do
    sum =
      actions
      |> Enum.map(&String.to_atom/1)
      |> Enum.map(&Map.get(counters, &1, 0))
      |> Enum.sum()

    if sum > 0,
      do: List.first(actions) <> " (#{sum})",
      else: List.first(actions)
  end
end
