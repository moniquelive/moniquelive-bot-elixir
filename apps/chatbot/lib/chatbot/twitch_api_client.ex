defmodule Chatbot.TwitchApiClient do
  @moduledoc false

  @callback get_users(String.t()) :: {:ok, list()} | {:error, term()}
  @callback get_user_follows(String.t(), String.t()) :: {:ok, list()} | {:error, term()}
  @callback get_channel_information(String.t()) :: {:ok, map()} | {:error, term()}
  @callback modify_channel_information(String.t(), String.t(), String.t()) ::
              :ok | {:error, term()}
end

defmodule Chatbot.TwitchApiClient.Scrapped do
  @moduledoc false

  @behaviour Chatbot.TwitchApiClient

  @impl true
  def get_users(login) do
    with {_status, %{body: body}} <- TwitchApi.Users.GetUsers.call(%{login: login}),
         {:ok, %{"data" => data}} <- Jason.decode(body) do
      {:ok, data}
    else
      _ -> {:error, :invalid_response}
    end
  end

  @impl true
  def get_user_follows(from_id, to_id) do
    with {_status, %{body: body}} <-
           TwitchApi.Users.GetUsersFollows.call(%{from_id: from_id, to_id: to_id}),
         {:ok, %{"data" => data}} <- Jason.decode(body) do
      {:ok, data}
    else
      _ -> {:error, :invalid_response}
    end
  end

  @impl true
  def get_channel_information(broadcaster_id) do
    with {_status, %{body: body}} <-
           TwitchApi.Channels.GetChannelInformation.call(%{broadcaster_id: broadcaster_id}),
         {:ok, %{"data" => [info | _]}} <- Jason.decode(body) do
      {:ok, info}
    else
      _ -> {:error, :invalid_response}
    end
  end

  @impl true
  def modify_channel_information(broadcaster_id, user_id, title) do
    case TwitchApi.Channels.ModifyChannelInformation.call(
           %{broadcaster_id: broadcaster_id},
           %{user_id: user_id},
           Jason.encode!(%{"title" => title})
         ) do
      {_status, _} -> :ok
      _ -> {:error, :invalid_response}
    end
  end
end
