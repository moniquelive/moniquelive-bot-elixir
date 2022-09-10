defmodule Chatbot.Config do
  @moduledoc false

  use GenServer

  @config_filename "commands.json"

  # Client

  def start_link(state), do: GenServer.start_link(__MODULE__, state, name: __MODULE__)
  def ignored(), do: GenServer.call(__MODULE__, :ignored)
  def commands(), do: GenServer.call(__MODULE__, :commands)

  # Server

  @impl GenServer
  def init(dir) do
    {:ok, watcher_pid} = FileSystem.start_link(dirs: [dir])
    FileSystem.subscribe(watcher_pid)

    {:ok,
     %{
       watcher_pid: watcher_pid,
       config: Path.join(dir, @config_filename) |> parse()
     }}
  end

  @impl GenServer
  def handle_call(:ignored, _from, state),
    do: {:reply, state.config["ignored_commands"], state}

  def handle_call(:commands, _from, state),
    do: {:reply, state.config["commands"] |> Enum.sort_by(& &1["actions"]), state}

  @impl GenServer
  def handle_info(
        {:file_event, watcher_pid, {path, [_, :modified, _]}},
        %{watcher_pid: watcher_pid} = state
      ) do
    if String.ends_with?(path, @config_filename),
      do: {:noreply, %{state | config: path |> parse()}},
      else: {:noreply, state}
  end

  def handle_info(
        {:file_event, watcher_pid, _},
        %{watcher_pid: watcher_pid} = state
      ),
      do: {:noreply, state}

  defp parse(path),
    do:
      path
      |> File.read!()
      |> Jason.decode!()
end
