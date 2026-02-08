defmodule Chatbot.Bot do
  @moduledoc false

  use TMI

  # @bot_id "661856691"
  # @moniquelive_id "4930146"
  # @channel_name "moniquelive"
  @enqueue_song_reward_id "bf07c491-1ffb-4eb7-a7d8-5c9f2fe51818"
  @tts_reward_id "e706421e-01f7-48fd-a4c6-4393d1ba4ec8"
  @on_load :init

  @chat_client Application.compile_env(:chatbot, :chat_client, Chatbot.ChatClient.TMI)
  @http_client Application.compile_env(:chatbot, :http_client, Chatbot.HttpClient.Req)
  @commands_config Application.compile_env(:chatbot, :commands_config, Chatbot.Config)
  @tts_timeout_ms Application.compile_env(:chatbot, :tts_timeout_ms, 15_000)
  @tts_max_retries Application.compile_env(:chatbot, :tts_max_retries, 2)

  alias Chatbot.{Commands, State}

  def init() do
    :timer.send_after(10_000, :subscribe)
    :ok
  end

  @impl TMI.Handler
  def handle_join(channel) do
    Logger.debug("*** [#{__MODULE__}] [#{channel}] you joined")
    # TwitchApi.Chat.UpdateUserChatColor.call(%{user_id: @bot_id}, %{color: "sea_green"})
    send_chat(channel, "/color seagreen")
    send_chat(channel, "/me Tô na área!")
    # say(channel, "/slow 1")
    send_chat(channel, "/uniquechat")
  end

  @impl TMI.Handler
  def handle_message("!" <> _ = command_line, sender, chat, _tag) do
    [cmd | _] = String.split(command_line)

    if cmd not in @commands_config.ignored() do
      if action = Commands.action_for_command(cmd) do
        run(action, chat, command_line, sender)
        State.performed_command(cmd)
      else
        send_chat(chat, "/color FireBrick")

        # TwitchApi.Chat.UpdateUserChatColor.call(%{user_id: @moniquelive_id}, %{color: "hot_pink"})
        send_chat(chat, "@#{sender}, não conheço esse: #{command_line}")
      end
    end
  end

  def handle_message(sentence, _user, _chat, %{"custom-reward-id" => @tts_reward_id}) do
    case Task.Supervisor.start_child(Chatbot.TaskSupervisor, fn ->
           play_tts(sentence)
         end) do
      {:ok, _pid} ->
        :ok

      {:error, reason} ->
        Logger.error("Error starting TTS task: #{inspect(reason)}")
        :error
    end
  end

  def handle_message(sentence, user, chat, %{"custom-reward-id" => @enqueue_song_reward_id}) do
    if Audio.whos_playing() == :spotify do
      song_id =
        sentence
        |> String.split("/")
        |> List.last()
        |> String.split("?")
        |> hd()

      case Audio.Spotify.song_info(song_id) do
        {:ok, song_info} ->
          artist = hd(song_info.artists)["name"]
          title = song_info.name

          dur =
            song_info.duration_ms
            |> div(1000)
            |> DurationFormatter.format_duration()

          send_chat(chat, "/color GoldenRod")
          send_chat(chat, "Enfileirando #{title} by #{artist} (#{dur}) - @#{user}")
          Audio.Spotify.enqueue(song_id)

        {:error, reason} ->
          send_chat(chat, "/color Red")
          send_chat(chat, "Não consegui enfileirar: #{song_id} (#{reason})")
      end
    else
      # TODO: assinar o evento channel.channel_points_custom_reward_redemption.add
      # https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelchannel_points_custom_reward_redemptionadd
      # IO.inspect(sentence)
      # TwitchApi.ChannelPoints.UpdateRedemptionStatus.call(
      #   tag["id"],
      #   @bot_id,
      #   @enqueue_song_reward_id,
      #   Jason.encode!(%{status: "CANCELED"}),
      #   %{user_id: @bot_id}
      # ) |> IO.inspect
    end
  end

  def handle_message(sentence, user, _chat, _tag),
    do: State.process_sentence(sentence, user)

  @impl TMI.Handler
  def handle_join("#moniquelive", user),
    do: State.user_joined(user)

  @impl TMI.Handler
  def handle_part("#moniquelive", user),
    do: State.user_left(user)

  @impl TMI.Handler
  def handle_unrecognized({:names_list, _channel, users}),
    do:
      users
      |> String.split(" ", trim: true)
      |> State.user_joined()

  @impl TMI.Handler
  # def handle_unrecognized(%Spotify.Track{} = curr) do
  #   artist = hd(curr.artists)["name"]
  #   title = curr.name

  #   song_url =
  #     curr.href
  #     |> String.replace("https://api.spotify.com/v1/tracks/", "https://song.link/s/")

  #   dur =
  #     curr.duration_ms
  #     |> div(1000)
  #     |> DurationFormatter.format_duration()

  #   say(@channel_name, "/color Chocolate")
  #   say(@channel_name, "/me #{artist} - #{title} - #{song_url} (#{dur})")
  # end

  def handle_unrecognized(:subscribe) do
    Logger.info("[subscribe] Subscribing...")
    Phoenix.PubSub.unsubscribe(WebApp.PubSub, "audio:music_changed")
    Phoenix.PubSub.subscribe(WebApp.PubSub, "audio:music_changed")
    Commands.marquee("", "!marq")
  end

  def handle_unrecognized(_msg),
    # do: IO.puts("*** #{inspect(msg)}")
    do: nil

  # def handle_unrecognized(_msg, _tags),
  #   # do: Logger.debug("*** unrecog/2: #{inspect(msg)} *** #{inspect(tags)}")
  #   do: nil

  # @impl TMI.Handler
  # def handle_action(msg, sender, chat),
  #   do: Logger.debug(inspect({"action/3", msg, sender, chat}))

  # @impl TMI.Handler
  # def handle_action(msg, sender, chat, tags),
  #   do: Logger.debug(inspect({"action/4", msg, sender, chat, tags}))

  # --- PRIVATE ---------------------------------------------------------------

  defp run(action, chat, command, sender) do
    (action["responses"] || [])
    |> Enum.map(&Chatbot.Template.render(&1, %{command: command, sender: sender}))
    |> Enum.flat_map(&Utils.word_wrap(&1, 500))
    |> Enum.each(&send_chat(chat, &1))

    if logs = action["logs"] do
      logs
      |> Enum.map(&Chatbot.Template.render(&1, %{command: command, sender: sender}))
      |> Enum.each(&Logger.info/1)
    end
  end

  defp send_chat(chat, message), do: @chat_client.say(chat, message)

  defp play_tts(sentence) do
    case Application.fetch_env(:chatbot, :eleven_labs_api_key) do
      {:ok, api_key} when is_binary(api_key) and byte_size(api_key) > 0 ->
        body = %{text: "#{sentence}", model_id: "eleven_turbo_v2_5", language_code: "pt"}
        headers = [{"xi-api-key", api_key}]
        voice_id = "XB0fDUnXU5powFXDhCwa"

        case @http_client.post(
               "https://api.elevenlabs.io/v1/text-to-speech/#{voice_id}?output_format=mp3_44100_128",
               json: body,
               headers: headers,
               receive_timeout: @tts_timeout_ms,
               retry: :transient,
               max_retries: @tts_max_retries
             ) do
          {:ok, %Req.Response{status: 200, body: body}} ->
            Phoenix.PubSub.broadcast(
              WebApp.PubSub,
              "rewards:play_tts",
              {:play_tts, %{mp3: Base.encode64(body)}}
            )

          {:ok, %Req.Response{status: status}} ->
            Logger.error("Error playing TTS: status #{status}")

          {:error, error} ->
            Logger.error("Error playing TTS: #{inspect(error)}")
        end

      _ ->
        Logger.warning("ELEVEN_LABS_API_KEY not configured; skipping TTS")
    end
  end
end
