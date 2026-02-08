defmodule Chatbot.BotTest do
  use ExUnit.Case, async: false

  @tts_reward_id "e706421e-01f7-48fd-a4c6-4393d1ba4ec8"

  setup do
    original_key = Application.get_env(:chatbot, :eleven_labs_api_key)
    Chatbot.ChatClient.Test.reset()
    Chatbot.ChatClient.Test.set_owner(self())
    Chatbot.HttpClient.Test.reset()
    Chatbot.HttpClient.Test.set_owner(self())
    Chatbot.Config.Test.reset()

    ensure_started({Task.Supervisor, name: Chatbot.TaskSupervisor}, Chatbot.TaskSupervisor)
    ensure_started({Chatbot.State, name: Chatbot.State}, Chatbot.State)
    ensure_started({Phoenix.PubSub, name: WebApp.PubSub}, WebApp.PubSub)

    config = %{
      "ignored_commands" => ["!ignore"],
      "commands" => [
        %{
          "actions" => ["!hello"],
          "responses" => ["/me oi \#{sender}"],
          "logs" => ["log \#{sender}"]
        }
      ]
    }

    Chatbot.Config.Test.set_config(config)

    case Process.whereis(Chatbot.State) do
      nil ->
        :ok

      _pid ->
        :sys.replace_state(Chatbot.State, fn _ -> %{users_info: %{}, commands_info: %{}} end)
    end

    on_exit(fn -> Application.put_env(:chatbot, :eleven_labs_api_key, original_key) end)
    :ok
  end

  test "command flow sends responses and tracks usage" do
    Chatbot.Bot.handle_message("!hello", "alice", "#chat", %{})

    assert_receive {:chat_say, "#chat", "/me oi alice"}
    assert %{"!hello" => 1} = Chatbot.State.command_count()
  end

  test "unknown commands reply with error" do
    Chatbot.Bot.handle_message("!unknown", "alice", "#chat", %{})

    assert_receive {:chat_say, "#chat", "/color FireBrick"}
    assert_receive {:chat_say, "#chat", "@alice, não conheço esse: !unknown"}
  end

  test "ignored commands are skipped" do
    Chatbot.Bot.handle_message("!ignore", "alice", "#chat", %{})
    refute_receive {:chat_say, _, _}, 50
  end

  test "tts does not call api without key" do
    Application.put_env(:chatbot, :eleven_labs_api_key, nil)

    Chatbot.Bot.handle_message("hello", "alice", "#chat", %{"custom-reward-id" => @tts_reward_id})

    refute_receive {:http_post, _, _}, 50
  end

  test "tts error is handled and does not broadcast" do
    Application.put_env(:chatbot, :eleven_labs_api_key, "key")
    Phoenix.PubSub.subscribe(WebApp.PubSub, "rewards:play_tts")

    Chatbot.HttpClient.Test.put_response(
      "https://api.elevenlabs.io/v1/text-to-speech/XB0fDUnXU5powFXDhCwa?output_format=mp3_44100_128",
      {:error, :timeout}
    )

    Chatbot.Bot.handle_message("hello", "alice", "#chat", %{"custom-reward-id" => @tts_reward_id})

    assert_receive {:http_post, _, _}
    refute_receive {:play_tts, _}, 50
  end

  defp ensure_started(spec, name) do
    case Process.whereis(name) do
      nil -> start_supervised!(spec)
      _pid -> :ok
    end
  end
end
