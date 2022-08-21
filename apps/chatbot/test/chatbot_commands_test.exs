defmodule ChatbotCommandsTest do
  @moduledoc false

  import Chatbot.Utils

  use ExUnit.Case, async: true

  describe "Testing Chatbot.Utils.word_wrap/2" do
    test "empty string, zero size", do: assert(word_wrap("", 0) == [""])
    test "empty string, 10 size", do: assert(word_wrap("", 10) == [""])
    test "a string that fits", do: assert(word_wrap("abc", 10) == ["abc"])

    test "a string that doesn't fit",
      do: assert(word_wrap("abc def ghi jkl", 10) == ["abc def", "ghi jkl"])

    test "edge case #1",
      do: assert(word_wrap("abcdefghijk l", 10) == ["abcdefghijk", "l"])

    test "edge case #2",
      do: assert(word_wrap("a bcdefghijkl", 10) == ["a", "bcdefghijkl"])

    test "real case" do
      str =
        "moniquelive compartilhou: https://tour.golang.org/welcome/1 https://en.wikipedia.org/wiki/Test-driven_development https://hack.ainfosec.com/ https://github.com/moniquelive/iniciante - streamholics compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando https://twitch.tv/pachicodes https://twitch.tv/adielseffrin https://twitch.tv/LadyDriveer https://twitch.tv/adielseffrin - acaverna compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando https://twitch.tv/pachicodes https://twitch.tv/adielseffrin https://twitch.tv/adielseffrin - vivendoouexistindo compartilhou: https://discord.com/invite/cD7VJJZTnA - debora_666 compartilhou: https://mma.prnewswire.com/media/1438929/first_Logo.jpg?p=publish"

      expected = [
        "moniquelive compartilhou: https://tour.golang.org/welcome/1 https://en.wikipedia.org/wiki/Test-driven_development https://hack.ainfosec.com/ https://github.com/moniquelive/iniciante - streamholics compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando",
        "https://twitch.tv/pachicodes https://twitch.tv/adielseffrin https://twitch.tv/LadyDriveer https://twitch.tv/adielseffrin - acaverna compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando https://twitch.tv/pachicodes https://twitch.tv/adielseffrin",
        "https://twitch.tv/adielseffrin - vivendoouexistindo compartilhou: https://discord.com/invite/cD7VJJZTnA - debora_666 compartilhou: https://mma.prnewswire.com/media/1438929/first_Logo.jpg?p=publish"
      ]

      assert word_wrap(str, 500) == expected
    end
  end

  @one_minute 60
  @one_hour 60 * @one_minute
  @one_day 24 * @one_hour
  @one_month 30 * @one_day
  @one_year 12 * @one_month

  describe "Testing Chatbot.Utils.format_duration/1" do
    test "all" do
      for tc <- [
            %{duration: format_duration(1), expected: "1 segundo"},
            %{duration: format_duration(10), expected: "10 segundos"},
            %{duration: format_duration(@one_minute), expected: "1 minuto"},
            %{duration: format_duration(5 * @one_minute), expected: "5 minutos"},
            %{
              duration: format_duration(10 * @one_minute + 30),
              expected: "10 minutos e 30 segundos"
            },
            %{
              duration: format_duration(3 * @one_hour + 19 * @one_minute + 7),
              expected: "3 horas, 19 minutos e 7 segundos"
            },
            %{
              duration: format_duration(11 * @one_day + 3 * @one_hour + 19 * @one_minute + 7),
              expected: "11 dias, 3 horas, 19 minutos e 7 segundos"
            },
            %{
              duration:
                format_duration(
                  5 * @one_month + 11 * @one_day + 3 * @one_hour + 19 * @one_minute + 7
                ),
              expected: "5 meses, 11 dias, 3 horas, 19 minutos e 7 segundos"
            },
            %{
              duration:
                format_duration(
                  @one_year + 5 * @one_month + 11 * @one_day + 3 * @one_hour + 19 * @one_minute +
                    7
                ),
              expected: "1 ano, 5 meses, 11 dias, 3 horas, 19 minutos e 7 segundos"
            }
          ] do
        assert tc.duration == tc.expected
      end
    end
  end
end
