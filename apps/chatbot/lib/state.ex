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
  def get_user(user), do: GenServer.call(__MODULE__, {:get_user, user})
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
    {:ok, %{users_info: %{}, commands_info: %{}}}
  end

  @impl true
  def handle_cast({:add_users, users}, state) do
    new_state =
      Enum.reduce(users, state, fn user, s ->
        {:noreply, new_s} = handle_cast({:add_user, user}, s)
        new_s
      end)

    {:noreply, new_state}
  end

  def handle_cast({:add_user, user}, state) do
    new_users =
      Map.put(
        state.users_info,
        user,
        %{online_at: DateTime.utc_now(), urls: MapSet.new()}
      )

    {:noreply, %{state | users_info: new_users}}
  end

  def handle_cast({:del_user, user}, state) do
    new_users = Map.delete(state.users_info, user)
    {:noreply, %{state | users_info: new_users}}
  end

  def handle_cast({:add_user_url, user, url}, state) do
    info = state.users_info[user]
    new_user = %{info | urls: MapSet.put(info.urls, url)}
    new_users = %{state.users_info | user => new_user}
    {:noreply, %{state | users_info: new_users}}
  end

  def handle_cast({:command, command}, state) do
    count = Map.get(state.commands_info, command, 0)
    new_commands = Map.put(state.commands_info, command, count + 1)
    {:noreply, %{state | commands_info: new_commands}}
  end

  @impl true
  def handle_call(:roster, _from, state) do
    roster = Map.keys(state.users_info)
    {:reply, roster, state}
  end

  def handle_call({:get_user, user}, _from, state) do
    case Map.get(state.users_info, user) do
      nil -> {:reply, {}, state}
      info -> {:reply, {user, info.online_at, info.urls}, state}
    end
  end

  def handle_call(:command_count, _from, state) do
    {:reply, state.commands_info, state}
  end

  def handle_call({:urls_for, ""}, _from, state) do
    urls =
      for {user, %{urls: urls}} <- state.users_info,
          into: [],
          do: %{user: user, urls: MapSet.to_list(urls)}

    {:reply, urls, state}
  end

  def handle_call({:urls_for, "@" <> user}, from, state),
    do: handle_call({:urls_for, user}, from, state)

  def handle_call({:urls_for, user}, _from, state) do
    user_urls = MapSet.to_list(state.users_info[user].urls)
    {:reply, [%{user: user, urls: user_urls}], state}
  end
end
