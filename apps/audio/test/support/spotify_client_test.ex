defmodule Audio.Spotify.Client.Test do
  @moduledoc false

  @behaviour Audio.Spotify.Client

  @responses_key {__MODULE__, :responses}
  @calls_key {__MODULE__, :calls}

  def reset do
    :persistent_term.put(@responses_key, %{})
    :persistent_term.put(@calls_key, [])
  end

  def put_response(key, response) do
    responses = :persistent_term.get(@responses_key, %{})
    :persistent_term.put(@responses_key, Map.put(responses, key, response))
  end

  def calls do
    :persistent_term.get(@calls_key, [])
  end

  @impl true
  def get_currently_playing(_creds) do
    record_call(:get_currently_playing)
    get_response(:get_currently_playing, :ok)
  end

  @impl true
  def refresh(creds) do
    record_call({:refresh, creds})
    get_response(:refresh, {:ok, creds})
  end

  @impl true
  def skip_to_next(creds) do
    record_call({:skip_to_next, creds})
    get_response(:skip_to_next, :ok)
  end

  @impl true
  def enqueue(creds, uri) do
    record_call({:enqueue, creds, uri})
    get_response(:enqueue, :ok)
  end

  @impl true
  def get_track(creds, song_id) do
    record_call({:get_track, creds, song_id})
    get_response(:get_track, {:ok, %{}})
  end

  defp get_response(key, default) do
    :persistent_term.get(@responses_key, %{})
    |> Map.get(key, default)
  end

  defp record_call(call) do
    calls = :persistent_term.get(@calls_key, [])
    :persistent_term.put(@calls_key, [call | calls])
  end
end
