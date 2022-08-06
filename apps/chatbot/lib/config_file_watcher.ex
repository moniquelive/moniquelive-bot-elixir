defmodule ConfigFileWatcher do
  use GenServer

  @config_filename "commands.json"

  # Client

  def start_link(state) do
    GenServer.start_link(__MODULE__, state, name: __MODULE__)
  end

  def config(), do: GenServer.call(__MODULE__, :config)

  # Server

  @impl true
  def init([dirs: [dir]] = args) do
    {:ok, watcher_pid} = FileSystem.start_link(args)
    FileSystem.subscribe(watcher_pid)
    {:ok, %{watcher_pid: watcher_pid, config: parse(Path.join(dir, @config_filename))}}
  end

  @impl true
  def handle_call(:config, _from, state) do
    {:reply, state.config, state}
  end

  @impl true
  def handle_info(
        {:file_event, watcher_pid, {path, [_, :modified, _]}},
        %{watcher_pid: watcher_pid} = state
      ) do
    with true <- String.ends_with?(path, @config_filename) do
      {:noreply, %{state | config: parse(path)}}
    else
      _ -> {:noreply, state}
    end
  end

  @impl true
  def handle_info({:file_event, watcher_pid, _}, %{watcher_pid: watcher_pid} = state),
    do: {:noreply, state}

  defp parse(path), do: path |> File.read!() |> Jason.decode!(keys: :atoms)
end
