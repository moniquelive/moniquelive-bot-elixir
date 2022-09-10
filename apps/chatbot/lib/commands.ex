defmodule Chatbot.Commands do
  @moduledoc false

  @moniquelive_id "4930146"

  alias Chatbot.{Config, State, Utils}

  def action_for_command(cmd),
    do:
      Config.commands()
      |> Enum.find(&(cmd in &1["actions"]))

  @doc """
  ----------------------------------------------------------------------------
  !cmds
  ----------------------------------------------------------------------------
  """
  def commands() do
    c = State.command_count()

    Config.commands()
    |> Enum.map_join(" ", &(&1["actions"] |> format_action_counter(c)))
  end

  defp format_action_counter(aliases, counters) do
    total_calls =
      aliases
      |> Enum.map(&Map.get(counters, &1, 0))
      |> Enum.sum()

    List.first(aliases) <>
      if total_calls > 0, do: " (#{total_calls})", else: ""
  end

  @doc """
  ----------------------------------------------------------------------------
  !os
  ----------------------------------------------------------------------------
  """
  def uname() do
    result =
      System.cmd("guname", ["-mor"])
      |> elem(0)

    "macOS #{result}"
  end

  @doc """
  ----------------------------------------------------------------------------
  !help
  ----------------------------------------------------------------------------
  """
  def help(command),
    do: help_helper(command, action_for_command("!help"))

  @doc """
  ----------------------------------------------------------------------------
  !ajuda
  ----------------------------------------------------------------------------
  """
  def ajuda(command),
    do: help_helper(command, action_for_command("!ajuda"))

  defp help_helper(command, help_action) do
    action =
      case String.split(command) do
        [_help, subject | _] ->
          action_for_command(subject) || action_for_command("!" <> subject)

        [_help] ->
          nil
      end || help_action

    ["!" <> help_action_label | _] = help_action["actions"]
    [cmd | _] = action["actions"]
    msg = action[help_action_label]
    aliases = Enum.join(action["actions"], ",")
    "#{cmd}: #{msg} (aliases: #{aliases})"
  end

  @doc """
  ----------------------------------------------------------------------------
  !c
  ----------------------------------------------------------------------------
  """
  def roster(),
    do: State.roster()

  @doc """
  ----------------------------------------------------------------------------
  !hug
  ----------------------------------------------------------------------------
  """
  def hug(sender, command) do
    sender = String.downcase(sender)

    case String.split(command) do
      [_hug] -> hug(sender, "!hug " <> Enum.random(State.roster()))
      [_hug, ^sender | _] -> "♥ #{sender} se auto-abraça 02Pat"
      [_hug, friend | _] -> "♥ #{sender} abraça #{friend} 02Pat"
    end
  end

  @doc """
  ----------------------------------------------------------------------------
  !ban
  ----------------------------------------------------------------------------
  """
  def ban(command) do
    case String.split(command) do
      [_ban] ->
        ban("!ban " <> Enum.random(State.roster()))

      [ban, friend | _] ->
        action = action_for_command(ban)

        Enum.random(action["extras"])
        |> (&~s("#{&1}")).()
        |> Code.eval_string([target: friend], __ENV__)
        |> elem(0)
    end
  end

  @doc """
  ----------------------------------------------------------------------------
  !urls
  ----------------------------------------------------------------------------
  """
  def urls(command) do
    case String.split(command) do
      [_url] -> State.urls_for("")
      [_url, user | _] -> State.urls_for(user)
    end
    |> Enum.filter(&(!Enum.empty?(&1.urls)))
    |> Enum.map_join(" ", &~s(#{&1.user}: [#{Enum.join(&1.urls, " ")}]))
    |> urls_resp()
  end

  defp urls_resp(""), do: "/me (sem urls no momento)"
  defp urls_resp(msg), do: "/me " <> msg

  @doc """
  ----------------------------------------------------------------------------
  !uptime
  ----------------------------------------------------------------------------
  """
  def uptime(sender, command) do
    sender = String.downcase(sender)

    case String.split(command) do
      [_uptime] ->
        uptime(sender, "!uptime " <> sender)

      [_uptime, friend | _] ->
        case State.online_at(friend) do
          nil ->
            "#{friend} não tem horário de entrada... :("

          dt ->
            "#{friend} entrou #{format_date(dt)} (há #{time_ago(dt)})"
        end
    end
  end

  defp format_date(dt) do
    dt
    |> DateTime.shift_zone!("America/Sao_Paulo")
    |> Calendar.strftime("dia %x as %X", preferred_date: "%d/%m/%Y")
  end

  defp time_ago(dt),
    do: DateTime.diff(DateTime.utc_now(), dt, :second) |> Utils.format_duration()

  @doc """
  ----------------------------------------------------------------------------
  !followage
  ----------------------------------------------------------------------------
  """
  def follow_age(sender, command) do
    sender = String.downcase(sender)

    case String.split(command) do
      [_followage] ->
        follow_age(sender, "!followage #{sender}")

      [_followage, login | _] ->
        case get_twitch_user_info(login) do
          [follower_info] ->
            format_follower_info(follower_info)

          _ ->
            "não encontrei o usuário #{login}..."
        end
    end
  end

  defp format_follower_info(info) do
    case get_user_followage_moniquelive(info["id"]) do
      [followage_info] ->
        format_followed_at(followage_info)

      _ ->
        "#{info["display_name"]} não segue a moniquelive..."
    end
  end

  defp format_followed_at(info) do
    case DateTime.from_iso8601(info["followed_at"]) do
      {:ok, since, 0} ->
        period =
          DateTime.diff(DateTime.utc_now(), since, :second)
          |> Utils.format_duration()

        "#{info["from_name"]} segue a #{info["to_name"]} há #{period}"

      _ ->
        "não consegui fazer parse da data: #{info["followed_at"]}"
    end
  end

  defp get_twitch_user_info(login),
    do:
      TwitchApi.Users.GetUsers.call(%{login: login})
      |> elem(1)
      |> Map.get(:body)
      |> Jason.decode!()
      |> Map.get("data")

  defp get_user_followage_moniquelive(follower_id),
    do:
      TwitchApi.Users.GetUsersFollows.call(%{from_id: follower_id, to_id: @moniquelive_id})
      |> elem(1)
      |> Map.get(:body)
      |> Jason.decode!()
      |> Map.get("data")

  @doc """
  ----------------------------------------------------------------------------
  !marquee
  ----------------------------------------------------------------------------
  """
  def marquee(sender, command) do
    sender = String.downcase(sender)

    [info] =
      TwitchApi.Channels.GetChannelInformation.call(%{broadcaster_id: @moniquelive_id})
      |> elem(1)
      |> Map.get(:body)
      |> Jason.decode!()
      |> Map.get("data")

    status = ~s(Marquee > #{info["title"]})

    case String.split(command) do
      [_marquee] ->
        Phoenix.PubSub.broadcast(
          WebApp.PubSub,
          "layer:marquee_updated",
          {:marquee, info["title"]}
        )

        status

      [_marquee | sentence] ->
        if sender != "moniquelive" do
          status
        else
          sentence = Enum.join(sentence, " ")

          TwitchApi.Channels.ModifyChannelInformation.call(
            %{broadcaster_id: info["broadcaster_id"]},
            %{user_id: info["broadcaster_id"]},
            %{"title" => sentence} |> Jason.encode!()
          )

          Phoenix.PubSub.broadcast(WebApp.PubSub, "layer:marquee_updated", {:marquee, sentence})
          "Atualizando marquee: #{sentence}"
        end

      _ ->
        status
    end
  end
end
