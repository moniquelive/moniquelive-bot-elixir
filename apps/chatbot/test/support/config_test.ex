defmodule Chatbot.Config.Test do
  @moduledoc false

  @config_key {__MODULE__, :config}

  def reset do
    :persistent_term.put(@config_key, default_config())
  end

  def set_config(config) when is_map(config) do
    :persistent_term.put(@config_key, Map.merge(default_config(), config))
  end

  def ignored do
    config()
    |> Map.get("ignored_commands", [])
  end

  def commands do
    config()
    |> Map.get("commands", [])
    |> Enum.sort_by(& &1["actions"])
  end

  defp config do
    :persistent_term.get(@config_key, default_config())
  end

  defp default_config, do: %{"ignored_commands" => [], "commands" => []}
end
