defmodule Chatbot.Bot do
  @moduledoc false

  use TMI

  # @bot_id "661856691"
  # @moniquelive_id "4930146"
  @channel_name "moniquelive"
  @enqueue_song_reward_id "bf07c491-1ffb-4eb7-a7d8-5c9f2fe51818"
  @on_load :init

  alias Chatbot.{
    Commands,
    Config,
    State
  }

  def init() do
    Process.send_after(__MODULE__, :subscribe, 10_000)
    :ok
  end

  @impl TMI.Handler
  def handle_join(channel) do
    Logger.debug("*** [#{__MODULE__}] [#{channel}] you joined")
    # TwitchApi.Chat.UpdateUserChatColor.call(%{user_id: @bot_id}, %{color: "sea_green"})
    say(channel, "/color seagreen")
    say(channel, "/me Tô na área!")
    # say(channel, "/slow 1")
    say(channel, "/uniquechat")
  end

  @impl TMI.Handler
  def handle_message("!" <> _ = command_line, sender, chat, _tag) do
    [cmd | _] = String.split(command_line)

    if cmd not in Config.ignored() do
      if action = Commands.action_for_command(cmd) do
        run(action, chat, command_line, sender)
        State.performed_command(cmd)
      else
        say(chat, "/color FireBrick")

        # TwitchApi.Chat.UpdateUserChatColor.call(%{user_id: @moniquelive_id}, %{color: "hot_pink"})
        say(chat, "@#{sender}, não conheço esse: #{command_line}")
      end
    end
  end

  def handle_message(sentence, user, chat, tag) do
    if tag["custom-reward-id"] == @enqueue_song_reward_id do
      song_id =
        sentence
        |> String.split("/")
        |> List.last()
        |> String.split("?")
        |> hd()

      case SpotifyMonitor.song_info(song_id) do
        {:ok, song_info} ->
          artist = hd(song_info.artists)["name"]
          title = song_info.name

          dur =
            song_info.duration_ms
            |> div(1000)
            |> Utils.format_duration()

          say(chat, "/color GoldenRod")
          say(chat, "Enfileirando #{title} by #{artist} (#{dur}) - @#{user}")
          SpotifyMonitor.enqueue(song_id)

        {:error, reason} ->
          say(chat, "/color Red")
          say(chat, "Não consegui enfileirar: #{song_id} (#{reason})")
      end
    else
      State.process_sentence(sentence, user)
    end
  end

  @impl TMI.Handler
  def handle_join("#moniquelive", user), do: State.user_joined(user)

  @impl TMI.Handler
  def handle_part("#moniquelive", user), do: State.user_left(user)

  @impl TMI.Handler
  def handle_unrecognized({:names_list, _channel, users}),
    do:
      users
      |> String.split(" ", trim: true)
      |> State.user_joined()

  @impl TMI.Handler
  def handle_unrecognized(%Spotify.Track{} = curr) do
    artist = hd(curr.artists)["name"]
    title = curr.name

    song_url =
      curr.href
      |> String.replace("https://api.spotify.com/v1/tracks/", "https://song.link/s/")

    dur =
      curr.duration_ms
      |> div(1000)
      |> Utils.format_duration()

    say(@channel_name, "/color Chocolate")
    say(@channel_name, "/me #{artist} - #{title} - #{song_url} (#{dur})")
  end

  def handle_unrecognized(:subscribe) do
    Logger.info("[subscribe] Subscribing...")
    Phoenix.PubSub.unsubscribe(WebApp.PubSub, "spotify:music_changed")
    Phoenix.PubSub.subscribe(WebApp.PubSub, "spotify:music_changed")
    Commands.marquee("", "!marq")
  end

  def handle_unrecognized(_msg),
    # do: IO.puts("*** #{inspect(msg)}")
    do: nil

  def handle_unrecognized(_msg, _tags),
    # do: Logger.debug("*** unrecog/2: #{inspect(msg)} *** #{inspect(tags)}")
    do: nil

  # @impl TMI.Handler
  # def handle_action(msg, sender, chat),
  #   do: Logger.debug(inspect({"action/3", msg, sender, chat}))

  # --- PRIVATE ---------------------------------------------------------------

  defp run(action, chat, command, sender) do
    action["responses"]
    |> Enum.map(&eval_string(&1, command, sender))
    |> Enum.flat_map(&Utils.word_wrap(&1, 500))
    |> Enum.each(&say(chat, &1))

    if logs = action["logs"],
      do:
        logs
        |> Enum.map(&eval_string(&1, command, sender))
        |> Logger.info()
  end

  defp eval_string(response_line, command, sender) do
    response_line
    |> (&~s("#{&1}")).()
    |> Code.eval_string([command: command, sender: sender], __ENV__)
    |> elem(0)
  end
end
