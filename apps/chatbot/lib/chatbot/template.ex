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

  defp eval_expr_pattern(expr, assigns) do
    cond do
      Regex.match?(~r/^Commands\.help\(\s*command\s*\)$/, expr) ->
        Commands.help(Map.get(assigns, :command, ""))

      Regex.match?(~r/^Commands\.ajuda\(\s*command\s*\)$/, expr) ->
        Commands.ajuda(Map.get(assigns, :command, ""))

      Regex.match?(~r/^Commands\.Player\.skip_song\(\s*sender\s*\)$/, expr) ->
        Commands.Player.skip_song(Map.get(assigns, :sender, ""))

      Regex.match?(~r/^Commands\.Player\.keep_song\(\s*sender\s*\)$/, expr) ->
        Commands.Player.keep_song(Map.get(assigns, :sender, ""))

      Regex.match?(~r/^Commands\.urls\(\s*command\s*\)$/, expr) ->
        Commands.urls(Map.get(assigns, :command, ""))

      Regex.match?(~r/^Commands\.uptime\(\s*sender\s*,\s*command\s*\)$/, expr) ->
        Commands.uptime(Map.get(assigns, :sender, ""), Map.get(assigns, :command, ""))

      Regex.match?(~r/^Commands\.marquee\(\s*sender\s*,\s*command\s*\)$/, expr) ->
        Commands.marquee(Map.get(assigns, :sender, ""), Map.get(assigns, :command, ""))

      Regex.match?(~r/^Commands\.follow_age\(\s*sender\s*,\s*command\s*\)$/, expr) ->
        Commands.follow_age(Map.get(assigns, :sender, ""), Map.get(assigns, :command, ""))

      Regex.match?(~r/^Commands\.hug\(\s*sender\s*,\s*command\s*\)$/, expr) ->
        Commands.hug(Map.get(assigns, :sender, ""), Map.get(assigns, :command, ""))

      Regex.match?(~r/^Commands\.difm\(\s*sender\s*,\s*command\s*\)$/, expr) ->
        Commands.difm(Map.get(assigns, :sender, ""), Map.get(assigns, :command, ""))

      Regex.match?(~r/^Commands\.ban\(\s*command\s*\)$/, expr) ->
        Commands.ban(Map.get(assigns, :command, ""))

      Regex.match?(~r/^Commands\.roster\s*\|>\s*Enum\.join\("([^"]*)"\)$/, expr) ->
        [_, joiner] = Regex.run(~r/^Commands\.roster\s*\|>\s*Enum\.join\("([^"]*)"\)$/, expr)
        State.roster() |> Enum.join(joiner)

      true ->
        Logger.warning("unknown template expression: #{expr}")
        ""
    end
  end
end
