import Config

config :spotify_ex,
  user_id: "moniquelive",
  scopes: ~w(user-modify-playback-state user-read-playback-state user-read-currently-playing),
  callback_url: ""

refresh_token =
  ".spotify_refresh_token"
  |> Path.expand(__DIR__)
  |> File.read!()
  |> String.trim()

config :spotify_ex,
  client_id:
    ".spotify_client_id"
    |> Path.expand(__DIR__)
    |> File.read!(),
  secret_key:
    ".spotify_client_secret"
    |> Path.expand(__DIR__)
    |> File.read!(),
  refresh_token: refresh_token

config :spotify, :children, [{SpotifyMonitor, refresh_token}]

import_config "#{config_env()}.exs"
