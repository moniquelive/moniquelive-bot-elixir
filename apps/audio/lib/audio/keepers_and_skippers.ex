defmodule Audio.KeepersAndSkippers do
  @moduledoc false

  @name __MODULE__

  @spotify_client Application.compile_env(:audio, :spotify_client, Audio.Spotify.Client.SpotifyEx)

  use Agent

  alias Audio.KeepersAndSkippers, as: KS

  defstruct keep_set: MapSet.new(), skip_set: MapSet.new()

  def start_link(opts \\ []) do
    opts = Keyword.put_new(opts, :name, @name)
    Agent.start_link(fn -> %KS{} end, opts)
  end

  def reset(name \\ @name), do: Agent.update(name, fn _ -> %KS{} end)
  def keepers(name \\ @name), do: Agent.get(name, & &1.keep_set)
  def skippers(name \\ @name), do: Agent.get(name, & &1.skip_set)

  def skip(username, name \\ @name) do
    username = String.downcase(username)
    Agent.update(name, &put_in(&1.skip_set, MapSet.put(&1.skip_set, username)))
  end

  def keep(username, name \\ @name) do
    username = String.downcase(username)
    Agent.update(name, &put_in(&1.keep_set, MapSet.put(&1.keep_set, username)))
  end

  def broadcast(name \\ @name) do
    payload = %{
      keepers: keepers(name) |> MapSet.to_list(),
      skippers: skippers(name) |> MapSet.to_list()
    }

    Phoenix.PubSub.broadcast(WebApp.PubSub, "spotify:keepers_and_skippers_changed", payload)
  end

  def skip_response(creds, name \\ @name) do
    keep_set = keepers(name) |> MapSet.to_list() |> Enum.sort()
    skip_set = skippers(name) |> MapSet.to_list() |> Enum.sort()

    keep_votes = keep_set |> length()
    skip_votes = skip_set |> length()

    if skip_votes - keep_votes >= 5 do
      keep_list = keep_set |> Enum.join(",")
      skip_list = skip_set |> Enum.join(",")

      @spotify_client.skip_to_next(creds)
      "PULANDO!!!! 💃 (#{skip_list}) X (#{keep_list})"
    else
      "Aaaaa parciais: (vaza: #{skip_votes} X fica: #{keep_votes})"
    end
  end

  def keep_response(name \\ @name) do
    keep_votes = keepers(name) |> MapSet.size()
    skip_votes = skippers(name) |> MapSet.size()
    "kumaPls parciais: (vaza: #{skip_votes} X fica: #{keep_votes})"
  end
end
