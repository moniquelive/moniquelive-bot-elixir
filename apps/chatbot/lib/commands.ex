defmodule Chatbot.Commands do
  @moduledoc false

  alias Chatbot.{Config, State}

  def action_for_command(cmd),
    do:
      Config.commands()
      |> Enum.find(&(cmd in &1["actions"]))

  @doc """
  ----------------------------------------------------------------------------
  !cmds
  ----------------------------------------------------------------------------
  """
  def commands() do
    c = State.command_count()

    Config.commands()
    |> Enum.map_join(" ", &(&1["actions"] |> format_action_counter(c)))
  end

  defp format_action_counter(aliases, counters) do
    total_calls =
      aliases
      |> Enum.map(&Map.get(counters, &1, 0))
      |> Enum.sum()

    List.first(aliases) <>
      if total_calls > 0, do: " (#{total_calls})", else: ""
  end

  @doc """
  ----------------------------------------------------------------------------
  !os
  ----------------------------------------------------------------------------
  """
  def uname() do
    result =
      System.cmd("guname", ["-mor"])
      |> elem(0)

    "macOS #{result}"
  end

  @doc """
  ----------------------------------------------------------------------------
  !help
  ----------------------------------------------------------------------------
  """
  def help(command),
    do: help_helper(command, action_for_command("!help"))

  @doc """
  ----------------------------------------------------------------------------
  !ajuda
  ----------------------------------------------------------------------------
  """
  def ajuda(command),
    do: help_helper(command, action_for_command("!ajuda"))

  defp help_helper(command, help_action) do
    action =
      case String.split(command) do
        [_help, subject | _] ->
          action_for_command(subject) || action_for_command("!" <> subject)

        [_help] ->
          nil
      end || help_action

    ["!" <> help_action_label | _] = help_action["actions"]
    [cmd | _] = action["actions"]
    msg = action[help_action_label]
    aliases = Enum.join(action["actions"], ",")
    "#{cmd}: #{msg} (aliases: #{aliases})"
  end

  @doc """
  ----------------------------------------------------------------------------
  !c
  ----------------------------------------------------------------------------
  """
  def roster(),
    do: State.roster()

  @doc """
  ----------------------------------------------------------------------------
  !hug
  ----------------------------------------------------------------------------
  """
  def hug(sender, command) do
    case String.split(command) do
      [_hug] -> hug(sender, "!hug " <> Enum.random(State.roster()))
      [_hug, ^sender | _] -> "♥ #{sender} se auto-abraça 02Pat"
      [_hug, friend | _] -> "♥ #{sender} abraça #{friend} 02Pat"
    end
  end

  @doc """
  ----------------------------------------------------------------------------
  !ban
  ----------------------------------------------------------------------------
  """
  def ban(command) do
    case String.split(command) do
      [_ban] ->
        ban("!ban " <> Enum.random(State.roster()))

      [ban, friend | _] ->
        action = action_for_command(ban)

        Enum.random(action["extras"])
        |> (&~s("#{&1}")).()
        |> Code.eval_string([target: friend], __ENV__)
        |> elem(0)
    end
  end

  @doc """
  ----------------------------------------------------------------------------
  !urls
  ----------------------------------------------------------------------------
  """
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
      |> Enum.map_join(" ", fn %{user: user, urls: urls} ->
        ~s(#{user}: #{Enum.join(urls, " ")})
      end)
    end
  end

  @doc """
  ----------------------------------------------------------------------------
  !uptime
  ----------------------------------------------------------------------------
  """
  def uptime(sender, command) do
    case String.split(command) do
      [_uptime] ->
        uptime(sender, "!uptime " <> sender)

      [_uptime, friend | _] ->
        case State.get_user(friend) do
          {_, dt, _} ->
            "#{friend} entrou #{format_date(dt)} (há #{seconds_ago(dt)} segundos)"

          _ ->
            "#{friend} não tem horário de entrada... :("
        end
    end
  end

  defp format_date(dt) do
    dt
    |> DateTime.shift_zone!("America/Sao_Paulo")
    |> Calendar.strftime("dia %x as %X", preferred_date: "%d/%m/%Y")
  end

  defp seconds_ago(dt) do
    dt
    |> DateTime.diff(DateTime.utc_now(), :second)
    |> (&Kernel.-/1).()
  end
end
