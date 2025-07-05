defmodule Audio.MixProject do
  use Mix.Project

  def project do
    [
      app: :audio,
      version: "0.1.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.16",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger],
      mod: {Audio.Application, []}
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:phoenix, "~> 1.7.21"},
      {:httpoison, "~> 1.0"},
      {:spotify_ex, "~> 2.3"},
      {:utils, in_umbrella: true}
    ]
  end
end
