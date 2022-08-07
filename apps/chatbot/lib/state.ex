defmodule Chatbot.State do
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

  def roster(),
    do: GenServer.call(__MODULE__, :roster)

  def performed_command(command), do: GenServer.cast(__MODULE__, {:command, command})

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
      :ets.insert(:chatbot_state_users, {user, DateTime.utc_now()})
    end)

    {:noreply, state}
  end

  @impl true
  def handle_cast({:add_user, user}, state) do
    :ets.insert(:chatbot_state_users, {user, DateTime.utc_now()})
    {:noreply, state}
  end

  @impl true
  def handle_cast({:remove_user, user}, state) do
    :ets.delete(:chatbot_state_users, user)
    {:noreply, state}
  end

  @impl true
  def handle_cast({:command, command}, state) do
    :ets.update_counter(:chatbot_state_users, String.to_atom(command), {2, 1})
    {:noreply, state}
  end

  @impl true
  def handle_call(:roster, _from, state) do
    roster =
      :ets.tab2list(:chatbot_state_users)
      |> Enum.map(&Kernel.elem(&1, 0))

    {:reply, roster, state}
  end
end
