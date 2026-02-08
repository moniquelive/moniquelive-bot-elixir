defmodule Audio.HttpClient.Test do
  @moduledoc false

  @behaviour Audio.HttpClient

  @responses_key {__MODULE__, :responses}
  @calls_key {__MODULE__, :calls}

  def reset do
    :persistent_term.put(@responses_key, %{})
    :persistent_term.put(@calls_key, [])
  end

  def put_response(url, response) do
    responses = :persistent_term.get(@responses_key, %{})
    :persistent_term.put(@responses_key, Map.put(responses, url, response))
  end

  def calls do
    :persistent_term.get(@calls_key, [])
  end

  @impl true
  def get(url, _opts) do
    record_call({:get, url})

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
