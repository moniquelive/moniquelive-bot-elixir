defmodule Chatbot.State do
  @moduledoc false

  use GenServer

  @name __MODULE__

  # Client

  def start_link(opts \\ []), do: GenServer.start_link(__MODULE__, [], opts)

  def command_count(name \\ @name), do: GenServer.call(name, :command_count)
  def urls_for(name \\ @name, user), do: GenServer.call(name, {:urls_for, user})
  def roster(name \\ @name), do: GenServer.call(name, :roster)
  def online_at(name \\ @name, user), do: GenServer.call(name, {:online_at, user})

  def user_joined(name \\ @name, users)
  def user_joined(name, users) when is_list(users), do: GenServer.cast(name, {:add_users, users})
  def user_joined(name, user) when is_binary(user), do: GenServer.cast(name, {:add_user, user})
  def user_left(name \\ @name, user), do: GenServer.cast(name, {:del_user, user})
  def performed_command(name \\ @name, command), do: GenServer.cast(name, {:command, command})

  def user_typed_url(name \\ @name, user, url),
    do: GenServer.cast(name, {:add_user_url, user, url})

  def process_sentence(name \\ @name, sentence, user) do
    user = String.downcase(user)

    Regex.scan(~r{https?://\S*}, sentence)
    |> List.flatten()
    |> Enum.each(&user_typed_url(name, user, &1))
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

  def handle_cast({:add_user, "@" <> user}, state),
    do: handle_cast({:add_user, user}, state)

  def handle_cast({:add_user, user}, state) do
    user = String.downcase(user)
    default_user_info = %{online_at: DateTime.utc_now(), urls: MapSet.new()}
    new_user_info = Map.get(state.users_info, user, default_user_info)
    {:noreply, %{state | users_info: Map.put(state.users_info, user, new_user_info)}}
  end

  def handle_cast({:del_user, user}, state) do
    user = String.downcase(user)
    {:noreply, %{state | users_info: Map.delete(state.users_info, user)}}
  end

  def handle_cast({:add_user_url, user, url}, state) do
    user = String.downcase(user)

    if user_info = state.users_info[user] do
      new_urls = MapSet.put(user_info.urls, url)
      new_user_info = %{user_info | urls: new_urls}
      new_users_info = %{state.users_info | user => new_user_info}
      {:noreply, %{state | users_info: new_users_info}}
    else
      {:noreply, state} = handle_cast({:add_user, user}, state)
      handle_cast({:add_user_url, user, url}, state)
    end
  end

  def handle_cast({:command, command}, state) do
    curr_count = Map.get(state.commands_info, command, 0)
    new_commands_info = Map.put(state.commands_info, command, curr_count + 1)
    {:noreply, %{state | commands_info: new_commands_info}}
  end

  @impl true
  def handle_call(:roster, _from, state) do
    {:reply, Map.keys(state.users_info), state}
  end

  def handle_call({:online_at, "@" <> user}, from, state),
    do: handle_call({:online_at, user}, from, state)

  def handle_call({:online_at, user}, _from, state) do
    user = String.downcase(user)

    online_at =
      if user_info = Map.get(state.users_info, user),
        do: user_info.online_at

    {:reply, online_at, state}
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
    user = String.downcase(user)

    urls =
      Map.get(state.users_info, user, %{urls: MapSet.new()})
      |> Map.get(:urls)
      |> MapSet.to_list()

    {:reply, [%{user: user, urls: urls}], state}
  end
end
