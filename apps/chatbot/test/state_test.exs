defmodule StateTest do
  @moduledoc false

  use ExUnit.Case, async: true
  alias Chatbot.State

  setup do
    {:ok, state} = State.init([])
    %{state: state}
  end

  test "empty initial state", %{state: state} do
    {:reply, roster, ^state} = State.handle_call(:roster, nil, state)
    {:reply, count, ^state} = State.handle_call(:command_count, nil, state)

    assert roster == []
    assert count == %{}
  end

  describe "user state" do
    test "user enters the chatroom", %{state: state} do
      {:noreply, state2} = State.handle_cast({:add_user, "fulano"}, state)
      {:reply, roster, _state3} = State.handle_call(:roster, nil, state2)

      assert roster == ["fulano"]
    end

    test "many users enter the chatroom", %{state: state} do
      {:noreply, state2} =
        State.handle_cast(
          {:add_users, ["fulano", "beltrano", "siclano"]},
          state
        )

      {:reply, roster, _state3} = State.handle_call(:roster, nil, state2)

      assert ["beltrano", "fulano", "siclano"] = roster
    end

    test "user enters and leaves the chatroom", %{state: state} do
      {:noreply, state2} = State.handle_cast({:add_user, "fulano"}, state)
      {:noreply, state3} = State.handle_cast({:del_user, "beltrano"}, state2)
      {:noreply, state4} = State.handle_cast({:del_user, "fulano"}, state3)
      {:reply, roster, _state5} = State.handle_call(:roster, nil, state4)

      assert roster == []
    end

    test "get user info", %{state: state} do
      {:noreply, state2} = State.handle_cast({:add_user, "fulano"}, state)
      {:reply, user, _state} = State.handle_call({:get_user, "fulano"}, nil, state2)

      empty_map = MapSet.new()
      assert {"fulano", _, ^empty_map} = user
    end

    test "user types url", %{state: state} do
      google = "https://google.com"
      {:noreply, state2} = State.handle_cast({:add_user, "fulano"}, state)
      {:noreply, state3} = State.handle_cast({:add_user_url, "fulano", google}, state2)
      {:reply, urls, _state4} = State.handle_call({:urls_for, "fulano"}, nil, state3)

      assert [%{user: "fulano", urls: [^google]}] = urls
    end

    test "users type urls", %{state: state} do
      google = "https://google.com"
      {:noreply, state2} = State.handle_cast({:add_user, "fulano"}, state)
      {:noreply, state3} = State.handle_cast({:add_user, "beltrano"}, state2)
      {:noreply, state4} = State.handle_cast({:add_user_url, "fulano", google}, state3)
      {:noreply, state5} = State.handle_cast({:add_user_url, "beltrano", google}, state4)
      {:reply, urls, _state} = State.handle_call({:urls_for, ""}, nil, state5)

      assert [%{user: "beltrano", urls: [^google]}, %{user: "fulano", urls: [^google]}] = urls
    end
  end

  describe "command state" do
    test "user enters command", %{state: state} do
      {:noreply, state2} = State.handle_cast({:command, "!help"}, state)
      {:reply, count, _state3} = State.handle_call(:command_count, nil, state2)

      assert count == %{"!help" => 1}
    end
  end
end
