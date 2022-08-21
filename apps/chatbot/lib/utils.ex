defmodule Chatbot.Utils do
  @moduledoc false

  @doc """
  word_wrap
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
  format_duration
  """
  @spec format_duration(integer) :: String.t()
  def format_duration(duration) do
    case format_duration(duration, []) |> Enum.reverse() do
      [h] ->
        h

      [h | t] ->
        (t
         |> Enum.reverse()
         |> Enum.join(", ")) <> " e " <> h
    end
  end

  defp format_duration(0, format), do: format

  defp format_duration(duration, format) when duration / (30 * 24 * 60 * 60) >= 1 do
    partial = div(duration, 30 * 24 * 60 * 60)
    remainder = rem(duration, 30 * 24 * 60 * 60)
    ["#{partial} #{plural(partial > 1, "mes")}" | format_duration(remainder, format)]
  end

  defp format_duration(duration, format) when duration / (24 * 60 * 60) >= 1 do
    partial = div(duration, 24 * 60 * 60)
    remainder = rem(duration, 24 * 60 * 60)
    ["#{partial} #{plural(partial > 1, "dia")}" | format_duration(remainder, format)]
  end

  defp format_duration(duration, format) when duration / (60 * 60) >= 1 do
    partial = div(duration, 60 * 60)
    remainder = rem(duration, 60 * 60)
    ["#{partial} #{plural(partial > 1, "hora")}" | format_duration(remainder, format)]
  end

  defp format_duration(duration, format) when duration / 60 >= 1 do
    partial = div(duration, 60)
    remainder = rem(duration, 60)
    ["#{partial} #{plural(partial > 1, "minuto")}" | format_duration(remainder, format)]
  end

  defp format_duration(duration, format) when duration < 60 do
    ["#{duration} #{plural(duration > 1, "segundo")}" | format]
  end

  defp plural(plural, prefix) do
    if plural,
      do:
        if(String.ends_with?(prefix, "s"),
          do: prefix <> "es",
          else: prefix <> "s"
        ),
      else: prefix
  end
end
