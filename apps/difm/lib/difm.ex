defmodule Difm do
  @moduledoc false

  require Logger

  alias HTTPoison, as: H

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
    )

  # Client

  def start_link(_state) do
    GenServer.start_link(
      __MODULE__,
      %{channel: "vocaltrance", current_song: %{}, timer: nil, notify: true},
      name: __MODULE__
    )
  end

  def get_channel_names(), do: @channel_names
  def get_current_song(), do: GenServer.call(__MODULE__, :current_song)
  def get_song_end(), do: GenServer.call(__MODULE__, :current_song_end)
  def is_playing(), do: GenServer.call(__MODULE__, :is_playing)

  def broadcast_song_info(), do: GenServer.cast(__MODULE__, :broadcast_song_info)
  def set_channel(name), do: GenServer.cast(__MODULE__, {:set_channel, name})
  def stop(), do: GenServer.cast(__MODULE__, :stop)

  # Server

  @impl true
  def init(state) do
    send(self(), :refresh_timer)
    Phoenix.PubSub.subscribe(WebApp.PubSub, "music_live:mounted")

    {:ok, state}
  end

  @impl true
  def handle_call(:current_song, _from, state) do
    {:reply, state.current_song, state}
  end

  @impl true
  def handle_call(:is_playing, _from, state) do
    {:reply, state.notify, state}
  end

  def handle_call(:current_song_end, _from, state) do
    {:ok, start_time, _tz} = DateTime.from_iso8601(state.current_song.track.start_time)

    fmt =
      start_time
      |> DateTime.add(8 + round(state.current_song.track.duration))
      |> DateTime.diff(DateTime.utc_now())
      |> Utils.format_duration()

    {:reply, fmt, state}
  end

  @impl true
  def handle_cast({:set_channel, name}, state) do
    send(self(), :refresh_timer)

    new_state = %{state | channel: name, notify: true}
    {:noreply, new_state}
  end

  def handle_cast(:stop, state) do
    new_state = %{state | notify: false}

    {:noreply, new_state}
  end

  def handle_cast(:broadcast_song_info, state) do
    Phoenix.PubSub.broadcast(
      WebApp.PubSub,
      "difm:current_song",
      {:difm, state.current_song}
    )

    {:noreply, state}
  end

  defp get_asset_url(current_song) do
    case H.get!("https://api.audioaddict.com/v1/di/tracks/#{current_song.track.id}") do
      %H.Response{status_code: 200, body: body} ->
        asset_url = body |> Jason.decode!(keys: :atoms) |> Map.get(:asset_url)
        "https:#{asset_url}"

      _ ->
        current_song.channel_key
    end
  end

  @impl true
  def handle_info(:refresh_timer, state) do
    case H.get!("https://api.audioaddict.com/v1/di/currently_playing") do
      %H.Response{status_code: 200, body: body} ->
        current_song =
          body
          |> Jason.decode!(keys: :atoms)
          |> Enum.find(&(&1[:channel_key] == state.channel))

        asset_url = get_asset_url(current_song)
        current_song = put_in(current_song[:track][:album_art], asset_url)

        {:ok, start_time, _tz} = DateTime.from_iso8601(current_song.track.start_time)

        diff =
          start_time
          |> DateTime.add(8 + round(current_song.track.duration))
          |> DateTime.diff(DateTime.utc_now())
          |> abs

        Logger.info("sleeping for #{diff} seconds...")

        if state.timer,
          do: Process.cancel_timer(state.timer)

        timer = Process.send_after(self(), :refresh_timer, diff * 1_000)

        if state.notify && diff > 10,
          do: broadcast_song_info()

        new_state = %{state | current_song: current_song, timer: timer}
        {:noreply, new_state}

      _ ->
        {:noreply, state}
    end
  end

  def handle_info(:music_live_mounted, state) do
    if state.notify, do: broadcast_song_info()
    {:noreply, state}
  end
end
