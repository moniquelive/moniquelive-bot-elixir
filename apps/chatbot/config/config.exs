import Config

config :chatbot, :environment, config_env()

config :elixir, :time_zone_database, Tzdata.TimeZoneDatabase

config :scrapped_twitch_api,
  default_adapter: "https://dev.twitch.tv/docs/api/reference",
  access_token_scopes: ~w(user:read:email channel:manage:broadcast user:manage:chat_color),
  callback_protocol: :http,
  callback_uri: "localhost",
  callback_port: 8090

import_config "#{config_env()}.exs"
