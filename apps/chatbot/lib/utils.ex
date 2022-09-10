defmodule Chatbot.Utils do
  @moduledoc false

  @doc """
  ----------------------------------------------------------------------------
  word_wrap

  iex> word_wrap("", 0)
  [""]

  iex> word_wrap("", 10)
  [""]

  iex> word_wrap("abc", 10)
  ["abc"]

  iex> word_wrap("abc def ghi jkl", 10)
  ["abc def", "ghi jkl"]

  iex> word_wrap("abcdefghijk l", 10)
  ["abcdefghijk", "l"]

  iex> word_wrap("a bcdefghijkl", 10)
  ["a", "bcdefghijkl"]

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

  iex> format_duration(0)
  "0 segundos"

  iex> format_duration(1)
  "1 segundo"

  iex> format_duration(10)
  "10 segundos"

  iex> format_duration(60)
  "1 minuto"

  iex> format_duration(300)
  "5 minutos"

  iex> format_duration(630)
  "10 minutos e 30 segundos"

  iex> format_duration(11947)
  "3 horas, 19 minutos e 7 segundos"

  iex> format_duration(962347)
  "11 dias, 3 horas, 19 minutos e 7 segundos"

  iex> format_duration(13922347)
  "5 meses, 11 dias, 3 horas, 19 minutos e 7 segundos"

  iex> format_duration(45026347)
  "1 ano, 5 meses, 11 dias, 3 horas, 19 minutos e 7 segundos"

  ----------------------------------------------------------------------------
  """
  @spec format_duration(integer) :: String.t()
  def format_duration(duration) do
    case format_duration(duration, []) |> Enum.reverse() do
      [] ->
        "0 segundos"

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

  defp plural(value, prefix, suffix \\ "s")
  defp plural(1, prefix, _suffix), do: prefix
  defp plural(_value, prefix, suffix), do: prefix <> suffix
end
