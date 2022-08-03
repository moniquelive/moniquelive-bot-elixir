defmodule ChatbotTest do
  use ExUnit.Case
  doctest Chatbot.Bot

  test "greets the world" do
    assert Chatbot.Bot.hello() == :world
  end
end
