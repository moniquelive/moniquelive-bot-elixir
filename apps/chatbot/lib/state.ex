defmodule Chatbot.State do
  @moduledoc false

  use GenServer

  # Client

  def start_link(_) do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
  end

  def user_joined(users) when is_list(users), do: GenServer.cast(__MODULE__, {:add_users, users})
  def user_joined(user) when is_binary(user), do: GenServer.cast(__MODULE__, {:add_user, user})
  def user_left(user) when is_binary(user), do: GenServer.cast(__MODULE__, {:del_user, user})
  def user_typed_url(user, url), do: GenServer.cast(__MODULE__, {:add_user_url, user, url})
  def urls_for(user), do: GenServer.call(__MODULE__, {:urls_for, user})
  def roster(), do: GenServer.call(__MODULE__, :roster)
  def get_user(user), do: GenServer.call(__MODULE__, [:get_user, user])
  def performed_command(command), do: GenServer.cast(__MODULE__, {:command, command})
  def command_count(), do: GenServer.call(__MODULE__, :command_count)

  def process_sentence(sentence, user) do
    flatten =
      Regex.scan(~r{https?://\S*}, sentence)
      |> Enum.map(fn [url] -> url end)

    case flatten do
      [] ->
        nil

      urls ->
        for url <- urls do
          user_typed_url(user, url)
        end
    end
  end

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
      :ets.insert(:chatbot_state_users, {user, DateTime.utc_now(), MapSet.new()})
    end)

    {:noreply, state}
  end

  def handle_cast({:add_user, user}, state) do
    :ets.insert(:chatbot_state_users, {user, DateTime.utc_now(), MapSet.new()})
    {:noreply, state}
  end

  def handle_cast({:del_user, user}, state) do
    :ets.delete(:chatbot_state_users, user)
    {:noreply, state}
  end

  def handle_cast({:add_user_url, user, url}, state) do
    [[urls]] = :ets.match(:chatbot_state_users, {user, :_, :"$1"})
    new_urls = urls |> MapSet.put(url)
    :ets.update_element(:chatbot_state_users, user, {3, new_urls})
    {:noreply, state}
  end

  def handle_cast({:command, command}, state) do
    :ets.update_counter(:chatbot_state_commands, command, 1, {command, 0})
    {:noreply, state}
  end

  @impl true
  def handle_call(:roster, _from, state) do
    roster = :ets.match(:chatbot_state_users, {:"$1", :_, :_}) |> Enum.flat_map(& &1)
    {:reply, roster, state}
  end

  def handle_call([:get_user, user], _from, state) do
    case :ets.lookup(:chatbot_state_users, user) do
      [u] -> {:reply, u, state}
      _ -> {:reply, {}, state}
    end
  end

  def handle_call(:command_count, _from, state) do
    counts =
      :ets.tab2list(:chatbot_state_commands)
      |> Map.new()

    {:reply, counts, state}
  end

  def handle_call({:urls_for, ""}, _from, state) do
    urls =
      :ets.match(:chatbot_state_users, {:"$1", :_, :"$2"})
      |> Enum.filter(fn [_user, urls] -> MapSet.size(urls) > 0 end)
      |> Enum.map(fn [user, urls] -> %{user: user, urls: MapSet.to_list(urls)} end)

    {:reply, urls, state}
  end

  def handle_call({:urls_for, "@" <> user}, from, state),
    do: handle_call({:urls_for, user}, from, state)

  def handle_call({:urls_for, user}, _from, state) do
    urls =
      :ets.match(:chatbot_state_users, {user, :_, :"$2"})
      |> Enum.flat_map(& &1)
      |> Enum.flat_map(&MapSet.to_list/1)

    {:reply, [%{user: user, urls: urls}], state}
  end
end
