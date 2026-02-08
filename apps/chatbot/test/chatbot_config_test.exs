defmodule Chatbot.ConfigTest do
  use ExUnit.Case, async: false

  setup do
    dir = Path.join(System.tmp_dir!(), "chatbot_config_#{System.unique_integer([:positive])}")
    File.mkdir_p!(dir)

    path = Path.join(dir, "commands.json")

    config = %{
      "ignored_commands" => ["!ignore"],
      "commands" => [%{"actions" => ["!hello"], "responses" => ["/me oi \#{sender}"]}]
    }

    File.write!(path, Jason.encode!(config))

    stop_if_running(Chatbot.Config)
    {:ok, pid} = Chatbot.Config.start_link(dir)

    on_exit(fn ->
      if Process.alive?(pid), do: GenServer.stop(pid)
      File.rm_rf!(dir)
    end)

    :ok
  end

  test "loads commands from file" do
    assert [action] = Chatbot.Config.commands()
    assert action["actions"] == ["!hello"]
    assert Chatbot.Config.ignored() == ["!ignore"]
  end

  test "reload keeps last config on invalid json" do
    [action] = Chatbot.Config.commands()

    File.write!(config_path(), "{not-json")
    assert :ok = Chatbot.Config.reload()

    assert [new_action] = Chatbot.Config.commands()
    assert new_action == action
  end

  test "missing keys fall back to defaults" do
    File.write!(config_path(), Jason.encode!(%{"commands" => []}))
    assert :ok = Chatbot.Config.reload()

    assert Chatbot.Config.ignored() == []
  end

  defp config_path, do: :sys.get_state(Chatbot.Config) |> Map.fetch!(:config_path)

  defp stop_if_running(name) do
    case Process.whereis(name) do
      nil ->
        :ok

      pid ->
        ref = Process.monitor(pid)
        Process.exit(pid, :kill)

        receive do
          {:DOWN, ^ref, :process, ^pid, _reason} -> :ok
        after
          1_000 -> :ok
        end
    end
  end
end
