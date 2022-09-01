defmodule StateTest do
  @moduledoc false

  use ExUnit.Case, async: true
  alias Chatbot.State

  setup do
    start_supervised!({Registry, keys: :unique, name: Registry.Chatbot})
    start_supervised!({State, Chatbot.TestState})
    %{pid: Chatbot.TestState}
  end

  test "empty initial state", %{pid: pid} do
    assert State.roster(pid) == []
    assert State.command_count(pid) == %{}
  end

  describe "user state" do
    test "user enters the chatroom", %{pid: pid} do
      State.user_joined(pid, "fulano")
      assert State.roster(pid) == ["fulano"]
    end

    test "many users enter the chatroom", %{pid: pid} do
      State.user_joined(pid, ["fulano", "beltrano", "siclano"])
      assert State.roster(pid) == ["beltrano", "fulano", "siclano"]
    end

    test "user enters and leaves the chatroom", %{pid: pid} do
      State.user_joined(pid, "fulano")
      State.user_left(pid, "beltrano")
      State.user_left(pid, "fulano")
      assert State.roster(pid) == []
    end

    test "get user info", %{pid: pid} do
      State.user_joined(pid, "fulano")
      empty_map = MapSet.new()
      assert {"fulano", _, ^empty_map} = State.get_user(pid, "fulano")
    end

    test "user types url", %{pid: pid} do
      google = "https://google.com"
      State.user_joined(pid, "fulano")
      State.user_typed_url(pid, "fulano", google)
      assert [%{user: "fulano", urls: [^google]}] = State.urls_for(pid, "fulano")
    end

    test "users type urls", %{pid: pid} do
      google = "https://google.com"
      State.user_joined(pid, "fulano")
      State.user_joined(pid, "beltrano")
      State.user_typed_url(pid, "fulano", google)
      State.user_typed_url(pid, "beltrano", google)

      assert [%{user: "beltrano", urls: [^google]}, %{user: "fulano", urls: [^google]}] =
               State.urls_for(pid, "")
    end
  end

  describe "command state" do
    test "user enters command", %{pid: pid} do
      State.performed_command(pid, "!help")
      assert State.command_count(pid) == %{"!help" => 1}
    end
  end
end
