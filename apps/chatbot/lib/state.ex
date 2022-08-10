defmodule Chatbot.State do
  @moduledoc false

  use GenServer

  # Client

  def start_link(_) do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
  end

  def user_joined(users) when is_list(users),
    do: GenServer.cast(__MODULE__, {:add_users, users})

  def user_joined(user) when is_bitstring(user),
    do: GenServer.cast(__MODULE__, {:add_user, user})

  def user_left(user) when is_bitstring(user),
    do: GenServer.cast(__MODULE__, {:remove_user, user})

  def user_typed_url(user, url) when is_bitstring(user) and is_bitstring(url),
    do: GenServer.cast(__MODULE__, {:add_user_url, user, url})

  def roster(),
    do: GenServer.call(__MODULE__, :roster)

  def performed_command(command),
    do: GenServer.cast(__MODULE__, {:command, command})

  def command_count(),
    do: GenServer.call(__MODULE__, :command_count)

  # Server

  @impl true
  def init(_) do
    :ets.new(:chatbot_state_users, [:ordered_set, :named_table])
    :ets.new(:chatbot_state_commands, [:ordered_set, :named_table])
    {:ok, %{}}
  end

  @impl true
  def handle_cast({:add_users, users}, state) do
    users
    |> Enum.each(fn user ->
      :ets.insert(:chatbot_state_users, {user, DateTime.utc_now(), []})
    end)

    {:noreply, state}
  end

  def handle_cast({:add_user, user}, state) do
    :ets.insert(:chatbot_state_users, {user, DateTime.utc_now(), []})
    {:noreply, state}
  end

  def handle_cast({:remove_user, user}, state) do
    :ets.delete(:chatbot_state_users, user)
    {:noreply, state}
  end

  def handle_cast({:add_user_url, user, url}, state) do
    [{_, logged_in, urls}] = :ets.lookup(:chatbot_state_users, user)
    :ets.update_element(:chatbot_state_users, user, {logged_in, [url | urls]})
    {:noreply, state}
  end

  def handle_cast({:command, command}, state) do
    key = String.to_atom(command)
    :ets.update_counter(:chatbot_state_commands, key, 1, {key, 0})
    {:noreply, state}
  end

  @impl true
  def handle_call(:roster, _from, state) do
    roster =
      :ets.tab2list(:chatbot_state_users)
      |> Map.new()
      |> Map.keys()

    {:reply, roster, state}
  end

  def handle_call(:command_count, _from, state) do
    counts =
      :ets.tab2list(:chatbot_state_commands)
      |> Map.new()

    {:reply, counts, state}
  end
end
