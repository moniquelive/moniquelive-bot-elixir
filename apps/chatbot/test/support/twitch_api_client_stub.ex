defmodule Chatbot.TwitchApiClient.Stub do
  @moduledoc false

  @behaviour Chatbot.TwitchApiClient

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
  def get_users(login) do
    record_call({:get_users, login})
    get_response(:get_users, {:ok, []})
  end

  @impl true
  def get_user_follows(from_id, to_id) do
    record_call({:get_user_follows, from_id, to_id})
    get_response(:get_user_follows, {:ok, []})
  end

  @impl true
  def get_channel_information(broadcaster_id) do
    record_call({:get_channel_information, broadcaster_id})

    get_response(
      :get_channel_information,
      {:ok, %{"title" => "", "broadcaster_id" => broadcaster_id}}
    )
  end

  @impl true
  def modify_channel_information(broadcaster_id, user_id, title) do
    record_call({:modify_channel_information, broadcaster_id, user_id, title})
    get_response(:modify_channel_information, :ok)
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
