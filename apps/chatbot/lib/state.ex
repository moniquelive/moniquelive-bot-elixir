defmodule Chatbot.State do
  @moduledoc false

  use GenServer

  @default_name __MODULE__

  # Client

  def start_link(name),
    do: GenServer.start_link(__MODULE__, name, name: via_tuple(name))

  defp via_tuple(name), do: {:via, Registry, {Registry.Chatbot, name}}

  def user_joined(name \\ @default_name, users)

  def user_joined(name, users) when is_list(users),
    do: via_tuple(name) |> GenServer.cast({:add_users, users})

  def user_joined(name, user) when is_binary(user),
    do: via_tuple(name) |> GenServer.cast({:add_user, user})

  def user_left(name \\ @default_name, user) when is_binary(user),
    do: via_tuple(name) |> GenServer.cast({:del_user, user})

  def user_typed_url(name \\ @default_name, user, url),
    do: via_tuple(name) |> GenServer.cast({:add_user_url, user, url})

  def urls_for(name \\ @default_name, user),
    do: via_tuple(name) |> GenServer.call({:urls_for, user})

  def roster(name \\ @default_name),
    do: via_tuple(name) |> GenServer.call(:roster)

  def get_user(name \\ @default_name, user),
    do: via_tuple(name) |> GenServer.call({:get_user, user})

  def performed_command(name \\ @default_name, command),
    do: via_tuple(name) |> GenServer.cast({:command, command})

  def command_count(name \\ @default_name),
    do: via_tuple(name) |> GenServer.call(:command_count)

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
  def init(_name) do
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
