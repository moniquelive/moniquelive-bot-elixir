defmodule Chatbot.MixProject do
  use Mix.Project

  def project do
    [
      app: :chatbot,
      version: "0.1.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.13",
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger],
      mod: {Chatbot.Application, []}
    ]
  end

  defp aliases do
    [
      test: "test --no-start",
      "assets.deploy": ["cmd --cd assets node build.js --deploy", "phx.digest"]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:tzdata, "~> 1.1"},
      {:credo, "~> 1.7", only: [:dev, :test], runtime: false},
      {:httpoison, "~> 1.0"},
      {:jason, "~> 1.2"},
      {:file_system, "~> 0.2.10"},
      {:scrapped_twitch_api,
       git: "https://github.com/moniquelive/scrapped_twitch_api.git", branch: "main"},
      # {:tmi, "~> 0.6"},
      {:tmi, github: "tuomohopia/tmi", branch: "otp-26-support"},
      {:audio, in_umbrella: true},
      {:utils, in_umbrella: true}
      # {:dep_from_hexpm, "~> 0.3.0"},
      # {:dep_from_git, git: "https://github.com/elixir-lang/my_dep.git", tag: "0.1.0"},
      # {:sibling_app_in_umbrella, in_umbrella: true}
    ]
  end
end
