defmodule Chatbot.HttpClient do
  @moduledoc false

  @callback post(String.t(), keyword()) :: {:ok, Req.Response.t()} | {:error, term()}
end

defmodule Chatbot.HttpClient.Req do
  @moduledoc false

  @behaviour Chatbot.HttpClient

  @impl true
  def post(url, opts), do: Req.post(url, opts)
end
