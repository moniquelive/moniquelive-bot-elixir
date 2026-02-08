defmodule ChatbotCommandsTest do
  @moduledoc false

  use ExUnit.Case, async: false

  alias Chatbot.Commands

  setup do
    ensure_started({Chatbot.State, name: Chatbot.State}, Chatbot.State)

    case Process.whereis(Chatbot.State) do
      nil ->
        :ok

      _pid ->
        :sys.replace_state(Chatbot.State, fn _ -> %{users_info: %{}, commands_info: %{}} end)
    end

    :ok
  end

  test "hug handles empty roster" do
    assert Commands.hug("alice", "!hug") == "♥ sem ninguém no chat pra abraçar agora"
  end

  test "ban handles empty roster" do
    assert Commands.ban("!ban") == "sem ninguém pra banir agora"
  end

  defp ensure_started(spec, name) do
    case Process.whereis(name) do
      nil -> start_supervised!(spec)
      _pid -> :ok
    end
  end
end
