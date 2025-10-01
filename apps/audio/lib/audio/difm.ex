defmodule Audio.Difm do
  @moduledoc false

  @name __MODULE__
  @audio_addict_api Req.new(base_url: "https://api.audioaddict.com")

  require Logger

  use GenServer

  @channel_names ~w(
    00sclubhits
    ambient atmosphericbreaks
    bassline bassnjackinhouse bigbeat bigroomhouse breaks
    chilledm chillhop chillntropicalhouse chillout chilloutdreams chillstep classiceurodance classiceurodisco classictechno classictrance classicvocaltrance club clubdubstep
    darkdnb darkpsytrance deephouse deepnudisco deeporganichouse deepprogressivehouse deepprogressivetrance deeptech detroithousentechno discohouse djmixes downtempolounge drumandbass drumstep dub dubstep dubtechno
    edm edmfestival electro electronicpioneers electropop electroswing epictrance eurodance
    funkyhouse futurebass futuregarage futuresynthpop
    gabber glitchhop goapsy
    handsup hardcore harddance hardstyle hardtechno house
    indiebeats indiedance
    jazzhouse jungle
    latinhouse liquiddnb liquiddubstep liquidtrap lofihiphop lofiloungenchill lounge
    melodicprogressive minimal
    nightcore nudisco
    oldschoolacid oldschoolhouse oldschoolrave
    progressive progressivepsy psybient psychill psydub
    russianclubhits
    slaphouse soulfulhouse spacemusic summerchillhouse synthwave
    techhouse techno trance trap tribalhouse
    umfradio undergroundtechno
    vocalchillout vocalhouse vocallounge vocaltrance
    00scountry 00sdance 00srnb 00srock 60srock 70srock 80saltnnewwave 80sdance 80srock 90scountry 90sdance 90srnb 90srock
    altrock ambient americansongbook
    baroque bebop bluesrock bossanova
    cafedeparis chillntropicalhouse chillout christian classical classicalperiod classicalpianotrios classicmotown classicrap classicrock clubbollywood coffeejazz country cubanlounge
    dancehits datempolounge davekoz discoparty downtempolounge dreamscapes
    easylistening edmfest epicmusic eurodance
    guitar
    hardrock hit00s hit60s hit70s hit90s
    indiedance indierock
    jazzclassics jpop
    kpop
    latinpophits lounge lovemusic
    meditation mellowjazz mellowsmoothjazz metal modernblues modernrock mozart
    nature newage
    oldies oldschoolfunknsoul
    pianojazz poprock
    reggaeton relaxation relaxingambientpiano romantic romantica romanticalatina rootsreggae
    salsa sleeprelaxation slowjams smoothbeats smoothbossanova smoothjazz smoothjazz247 smoothlounge softrock solopiano soundtracks
    the80s tophits
    uptemposmoothjazz urbanjamz urbanpophits
    vocalchillout vocallounge vocalnewage vocalsmoothjazz
    world
    )

  # Client

  def start_link(_opts) do
    args = %{channel: "vocaltrance", current_song: %{}, timer: nil}
    GenServer.start_link(@name, args, name: @name)
  end

  def get_current_song(), do: GenServer.call(@name, :current_song)
  # def get_song_end(), do: GenServer.call(@name, :current_song_end)

  def get_channel_names(), do: @channel_names
  def set_channel(name), do: GenServer.cast(@name, {:set_channel, name})

  # Server

  @impl true
  def init(state) do
    send(self(), :refresh_timer)
    {:ok, state}
  end

  @impl true
  def handle_call(:current_song, _from, state),
    do: {:reply, state.current_song, state}

  # def handle_call(:current_song_end, _from, state) do
  #   {:ok, start_time, _tz} = DateTime.from_iso8601(state.current_song.track.start_time)
  #
  #   fmt =
  #     start_time
  #     |> DateTime.add(8 + round(state.current_song.track.duration))
  #     |> DateTime.diff(DateTime.utc_now())
  #     |> DurationFormatter.format_duration()
  #
  #   {:reply, fmt, state}
  # end

  @impl true
  def handle_cast({:set_channel, name}, state) do
    send(self(), :refresh_timer)
    new_state = if(name in @channel_names, do: %{state | channel: name}, else: state)
    Logger.info("changing to #{inspect(new_state)}")

    {:noreply, new_state}
  end

  defp get_asset_url(id) do
    case Req.get!(@audio_addict_api, url: "/v1/di/tracks/#{id}") do
      %Req.Response{status: 200, body: body} -> "https:" <> body["asset_url"]
      _ -> nil
    end
  end

  @impl true
  def handle_info(:refresh_timer, state) do
    with %Req.Response{status: 200, body: body1} <-
           Req.get!(@audio_addict_api, url: "/v1/di/currently_playing"),
         %Req.Response{status: 200, body: body2} <-
           Req.get!(@audio_addict_api, url: "/v1/radiotunes/currently_playing") do
      # get song info
      current_song = (body1 ++ body2) |> Enum.find(&(&1["channel_key"] == state.channel))
      Logger.debug("current song: #{inspect(current_song)}")

      # get album cover
      asset_url = get_asset_url(current_song["track"]["id"]) || current_song["channel_key"]
      current_song = put_in(current_song["track"]["album_art"], asset_url)

      # get song duration
      {:ok, start_time, _tz} = DateTime.from_iso8601(current_song["track"]["start_time"])

      diff =
        start_time
        |> DateTime.add(round(9 + current_song["track"]["duration"]))
        |> DateTime.diff(DateTime.utc_now())
        |> abs

      Logger.info("sleeping for #{diff} seconds...")

      if state.timer, do: :timer.cancel(state.timer)
      timer = :timer.send_after(diff * 1_000, :refresh_timer)

      if diff > 10, do: Audio.difm_changed(current_song)

      new_state = %{state | current_song: current_song, timer: timer}
      {:noreply, new_state}
    else
      _ -> {:noreply, state}
    end
  end
end
