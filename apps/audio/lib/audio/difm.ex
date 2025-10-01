defmodule Audio.Difm do
  @moduledoc false

  @name __MODULE__
  @audio_addict_api Req.new(base_url: "https://api.audioaddict.com")

  require Logger

  @behaviour :gen_statem

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

  # --------------------------------------------------------------- Client ---

  def start_link() do
    args = %{channel: "vocaltrance", current_song: %{}}
    :gen_statem.start_link({:local, @name}, @name, args, [])
  end

  def get_current_song(), do: :gen_statem.call(@name, :current_song)
  def get_channel_names(), do: @channel_names
  def set_channel(name), do: :gen_statem.cast(@name, {:set_channel, name})

  defp get_asset_url(id) do
    case Req.get!(@audio_addict_api, url: "/v1/di/tracks/#{id}") do
      %Req.Response{status: 200, body: body} -> "https:" <> body["asset_url"]
      _ -> nil
    end
  end

  # --------------------------------------------------------------- Server ---

  @impl true
  def callback_mode, do: :handle_event_function

  @impl true
  def init(data) do
    actions = [{:state_timeout, 0, :refresh_timer}]
    {:ok, :refresh_timer, data, actions}
  end

  #
  # GET CURRENT SONG
  #
  @impl true
  def handle_event({:call, from}, :current_song, _state, data) do
    actions = [{:reply, from, data.current_song}]
    {:keep_state_and_data, actions}
  end

  #
  # SET CHANNEL
  #
  def handle_event(:cast, {:set_channel, name}, _state, data) when name in @channel_names do
    Logger.info("changing to #{name}")

    new_data = %{data | channel: name}
    actions = [{:state_timeout, 0, :refresh_timer}]
    {:keep_state, new_data, actions}
  end

  def handle_event(:cast, {:set_channel, _}, _state, _data), do: :keep_state_and_data

  #
  # REFRESH TIMER
  #
  def handle_event(:state_timeout, :refresh_timer, _state, data) do
    with %Req.Response{status: 200, body: body1} <-
           Req.get!(@audio_addict_api, url: "/v1/di/currently_playing"),
         %Req.Response{status: 200, body: body2} <-
           Req.get!(@audio_addict_api, url: "/v1/radiotunes/currently_playing") do
      # get song info
      current_song = (body1 ++ body2) |> Enum.find(&(&1["channel_key"] == data.channel))
      Logger.debug("current song: #{inspect(current_song)}")

      # get album cover
      asset_url = get_asset_url(current_song["track"]["id"]) || current_song["channel_key"]
      current_song = put_in(current_song["track"]["album_art"], asset_url)

      # get song start time
      {:ok, start_time, _tz} = DateTime.from_iso8601(current_song["track"]["start_time"])

      # how long should we wait until the next song
      diff =
        start_time
        |> DateTime.add(round(10 + current_song["track"]["duration"]))
        |> DateTime.diff(DateTime.utc_now())
        |> abs()

      # if less than 10 seconds, always wait 2 seconds
      diff = if diff < 10, do: 2, else: diff

      Logger.info("sleeping for #{diff} seconds...")

      if diff > 10, do: Audio.difm_changed(current_song)

      new_data = %{data | current_song: current_song}
      actions = [{:state_timeout, diff * 1_000, :refresh_timer}]
      {:keep_state, new_data, actions}
    else
      _ -> :keep_state_and_data
    end
  end
end
