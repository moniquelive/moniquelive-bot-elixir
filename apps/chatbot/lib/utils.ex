defmodule Chatbot.Utils do
  @moduledoc false

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
end
