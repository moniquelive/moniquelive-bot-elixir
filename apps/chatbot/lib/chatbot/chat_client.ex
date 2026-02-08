defmodule Chatbot.ChatClient do
  @moduledoc false

  @callback say(String.t(), String.t()) :: :ok | term()
end

defmodule Chatbot.ChatClient.TMI do
  @moduledoc false

  @behaviour Chatbot.ChatClient

  @impl true
  def say(channel, message) do
    Chatbot.Bot.say(channel, message)
    :ok
  end
end
