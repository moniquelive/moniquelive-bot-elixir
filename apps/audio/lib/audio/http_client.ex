defmodule Audio.HttpClient do
  @moduledoc false

  @callback get(String.t(), keyword()) :: {:ok, Req.Response.t()} | {:error, term()}
end

defmodule Audio.HttpClient.Req do
  @moduledoc false

  @behaviour Audio.HttpClient

  @impl true
  def get(url, opts), do: Req.get(url, opts)
end
