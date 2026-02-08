defmodule UtilsTest do
  use ExUnit.Case, async: true

  doctest Utils, import: true
  doctest DurationFormatter, import: true

  test "word_wrap handles whitespace-only input" do
    assert Utils.word_wrap("   \n\t", 10) == [""]
  end

  test "word_wrap treats non-positive widths as a single line" do
    assert Utils.word_wrap("abc   def", 0) == ["abc def"]
    assert Utils.word_wrap("abc   def", -5) == ["abc def"]
  end

  test "word_wrap collapses whitespace for positive widths" do
    assert Utils.word_wrap("a  b\n\tc", 10) == ["a b c"]
  end

  test "word_wrap keeps long words intact" do
    assert Utils.word_wrap("abcdef", 3) == ["abcdef"]
    assert Utils.word_wrap("a bcdefgh", 3) == ["a", "bcdefgh"]
  end

  test "word_wrap splits when width is exceeded" do
    assert Utils.word_wrap("a b c", 3) == ["a b", "c"]
    assert Utils.word_wrap("ab cd", 5) == ["ab cd"]
    assert Utils.word_wrap("abc de", 5) == ["abc", "de"]
  end

  test "format_duration clamps negative values" do
    assert DurationFormatter.format_duration(-10) == "0 segundos"
  end

  test "format_duration handles single units" do
    assert DurationFormatter.format_duration(59) == "59 segundos"
    assert DurationFormatter.format_duration(60) == "1 minuto"
    assert DurationFormatter.format_duration(3_600) == "1 hora"
    assert DurationFormatter.format_duration(86_400) == "1 dia"
    assert DurationFormatter.format_duration(2_592_000) == "1 mês"
    assert DurationFormatter.format_duration(31_104_000) == "1 ano"
  end

  test "format_duration formats multiple units" do
    assert DurationFormatter.format_duration(61) == "1 minuto e 1 segundo"
    assert DurationFormatter.format_duration(3_661) == "1 hora, 1 minuto e 1 segundo"

    assert DurationFormatter.format_duration(31_104_000 + 2_592_000 + 86_400 + 3_600 + 60 + 1) ==
             "1 ano, 1 mês, 1 dia, 1 hora, 1 minuto e 1 segundo"
  end
end
