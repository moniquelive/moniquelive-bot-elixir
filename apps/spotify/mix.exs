defmodule Spotify.MixProject do
  use Mix.Project

  def project do
    [
      app: :spotify,
      version: "0.1.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.13",
      aliases: aliases(),
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger, :spotify_ex],
      mod: {Spotify.Application, []}
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:phoenix, "~> 1.6.11"},
      {:spotify_ex, "~> 2.2.1"},
      {:web_app, in_umbrella: true}
    ]
  end

  defp aliases do
    [
      test: "test --no-start"
    ]
  end
end
