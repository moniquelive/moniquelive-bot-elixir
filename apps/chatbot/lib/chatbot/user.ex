defmodule Chatbot.User do
  @moduledoc false

  @derive Inspect
  @enforce_keys [:online_at]
  defstruct online_at: nil, urls: MapSet.new()

  def add_url(user, url),
    do: update_in(user.urls, &MapSet.put(&1, url))
end
