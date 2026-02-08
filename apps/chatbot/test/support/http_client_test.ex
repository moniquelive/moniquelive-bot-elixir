defmodule Chatbot.HttpClient.Test do
  @moduledoc false

  @behaviour Chatbot.HttpClient

  @responses_key {__MODULE__, :responses}
  @calls_key {__MODULE__, :calls}
  @owner_key {__MODULE__, :owner}

  def reset do
    :persistent_term.put(@responses_key, %{})
    :persistent_term.put(@calls_key, [])
    :persistent_term.put(@owner_key, nil)
  end

  def set_owner(pid), do: :persistent_term.put(@owner_key, pid)

  def put_response(url, response) do
    responses = :persistent_term.get(@responses_key, %{})
    :persistent_term.put(@responses_key, Map.put(responses, url, response))
  end

  def calls do
    :persistent_term.get(@calls_key, [])
  end

  @impl true
  def post(url, opts) do
    record_call({:post, url, opts})

    owner = :persistent_term.get(@owner_key, nil) || self()
    send(owner, {:http_post, url, opts})

    case :persistent_term.get(@responses_key, %{}) do
      %{^url => response} -> response
      _ -> {:error, :not_found}
    end
  end

  defp record_call(call) do
    calls = :persistent_term.get(@calls_key, [])
    :persistent_term.put(@calls_key, [call | calls])
  end
end
