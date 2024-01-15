defmodule Audio.KeepersAndSkippers do
  @moduledoc false

  use Agent

  alias Audio.KeepersAndSkippers, as: KS

  defstruct keep_set: MapSet.new(), skip_set: MapSet.new()

  def start_link(_initial_value), do: Agent.start_link(fn -> %KS{} end, name: __MODULE__)

  def reset(), do: Agent.update(__MODULE__, fn _ -> %KS{} end)
  def keepers, do: Agent.get(__MODULE__, & &1.keep_set)
  def skippers, do: Agent.get(__MODULE__, & &1.skip_set)

  def skip(username) do
    username = String.downcase(username)
    Agent.update(__MODULE__, &put_in(&1.skip_set, MapSet.put(&1.skip_set, username)))
  end

  def keep(username) do
    username = String.downcase(username)
    Agent.update(__MODULE__, &put_in(&1.keep_set, MapSet.put(&1.keep_set, username)))
  end

  def broadcast() do
    payload = %{
      keepers: keepers() |> MapSet.to_list(),
      skippers: skippers() |> MapSet.to_list()
    }

    Phoenix.PubSub.broadcast(WebApp.PubSub, "spotify:keepers_and_skippers_changed", payload)
  end

  def skip_response(creds) do
    keep_set = keepers() |> MapSet.to_list() |> Enum.sort()
    skip_set = skippers() |> MapSet.to_list() |> Enum.sort()

    keep_votes = keep_set |> length()
    skip_votes = skip_set |> length()

    if skip_votes - keep_votes >= 5 do
      keep_list = keep_set |> Enum.join(",")
      skip_list = skip_set |> Enum.join(",")

      Spotify.Player.skip_to_next(creds)
      "PULANDO!!!! 💃 (#{skip_list}) X (#{keep_list})"
    else
      "Aaaaa parciais: (vaza: #{skip_votes} X fica: #{keep_votes})"
    end
  end

  def keep_response do
    keep_votes = keepers() |> MapSet.size()
    skip_votes = skippers() |> MapSet.size()
    "kumaPls parciais: (vaza: #{skip_votes} X fica: #{keep_votes})"
  end
end
