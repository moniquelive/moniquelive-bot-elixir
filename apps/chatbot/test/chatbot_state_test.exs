defmodule Chatbot.StateTest do
  @moduledoc false

  use ExUnit.Case, async: true
  alias Chatbot.State

  @name __MODULE__

  setup do
    start_supervised!({State, name: @name})
    :ok
  end

  test "empty initial state" do
    assert State.roster(@name) == []
    assert State.command_count(@name) == %{}
  end

  describe "user state" do
    test "user enters the chatroom" do
      State.user_joined(@name, "fulano")
      assert State.roster(@name) == ["fulano"]
    end

    test "many users enter the chatroom" do
      people = ["siclano", "fulano", "beltrano"]
      State.user_joined(@name, people)
      assert Enum.sort(State.roster(@name)) == Enum.sort(people)
    end

    test "user enters and leaves the chatroom" do
      State.user_joined(@name, "fulano")
      State.user_left(@name, "beltrano")
      State.user_left(@name, "fulano")
      assert State.roster(@name) == []
    end

    test "get user online time" do
      State.user_joined(@name, "fulano")
      assert %DateTime{} = State.online_at(@name, "fulano")
      assert is_nil(State.online_at(@name, "beltrano"))
    end
  end

  describe "URL's" do
    test "user types url" do
      google = "https://google.com"
      State.user_joined(@name, "fulano")
      State.user_typed_url(@name, "fulano", google)
      assert [%{user: "fulano", urls: [^google]}] = State.urls_for(@name, "fulano")
      assert [%{user: "fulano", urls: [^google]}] = State.urls_for(@name, "@fulano")
    end

    test "urls for unknwon user" do
      assert [%{user: "fulano", urls: []}] = State.urls_for(@name, "fulano")
    end

    test "add url for unknown user" do
      google = "https://google.com"
      State.user_typed_url(@name, "fulano", google)
      assert [%{user: "fulano", urls: [^google]}] = State.urls_for(@name, "fulano")
    end

    test "add url for unknown user then online" do
      google = "https://google.com"
      State.user_typed_url(@name, "fulano", google)
      State.user_joined(@name, "fulano")
      assert [%{user: "fulano", urls: [^google]}] = State.urls_for(@name, "fulano")
    end

    test "users type urls" do
      google = "https://google.com"
      State.user_joined(@name, "fulano")
      State.user_joined(@name, "beltrano")
      State.user_typed_url(@name, "fulano", google)
      State.user_typed_url(@name, "beltrano", google)

      assert [%{user: "beltrano", urls: [^google]}, %{user: "fulano", urls: [^google]}] =
               State.urls_for(@name, "")
    end

    test "user types a message with urls" do
      google = "https://google.com"
      twitter = "https://twitter.com"
      State.user_joined(@name, "fulano")
      State.process_sentence(@name, "foo #{google} bar #{twitter}", "fulano")
      assert [%{user: "fulano", urls: [^google, ^twitter]}] = State.urls_for(@name, "")
    end

    test "user types a message with no urls" do
      State.user_joined(@name, "fulano")
      State.process_sentence(@name, "foo bar baz", "fulano")
      assert [%{user: "fulano", urls: []}] = State.urls_for(@name, "")
    end
  end

  describe "command state" do
    test "user enters command" do
      State.performed_command(@name, "!help")
      assert State.command_count(@name) == %{"!help" => 1}
    end
  end
end
