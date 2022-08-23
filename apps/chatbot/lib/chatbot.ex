defmodule Chatbot.Bot do
  @moduledoc false

  use TMI

  @channel_name "moniquelive"
  @enqueue_song_reward_id "bf07c491-1ffb-4eb7-a7d8-5c9f2fe51818"

  alias Chatbot.{
    Commands,
    Config,
    SpotifyMonitor,
    State,
    Utils
  }

  @impl TMI.Handler
  def handle_join(channel) do
    Logger.debug("*** [#{__MODULE__}] [#{channel}] you joined")
    Phoenix.PubSub.subscribe(WebApp.PubSub, "spotify:music_changed")
    say(channel, "/color seagreen")
    say(channel, "/me Tô na área!")
    # say(channel, "/slow 1")
    say(channel, "/uniquechat")
  end

  @impl TMI.Handler
  def handle_message("!" <> _ = command_line, sender, chat, _tag) do
    [cmd | _] = String.split(command_line)

    if cmd not in Config.ignored() do
      action = Commands.action_for_command(cmd)

      if is_nil(action) do
        say(chat, "/color FireBrick")
        say(chat, "@#{sender}, não conheço esse: #{command_line}")
      else
        run(action, chat, command_line, sender)
        State.performed_command(cmd)
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

      SpotifyMonitor.enqueue(song_id)

      song_info = SpotifyMonitor.song_info(song_id)

      artist = hd(song_info.artists)["name"]
      title = song_info.name
      dur = Utils.format_duration(div(song_info.duration_ms, 1000))

      say(chat, "/color GoldenRod")
      say(chat, "Enfileirando #{title} by #{artist} (#{dur}) - @#{user}")
    else
      State.process_sentence(sentence, user)
    end
  end

  @impl TMI.Handler
  def handle_join("#moniquelive", user) do
    # Logger.debug("*** #{user} logged in")
    State.user_joined(user)
  end

  @impl TMI.Handler
  def handle_part("#moniquelive", user) do
    # Logger.debug("*** #{user} left")
    State.user_left(user)
  end

  @impl TMI.Handler
  def handle_unrecognized({:names_list, _channel, users}) do
    users
    |> String.split(" ", trim: true)
    |> State.user_joined()
  end

  def handle_unrecognized(%Spotify.Playback{} = curr) do
    artist = hd(curr.item.artists)["name"]
    title = curr.item.name

    song_url =
      hd(curr.item.album["images"])["url"]
      |> String.replace("https://open.spotify.com/track/", "https://song.link/s/")

    dur = Utils.format_duration(div(curr.item.duration_ms, 1000))
    say(@channel_name, "/color Chocolate")
    say(@channel_name, "/me #{artist} - #{title} - #{song_url} (#{dur})")
  end

  def handle_unrecognized(_msg),
    # do: Logger.debug("*** unrecog/1: #{inspect(msg)}")
    do: nil

  def handle_unrecognized(_msg, _tags),
    # do: Logger.debug("*** unrecog/2: #{inspect(msg)} *** #{inspect(tags)}")
    do: nil

  # @impl TMI.Handler
  # def handle_action(msg, sender, chat),
  #   do: IO.inspect({:"action/3", msg, sender, chat})

  # --- PRIVATE ---------------------------------------------------------------

  defp run(action, chat, command, sender) do
    action["responses"]
    |> Enum.map(&eval_string(&1, command, sender))
    |> Enum.flat_map(&Utils.word_wrap(&1, 500))
    |> Enum.each(&say(chat, &1))
  end

  defp eval_string(response_line, command, sender) do
    response_line
    |> (&~s("#{&1}")).()
    |> Code.eval_string([command: command, sender: sender], __ENV__)
    |> elem(0)
  end
end
