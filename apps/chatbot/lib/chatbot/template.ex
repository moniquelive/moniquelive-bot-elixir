defmodule Chatbot.Template do
  @moduledoc false

  require Logger

  alias Chatbot.{Commands, State}

  @expression_pattern ~r/#\{([^}]+)\}/

  def render(line, assigns) when is_binary(line) do
    Regex.replace(@expression_pattern, line, fn _full, expr ->
      expr
      |> eval_expr(assigns)
      |> to_string()
    end)
  end

  defp eval_expr(expr, assigns) do
    expr = String.trim(expr)

    case expr do
      "command" -> Map.get(assigns, :command, "")
      "sender" -> Map.get(assigns, :sender, "")
      "target" -> Map.get(assigns, :target, "")
      "Commands.commands" -> Commands.commands()
      "Commands.Player.current_song" -> Commands.Player.current_song()
      "Commands.uname()" -> Commands.uname()
      "length(Commands.roster)" -> State.roster() |> length()
      _ -> eval_expr_pattern(expr, assigns)
    end
  end

  # Patterns for command expressions with their handler functions
  @simple_command_patterns [
    {~r/^Commands\.help\(\s*command\s*\)$/, :help},
    {~r/^Commands\.ajuda\(\s*command\s*\)$/, :ajuda},
    {~r/^Commands\.urls\(\s*command\s*\)$/, :urls},
    {~r/^Commands\.ban\(\s*command\s*\)$/, :ban}
  ]

  @player_command_patterns [
    {~r/^Commands\.Player\.skip_song\(\s*sender\s*\)$/, :skip_song},
    {~r/^Commands\.Player\.keep_song\(\s*sender\s*\)$/, :keep_song}
  ]

  @sender_command_patterns [
    {~r/^Commands\.uptime\(\s*sender\s*,\s*command\s*\)$/, :uptime},
    {~r/^Commands\.marquee\(\s*sender\s*,\s*command\s*\)$/, :marquee},
    {~r/^Commands\.follow_age\(\s*sender\s*,\s*command\s*\)$/, :follow_age},
    {~r/^Commands\.hug\(\s*sender\s*,\s*command\s*\)$/, :hug},
    {~r/^Commands\.difm\(\s*sender\s*,\s*command\s*\)$/, :difm}
  ]

  @roster_join_pattern ~r/^Commands\.roster\s*\|>\s*Enum\.join\("([^"]*)"\)$/

  defp eval_expr_pattern(expr, assigns) do
    cond do
      match = match_simple_command(expr) ->
        exec_simple_command(match, assigns)

      match = match_player_command(expr) ->
        exec_player_command(match, assigns)

      match = match_sender_command(expr) ->
        exec_sender_command(match, assigns)

      Regex.match?(@roster_join_pattern, expr) ->
        [_, joiner] = Regex.run(@roster_join_pattern, expr)
        State.roster() |> Enum.join(joiner)

      true ->
        Logger.warning("unknown template expression: #{expr}")
        ""
    end
  end

  defp match_simple_command(expr) do
    Enum.find(@simple_command_patterns, fn {pattern, _handler} ->
      Regex.match?(pattern, expr)
    end)
  end

  defp exec_simple_command({_pattern, :help}, assigns) do
    Commands.help(Map.get(assigns, :command, ""))
  end

  defp exec_simple_command({_pattern, :ajuda}, assigns) do
    Commands.ajuda(Map.get(assigns, :command, ""))
  end

  defp exec_simple_command({_pattern, :urls}, assigns) do
    Commands.urls(Map.get(assigns, :command, ""))
  end

  defp exec_simple_command({_pattern, :ban}, assigns) do
    Commands.ban(Map.get(assigns, :command, ""))
  end

  defp match_player_command(expr) do
    Enum.find(@player_command_patterns, fn {pattern, _handler} ->
      Regex.match?(pattern, expr)
    end)
  end

  defp exec_player_command({_pattern, :skip_song}, assigns) do
    Commands.Player.skip_song(Map.get(assigns, :sender, ""))
  end

  defp exec_player_command({_pattern, :keep_song}, assigns) do
    Commands.Player.keep_song(Map.get(assigns, :sender, ""))
  end

  defp match_sender_command(expr) do
    Enum.find(@sender_command_patterns, fn {pattern, _handler} ->
      Regex.match?(pattern, expr)
    end)
  end

  defp exec_sender_command({_pattern, :uptime}, assigns) do
    Commands.uptime(Map.get(assigns, :sender, ""), Map.get(assigns, :command, ""))
  end

  defp exec_sender_command({_pattern, :marquee}, assigns) do
    Commands.marquee(Map.get(assigns, :sender, ""), Map.get(assigns, :command, ""))
  end

  defp exec_sender_command({_pattern, :follow_age}, assigns) do
    Commands.follow_age(Map.get(assigns, :sender, ""), Map.get(assigns, :command, ""))
  end

  defp exec_sender_command({_pattern, :hug}, assigns) do
    Commands.hug(Map.get(assigns, :sender, ""), Map.get(assigns, :command, ""))
  end

  defp exec_sender_command({_pattern, :difm}, assigns) do
    Commands.difm(Map.get(assigns, :sender, ""), Map.get(assigns, :command, ""))
  end
end
