defmodule ChatbotCommandsTest do
  @moduledoc false

  use ExUnit.Case, async: true

  describe "Testing Chatbot.Utils.word_wrap/2" do
    test "empty string, zero size", do: assert(Chatbot.Utils.word_wrap("", 0) == [""])
    test "empty string, 10 size", do: assert(Chatbot.Utils.word_wrap("", 10) == [""])
    test "a string that fits", do: assert(Chatbot.Utils.word_wrap("abc", 10) == ["abc"])

    test "a string that doesn't fit",
      do: assert(Chatbot.Utils.word_wrap("abc def ghi jkl", 10) == ["abc def", "ghi jkl"])

    test "edge case #1",
      do: assert(Chatbot.Utils.word_wrap("abcdefghijk l", 10) == ["abcdefghijk", "l"])

    test "edge case #2",
      do: assert(Chatbot.Utils.word_wrap("a bcdefghijkl", 10) == ["a", "bcdefghijkl"])

    test "real case" do
      str =
        "moniquelive compartilhou: https://tour.golang.org/welcome/1 https://en.wikipedia.org/wiki/Test-driven_development https://hack.ainfosec.com/ https://github.com/moniquelive/iniciante - streamholics compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando https://twitch.tv/pachicodes https://twitch.tv/adielseffrin https://twitch.tv/LadyDriveer https://twitch.tv/adielseffrin - acaverna compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando https://twitch.tv/pachicodes https://twitch.tv/adielseffrin https://twitch.tv/adielseffrin - vivendoouexistindo compartilhou: https://discord.com/invite/cD7VJJZTnA - debora_666 compartilhou: https://mma.prnewswire.com/media/1438929/first_Logo.jpg?p=publish"

      expected = [
        "moniquelive compartilhou: https://tour.golang.org/welcome/1 https://en.wikipedia.org/wiki/Test-driven_development https://hack.ainfosec.com/ https://github.com/moniquelive/iniciante - streamholics compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando",
        "https://twitch.tv/pachicodes https://twitch.tv/adielseffrin https://twitch.tv/LadyDriveer https://twitch.tv/adielseffrin - acaverna compartilhou: https://twitch.tv/alorenato https://twitch.tv/xtecna https://twitch.tv/adielseffrin https://twitch.tv/jpbrab0 https://twitch.tv/xtecna https://twitch.tv/kastr0walker https://twitch.tv/morgannadev https://twitch.tv/jpbrab0 https://twitch.tv/profbrunolopes https://twitch.tv/clauzinhando https://twitch.tv/pachicodes https://twitch.tv/adielseffrin",
        "https://twitch.tv/adielseffrin - vivendoouexistindo compartilhou: https://discord.com/invite/cD7VJJZTnA - debora_666 compartilhou: https://mma.prnewswire.com/media/1438929/first_Logo.jpg?p=publish"
      ]

      assert Chatbot.Utils.word_wrap(str, 500) == expected
    end
  end

  describe "Testing Chatbot.Utils.format_duration/1" do
    test "1 second",
      do: assert(Chatbot.Utils.format_duration(1) == "1 segundo")

    test "10 seconds",
      do: assert(Chatbot.Utils.format_duration(10) == "10 segundos")

    test "1 minute",
      do: assert(Chatbot.Utils.format_duration(60) == "1 minuto")

    test "5 minutes",
      do: assert(Chatbot.Utils.format_duration(5 * 60) == "5 minutos")

    test "10 minutes and 30 seconds",
      do: assert(Chatbot.Utils.format_duration(10 * 60 + 30) == "10 minutos e 30 segundos")

    test "3 hours, 19 minutes and 7 seconds",
      do:
        assert(
          Chatbot.Utils.format_duration(3 * 60 * 60 + 19 * 60 + 7) ==
            "3 horas, 19 minutos e 7 segundos"
        )

    test "11 days, 3 hours, 19 minutes and 7 seconds",
      do:
        assert(
          Chatbot.Utils.format_duration(11 * 24 * 60 * 60 + 3 * 60 * 60 + 19 * 60 + 7) ==
            "11 dias, 3 horas, 19 minutos e 7 segundos"
        )

    test "5 months, 11 days, 3 hours, 19 minutes and 7 seconds",
      do:
        assert(
          Chatbot.Utils.format_duration(
            5 * 30 * 24 * 60 * 60 + 11 * 24 * 60 * 60 + 3 * 60 * 60 + 19 * 60 + 7
          ) ==
            "5 meses, 11 dias, 3 horas, 19 minutos e 7 segundos"
        )
  end
end
