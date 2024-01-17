defmodule Chatbot.State do
  @moduledoc false

  use Agent

  alias Chatbot.User

  @name __MODULE__

  def start_link(opts),
    do:
      with(
        opts <- Keyword.put_new(opts, :name, __MODULE__),
        do: Agent.start_link(fn -> %{users_info: %{}, commands_info: %{}} end, opts)
      )

  def command_count(name \\ @name),
    do: Agent.get(name, & &1.commands_info)

  def roster(name \\ @name),
    do: Agent.get(name, &Map.keys(&1.users_info))

  def online_at(name \\ @name, user),
    do: Agent.get(name, &get_user(&1, user, nil)).online_at

  def process_sentence(name \\ @name, sentence, user),
    do:
      with(
        user <- normalize(user),
        do:
          Regex.scan(~r{https?://\S*}, sentence)
          |> List.flatten()
          |> Enum.each(&user_typed_url(name, user, &1))
      )

  # ---
  def urls_for(name \\ @name, _)

  def urls_for(name, ""),
    do:
      Agent.get(
        name,
        &for(
          {user, %{urls: urls}} <- &1.users_info,
          do: %{user: user, urls: MapSet.to_list(urls)}
        )
      )

  def urls_for(name, user),
    do:
      with(
        user <- normalize(user),
        urls <- Agent.get(name, &get_user(&1, user).urls),
        do: [%{user: user, urls: MapSet.to_list(urls)}]
      )

  # ---
  def user_joined(name \\ @name, users)

  def user_joined(name, users) when is_list(users),
    do: users |> Enum.each(&user_joined(name, &1))

  def user_joined(name, user) when is_binary(user),
    do:
      with(
        user <- normalize(user),
        do: Agent.update(name, &put_in(&1[:users_info][user], get_user(&1, user)))
      )

  # ---

  def user_left(name \\ @name, user),
    do:
      with(
        user <- normalize(user),
        do: Agent.update(name, &(pop_in(&1, [:users_info, user]) |> elem(1)))
      )

  def performed_command(name \\ @name, command),
    do:
      Agent.update(
        name,
        &put_in(&1.commands_info, Map.update(&1.commands_info, command, 1, fn n -> n + 1 end))
      )

  def user_typed_url(name \\ @name, user, url),
    do:
      with(
        user <- normalize(user),
        do:
          Agent.update(
            name,
            &put_in(&1.users_info[user], get_user(&1, user) |> User.add_url(url))
          )
      )

  defp normalize(user) do
    case String.downcase(user) do
      "@" <> suffix -> suffix
      username -> username
    end
  end

  defp get_user(state, user, dt \\ DateTime.utc_now()),
    do: Map.get(state.users_info, user, %User{online_at: dt})
end
