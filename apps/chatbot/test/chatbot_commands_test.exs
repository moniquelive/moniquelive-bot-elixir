defmodule ChatbotCommandsTest do
  @moduledoc false

  use ExUnit.Case, async: false

  alias Chatbot.Commands

  setup do
    ensure_started({Chatbot.State, name: Chatbot.State}, Chatbot.State)
    Chatbot.TwitchApiClient.Stub.reset()

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

  test "marquee handles oauth failures" do
    Chatbot.TwitchApiClient.Stub.put_response(
      :get_channel_information,
      {:ok, %{"title" => "old", "broadcaster_id" => "1"}}
    )

    Chatbot.TwitchApiClient.Stub.put_response(
      :modify_channel_information,
      {:error, :missing_oauth}
    )

    assert Commands.marquee("moniquelive", "!today hello") ==
             "não consegui atualizar a marquee agora"
  end

  test "follow_age handles API errors gracefully" do
    Chatbot.TwitchApiClient.Stub.put_response(:get_users, {:error, :timeout})

    result = Commands.follow_age("alice", "!followage testuser")
    assert result =~ "não encontrei"
  end

  test "urls returns empty message when no URLs" do
    result = Commands.urls("!urls")
    assert result == "/me (sem urls no momento)"
  end

  test "difm rejects unauthorized users" do
    result = Commands.difm("not_moniquelive", "!difm")
    assert result == "Foi mal, esse comando é só pra Mo..."
  end

  test "marquee only allows broadcaster to modify" do
    Chatbot.TwitchApiClient.Stub.put_response(
      :get_channel_information,
      {:ok, %{"title" => "test", "broadcaster_id" => "1"}}
    )

    result = Commands.marquee("not_moniquelive", "!marquee new title")
    assert result =~ "Marquee >"
    refute result =~ "Atualizando"
  end

  defp ensure_started(spec, name) do
    case Process.whereis(name) do
      nil -> start_supervised!(spec)
      _pid -> :ok
    end
  end
end
