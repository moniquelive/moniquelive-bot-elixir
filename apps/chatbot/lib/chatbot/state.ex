defmodule Chatbot.State do
  @moduledoc false

  @name __MODULE__

  use Agent

  alias Chatbot.User

  def start_link(opts) do
    opts = Keyword.put_new(opts, :name, @name)
    Agent.start_link(fn -> %{users_info: %{}, commands_info: %{}} end, opts)
  end

  def command_count(name \\ @name), do: Agent.get(name, & &1.commands_info)
  def roster(name \\ @name), do: Agent.get(name, &(Map.keys(&1.users_info) |> Enum.sort()))
  def online_at(name \\ @name, user), do: Agent.get(name, &get_user(&1, user, nil)).online_at

  def process_sentence(name \\ @name, sentence, user),
    do:
      Regex.scan(~r{https?://\S*}, sentence)
      |> List.flatten()
      |> Enum.each(&user_typed_url(name, normalize(user), &1))

  # ---
  def urls_for(name \\ @name, _)

  def urls_for(name, ""),
    do:
      Agent.get(
        name,
        fn state ->
          state.users_info
          |> Enum.map(fn {user, %{urls: urls}} ->
            %{user: user, urls: urls |> MapSet.to_list() |> Enum.sort()}
          end)
          |> Enum.sort_by(& &1.user)
        end
      )

  def urls_for(name, user) do
    user = normalize(user)
    urls = Agent.get(name, &get_user(&1, user).urls)
    [%{user: user, urls: urls |> MapSet.to_list() |> Enum.sort()}]
  end

  # ---
  def user_joined(name \\ @name, users)

  def user_joined(name, users) when is_list(users),
    do: Enum.each(users, &user_joined(name, &1))

  def user_joined(name, user) when is_binary(user) do
    user = normalize(user)

    Agent.update(
      name,
      &put_in(&1[:users_info][user], get_user(&1, user))
    )
  end

  # ---

  def user_left(name \\ @name, user) do
    user = normalize(user)

    Agent.update(
      name,
      &(pop_in(&1, [:users_info, user])
        |> elem(1))
    )
  end

  def performed_command(name \\ @name, command),
    do:
      Agent.update(
        name,
        &put_in(&1.commands_info, Map.update(&1.commands_info, command, 1, fn n -> n + 1 end))
      )

  def user_typed_url(name \\ @name, user, url) do
    user = normalize(user)

    Agent.update(
      name,
      &put_in(&1.users_info[user], get_user(&1, user) |> User.add_url(url))
    )
  end

  defp normalize(user) do
    case String.downcase(user) do
      "@" <> suffix -> suffix
      username -> username
    end
  end

  defp get_user(state, user, dt \\ DateTime.utc_now()),
    do: Map.get(state.users_info, user, %User{online_at: dt})
end
