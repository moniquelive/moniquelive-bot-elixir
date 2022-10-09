defmodule Chatbot.State.User do
  @moduledoc false

  @derive Inspect
  @enforce_keys [:online_at]
  defstruct online_at: nil, urls: MapSet.new()

  def add_url(user, url) do
    %__MODULE__{user | urls: MapSet.put(user.urls, url)}
  end
end
