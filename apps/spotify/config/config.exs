import Config

config :spotify_ex,
  user_id: "moniquelive",
  scopes: ~w(user-modify-playback-state user-read-playback-state user-read-currently-playing),
  callback_url: ""

import_config "secret.exs"
