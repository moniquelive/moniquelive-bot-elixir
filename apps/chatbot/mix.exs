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
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger, :spotify_ex],
      mod: {Chatbot.Application, []}
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:tzdata, "~> 1.1"},
      {:credo, "~> 1.6", only: [:dev, :test], runtime: false},
      {:jason, "~> 1.2"},
      {:file_system, "~> 0.2.10"},
      {:tmi, git: "git@github.com:moniquelive/tmi.ex.git", branch: :main},
      {:scrapped_twitch_api,
       only: [:dev, :prod],
       git: "git@github.com:moniquelive/scrapped_twitch_api.git",
       branch: :main},
      {:spotify_ex, "~> 2.2.1"}
      # {:tmi, "~> 0.5.3"}
      # {:dep_from_hexpm, "~> 0.3.0"},
      # {:dep_from_git, git: "https://github.com/elixir-lang/my_dep.git", tag: "0.1.0"},
      # {:sibling_app_in_umbrella, in_umbrella: true}
    ]
  end
end
