defmodule Audio.Difm do
  @moduledoc false

  @name __MODULE__
  @audio_addict_base_url "https://api.audioaddict.com"
  @http_client Application.compile_env(:audio, :http_client, Audio.HttpClient.Req)
  @channels_filename "difm_channels.txt"

  require Logger

  @behaviour :gen_statem

  # --------------------------------------------------------------- Client ---
  def start_link() do
    args = %{channel: "vocaltrance", current_song: %{}, channel_names: channel_names()}
    :gen_statem.start_link({:local, @name}, @name, args, [])
  end

  def get_current_song(), do: :gen_statem.call(@name, :current_song)
  def get_channel_names(), do: channel_names()
  def set_channel(name), do: :gen_statem.cast(@name, {:set_channel, name})

  defp channel_names do
    case :persistent_term.get({__MODULE__, :channel_names}, :not_loaded) do
      :not_loaded ->
        names = load_channel_names()
        :persistent_term.put({__MODULE__, :channel_names}, names)
        names

      names ->
        names
    end
  end

  defp load_channel_names do
    path = Application.app_dir(:audio, "priv/#{@channels_filename}")

    case File.read(path) do
      {:ok, contents} ->
        contents
        |> String.split(~r/\s+/, trim: true)

      {:error, reason} ->
        Logger.warning("failed to load di.fm channels: #{inspect(reason)}")
        []
    end
  end

  defp get_asset_url(id) do
    case @http_client.get("/v1/di/tracks/#{id}", base_url: @audio_addict_base_url) do
      {:ok, %Req.Response{status: 200, body: %{"asset_url" => asset_url}}} ->
        "https:" <> asset_url

      _ ->
        nil
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
  def handle_event(:cast, {:set_channel, name}, _state, data) do
    if name in data.channel_names do
      Logger.info("changing to #{name}")

      new_data = %{data | channel: name}
      actions = [{:state_timeout, 0, :refresh_timer}]
      {:keep_state, new_data, actions}
    else
      :keep_state_and_data
    end
  end

  #
  # REFRESH TIMER
  #
  def handle_event(:state_timeout, :refresh_timer, _state, data) do
    with {:ok, %Req.Response{status: 200, body: body1}} <-
           @http_client.get("/v1/di/currently_playing", base_url: @audio_addict_base_url),
         {:ok, %Req.Response{status: 200, body: body2}} <-
           @http_client.get("/v1/radiotunes/currently_playing", base_url: @audio_addict_base_url),
         current_song when is_map(current_song) <-
           Enum.find(body1 ++ body2, &(&1["channel_key"] == data.channel)),
         %{"track" => track} <- current_song,
         %{"start_time" => start_time, "duration" => duration} <- track,
         {:ok, started_at, _tz} <- DateTime.from_iso8601(start_time) do
      Logger.debug("current song: #{inspect(current_song)}")

      asset_url = get_asset_url(track["id"]) || current_song["channel_key"]
      current_song = put_in(current_song["track"]["album_art"], asset_url)

      diff =
        started_at
        |> DateTime.add(round(10 + duration))
        |> DateTime.diff(DateTime.utc_now())
        |> abs()

      diff = if diff < 10, do: 2, else: diff

      Logger.info("sleeping for #{diff} seconds...")

      if diff > 10, do: Audio.difm_changed(current_song)

      new_data = %{data | current_song: current_song}
      actions = [{:state_timeout, diff * 1_000, :refresh_timer}]
      {:keep_state, new_data, actions}
    else
      {:error, reason} ->
        Logger.warning("failed to refresh di.fm: #{inspect(reason)}")
        :keep_state_and_data

      nil ->
        :keep_state_and_data

      _ ->
        :keep_state_and_data
    end
  end
end
