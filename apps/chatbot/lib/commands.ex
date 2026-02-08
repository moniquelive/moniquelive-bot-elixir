defmodule Chatbot.Commands do
  @moduledoc false

  @bot_id "661856691"
  @moniquelive_id "4930146"

  @twitch_client Application.compile_env(
                   :chatbot,
                   :twitch_api_client,
                   Chatbot.TwitchApiClient.Scrapped
                 )

  alias Chatbot.State

  @commands_config Application.compile_env(:chatbot, :commands_config, Chatbot.Config)

  def action_for_command(cmd),
    do:
      @commands_config.commands()
      |> Enum.find(&(cmd in &1["actions"]))

  @doc """
  ----------------------------------------------------------------------------
  !cmds
  ----------------------------------------------------------------------------
  """
  def commands() do
    c = State.command_count()

    @commands_config.commands()
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
        [_help, subject | _] -> action_for_command(subject) || action_for_command("!" <> subject)
        [_help] -> nil
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
      [_hug] ->
        case random_roster_member() do
          nil -> "♥ sem ninguém no chat pra abraçar agora"
          friend -> hug(sender, "!hug " <> friend)
        end

      [_hug, ^sender | _] ->
        "♥ #{sender} se auto-abraça 02Pat"

      [_hug, friend | _] ->
        "♥ #{sender} abraça #{friend} 02Pat"
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
        case random_roster_member() do
          nil -> "sem ninguém pra banir agora"
          friend -> ban("!ban " <> friend)
        end

      [ban, friend | _] ->
        case action_for_command(ban) do
          nil ->
            "não conheço esse comando"

          action ->
            Enum.random(action["extras"])
            |> Chatbot.Template.render(%{target: friend})
        end
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
          nil -> "#{friend} não tem horário de entrada... :("
          dt -> "#{friend} entrou #{format_date(dt)} (há #{time_ago(dt)})"
        end
    end
  end

  defp format_date(dt),
    do:
      DateTime.shift_zone!(dt, "America/Sao_Paulo")
      |> Calendar.strftime("dia %x as %X", preferred_date: "%d/%m/%Y")

  defp time_ago(dt),
    do:
      DateTime.diff(DateTime.utc_now(), dt, :second)
      |> DurationFormatter.format_duration()

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
          [follower_info] -> format_follower_info(follower_info)
          _ -> "não encontrei o usuário #{login}..."
        end
    end
  end

  defp format_follower_info(info) do
    case get_user_followage_moniquelive(info["id"]) do
      [followage_info] -> format_followed_at(followage_info)
      _ -> "#{info["display_name"]} não segue a moniquelive..."
    end
  end

  defp format_followed_at(info) do
    case DateTime.from_iso8601(info["followed_at"]) do
      {:ok, since, 0} ->
        period =
          DateTime.diff(DateTime.utc_now(), since, :second)
          |> DurationFormatter.format_duration()

        "#{info["from_name"]} segue a #{info["to_name"]} há #{period}"

      _ ->
        "não consegui fazer parse da data: #{info["followed_at"]}"
    end
  end

  defp get_twitch_user_info(login) do
    case @twitch_client.get_users(login) do
      {:ok, data} -> data
      {:error, _} -> []
    end
  end

  defp get_user_followage_moniquelive(follower_id) do
    case @twitch_client.get_user_follows(follower_id, @moniquelive_id) do
      {:ok, data} -> data
      {:error, _} -> []
    end
  end

  @doc """
  ----------------------------------------------------------------------------
  !marquee
  ----------------------------------------------------------------------------
  """
  def marquee(sender, command) do
    sender = String.downcase(sender)

    case @twitch_client.get_channel_information(@bot_id) do
      {:ok, info} ->
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

              case @twitch_client.modify_channel_information(
                     info["broadcaster_id"],
                     info["broadcaster_id"],
                     sentence
                   ) do
                :ok ->
                  Phoenix.PubSub.broadcast(
                    WebApp.PubSub,
                    "layer:marquee_updated",
                    {:marquee, sentence}
                  )

                  "Atualizando marquee: #{sentence}"

                {:error, _} ->
                  "não consegui atualizar a marquee agora"
              end
            end

          _ ->
            status
        end

      {:error, _} ->
        "não consegui buscar a marquee agora"
    end
  end

  @doc """
  ----------------------------------------------------------------------------
  !difm
  ----------------------------------------------------------------------------
  """
  def difm("moniquelive", command) do
    all_channels = Audio.Difm.get_channel_names()

    case String.split(command) do
      [_difm] ->
        "Todos os canais: #{all_channels |> Enum.join(", ")}"

      [_difm, channel] ->
        if channel in all_channels do
          Audio.Difm.set_channel(channel)
          "Definindo canal: #{channel}..."
        else
          "Esse canal `#{channel}` não temos..."
        end
    end
  end

  def difm(_sender, _command) do
    "Foi mal, esse comando é só pra Mo..."
  end

  defp random_roster_member do
    case State.roster() do
      [] -> nil
      roster -> Enum.random(roster)
    end
  end
end
