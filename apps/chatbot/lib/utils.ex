defmodule Chatbot.Utils do
  @moduledoc false

  @doc """
  ----------------------------------------------------------------------------
  word_wrap
  ----------------------------------------------------------------------------
  """
  @spec word_wrap(String.t(), integer) :: [String.t()]
  def word_wrap("", _width),
    do: [""]

  def word_wrap(string, width) when is_binary(string) and is_integer(width) do
    [word | rest] = String.split(string, ~r/\s+/, trim: true)
    lines_assemble(rest, width, String.length(word), word, [])
  end

  defp lines_assemble([], _, _, line, acc),
    do:
      [line | acc]
      |> Enum.reverse()

  defp lines_assemble([word | rest], max, line_length, line, acc) do
    if line_length + 1 + String.length(word) > max do
      lines_assemble(rest, max, String.length(word), word, [line | acc])
    else
      lines_assemble(rest, max, line_length + 1 + String.length(word), line <> " " <> word, acc)
    end
  end

  @doc """
  ----------------------------------------------------------------------------
  format_duration
  ----------------------------------------------------------------------------
  """
  @spec format_duration(integer) :: String.t()
  def format_duration(duration) do
    case format_duration(duration, []) |> Enum.reverse() do
      [seconds] ->
        seconds

      [seconds | rest] ->
        "#{rest |> Enum.reverse() |> Enum.join(", ")} e #{seconds}"
    end
  end

  @one_minute 60
  @one_hour 60 * @one_minute
  @one_day 24 * @one_hour
  @one_month 30 * @one_day
  @one_year 12 * @one_month

  @spec format_duration(integer, [String.t()]) :: [String.t()]
  defp format_duration(duration, format) do
    case duration do
      0 ->
        format

      d when div(d, @one_year) >= 1 ->
        {quot, remainder} = {div(d, @one_year), rem(d, @one_year)}
        ["#{quot} #{plural(quot, "ano")}" | format_duration(remainder, format)]

      d when div(d, @one_month) >= 1 ->
        {quot, remainder} = {div(d, @one_month), rem(d, @one_month)}
        ["#{quot} #{plural(quot, "mes", "es")}" | format_duration(remainder, format)]

      d when div(d, @one_day) >= 1 ->
        {quot, remainder} = {div(d, @one_day), rem(d, @one_day)}
        ["#{quot} #{plural(quot, "dia")}" | format_duration(remainder, format)]

      d when div(d, @one_hour) >= 1 ->
        {quot, remainder} = {div(d, @one_hour), rem(d, @one_hour)}
        ["#{quot} #{plural(quot, "hora")}" | format_duration(remainder, format)]

      d when div(d, @one_minute) >= 1 ->
        {quot, remainder} = {div(d, @one_minute), rem(d, @one_minute)}
        ["#{quot} #{plural(quot, "minuto")}" | format_duration(remainder, format)]

      d when d < 60 ->
        ["#{d} #{plural(d, "segundo")}" | format]
    end
  end

  defp plural(unit, prefix, suffix \\ "s")
  defp plural(unit, prefix, _suffix) when unit <= 1, do: prefix
  defp plural(_unit, prefix, suffix), do: prefix <> suffix
end
