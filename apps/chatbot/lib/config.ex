defmodule Chatbot.Config do
  @moduledoc false

  @name __MODULE__

  use GenServer

  require Logger

  @config_filename "commands.json"
  @default_config %{"ignored_commands" => [], "commands" => []}
  @watch_commands Application.compile_env(:chatbot, :watch_commands, false)

  # Client

  def start_link(args), do: GenServer.start_link(@name, args, name: @name)
  def ignored(), do: GenServer.call(@name, :ignored)
  def commands(), do: GenServer.call(@name, :commands)
  def reload(), do: GenServer.call(@name, :reload)

  # Server

  @impl GenServer
  def init(dir) do
    path = Path.join(dir, @config_filename)
    config = load_config(path)
    state = %{config_path: path, config: config, watcher_pid: nil}

    state =
      if @watch_commands do
        start_watcher(dir, state)
      else
        state
      end

    {:ok, state}
  end

  @impl GenServer
  def handle_call(:ignored, _from, state),
    do: {:reply, Map.get(state.config, "ignored_commands", []), state}

  def handle_call(:commands, _from, state),
    do: {:reply, Map.get(state.config, "commands", []) |> Enum.sort_by(& &1["actions"]), state}

  def handle_call(:reload, _from, state) do
    {:reply, :ok, reload_config(state)}
  end

  @impl GenServer
  def handle_info(
        {:file_event, watcher_pid, {path, [_, :modified, _]}},
        %{watcher_pid: watcher_pid} = state
      ) do
    if String.ends_with?(path, @config_filename),
      do: {:noreply, reload_config(state)},
      else: {:noreply, state}
  end

  def handle_info(
        {:file_event, watcher_pid, _},
        %{watcher_pid: watcher_pid} = state
      ),
      do: {:noreply, state}

  defp start_watcher(dir, state) do
    case Code.ensure_loaded?(FileSystem) do
      true ->
        case FileSystem.start_link(dirs: [dir]) do
          {:ok, watcher_pid} ->
            FileSystem.subscribe(watcher_pid)
            %{state | watcher_pid: watcher_pid}

          {:error, reason} ->
            Logger.warning("failed to start commands watcher: #{inspect(reason)}")
            state
        end

      false ->
        Logger.warning("file_system not available; commands hot reload disabled")
        state
    end
  end

  defp reload_config(state) do
    case parse_config(state.config_path) do
      {:ok, config} ->
        %{state | config: config}

      {:error, reason} ->
        Logger.warning("failed to parse commands.json: #{inspect(reason)}")
        state
    end
  end

  defp load_config(path) do
    case parse_config(path) do
      {:ok, config} ->
        config

      {:error, reason} ->
        Logger.warning("failed to load commands.json: #{inspect(reason)}")
        @default_config
    end
  end

  defp parse_config(path) do
    case File.read(path) do
      {:ok, contents} ->
        case Jason.decode(contents) do
          {:ok, decoded} when is_map(decoded) -> {:ok, Map.merge(@default_config, decoded)}
          {:ok, _} -> {:error, :invalid_format}
          {:error, reason} -> {:error, reason}
        end

      {:error, reason} ->
        {:error, reason}
    end
  end
end
