defmodule Chatbot.ChatClient.Test do
  @moduledoc false

  @behaviour Chatbot.ChatClient

  @calls_key {__MODULE__, :calls}
  @owner_key {__MODULE__, :owner}

  def reset do
    :persistent_term.put(@calls_key, [])
    :persistent_term.put(@owner_key, nil)
  end

  def set_owner(pid), do: :persistent_term.put(@owner_key, pid)

  def calls do
    :persistent_term.get(@calls_key, [])
  end

  @impl true
  def say(channel, message) do
    record_call({:say, channel, message})

    owner = :persistent_term.get(@owner_key, nil) || self()
    send(owner, {:chat_say, channel, message})
    :ok
  end

  defp record_call(call) do
    calls = :persistent_term.get(@calls_key, [])
    :persistent_term.put(@calls_key, [call | calls])
  end
end
