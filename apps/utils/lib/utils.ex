defmodule Utils do
  @moduledoc false

  @doc """
  ----------------------------------------------------------------------------
  word_wrap

  iex> word_wrap("", 0)
  [""]

  iex> word_wrap("", 10)
  [""]

  iex> word_wrap("   ", 10)
  [""]

  iex> word_wrap("abc", 10)
  ["abc"]

  iex> word_wrap("abc def ghi jkl", 10)
  ["abc def", "ghi jkl"]

  iex> word_wrap("abcdefghijk l", 10)
  ["abcdefghijk", "l"]

  iex> word_wrap("a bcdefghijkl", 10)
  ["a", "bcdefghijkl"]

  iex> word_wrap("abc   def", 0)
  ["abc def"]

  iex> word_wrap("moniquelive compartilhou: https://tour.golang.org/welcome/1 https://en.wikipedia.org/wiki/Test-driven_development https://hack.ainfosec.com/ https://github.com/moniquelive/iniciante - streamholics compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando https://twitch.tv/pachicodes https://twitch.tv/adielseffrin https://twitch.tv/LadyDriveer https://twitch.tv/adielseffrin - acaverna compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando https://twitch.tv/pachicodes https://twitch.tv/adielseffrin https://twitch.tv/adielseffrin - vivendoouexistindo compartilhou: https://discord.com/invite/cD7VJJZTnA - debora_666 compartilhou: https://mma.prnewswire.com/media/1438929/first_Logo.jpg?p=publish", 500)
  [ "moniquelive compartilhou: https://tour.golang.org/welcome/1 https://en.wikipedia.org/wiki/Test-driven_development https://hack.ainfosec.com/ https://github.com/moniquelive/iniciante - streamholics compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando",
    "https://twitch.tv/pachicodes https://twitch.tv/adielseffrin https://twitch.tv/LadyDriveer https://twitch.tv/adielseffrin - acaverna compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando https://twitch.tv/pachicodes https://twitch.tv/adielseffrin",
    "https://twitch.tv/adielseffrin - vivendoouexistindo compartilhou: https://discord.com/invite/cD7VJJZTnA - debora_666 compartilhou: https://mma.prnewswire.com/media/1438929/first_Logo.jpg?p=publish"
  ]

  ----------------------------------------------------------------------------
  """
  @spec word_wrap(String.t(), integer) :: [String.t()]
  def word_wrap("", _width),
    do: [""]

  def word_wrap(string, width) when is_binary(string) and is_integer(width) do
    case String.split(string, ~r/\s+/, trim: true) do
      [] ->
        [""]

      words when width <= 0 ->
        [Enum.join(words, " ")]

      [word | rest] ->
        lines_assemble(rest, width, String.length(word), word, [])
    end
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
