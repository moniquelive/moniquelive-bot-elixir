defmodule Chatbot.Commands do
  @moduledoc false

  alias Chatbot.{Config, State}

  def action_for_command(cmd) do
    Config.commands()
    |> Enum.find(&(cmd in &1.actions))
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

  # --- COMMANDS -------------------------------------------------------------

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
    case String.split(command) do
      [_hug] -> hug(sender, "!hug " <> Enum.random(State.roster()))
      [_hug, ^sender | _] -> "♥ #{sender} se auto-abraça 02Pat"
      [_hug, friend | _] -> "♥ #{sender} abraça #{friend} 02Pat"
    end
  end

  def urls(command) do
    user_urls =
      case String.split(command) do
        [_url] -> State.urls_for("")
        [_url, user | _] -> State.urls_for(user)
      end

    if Enum.empty?(user_urls) do
      "/me (sem urls no momento)"
    else
      user_urls
      |> Enum.map_join("; ", fn %{user: user, urls: urls} ->
        ~s(#{user}: #{Enum.join(urls, " ")})
      end)
    end
  end
end
