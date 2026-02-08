import Config

config :chatbot, :environment, config_env()

config :chatbot, :watch_commands, config_env() != :prod
config :chatbot, :chat_client, Chatbot.ChatClient.TMI
config :chatbot, :http_client, Chatbot.HttpClient.Req
config :chatbot, :commands_config, Chatbot.Config
config :chatbot, :twitch_api_client, Chatbot.TwitchApiClient.Scrapped
config :chatbot, :tts_timeout_ms, 15_000
config :chatbot, :tts_max_retries, 2

config :elixir, :time_zone_database, Tzdata.TimeZoneDatabase

config :chatbot, :eleven_labs_api_key, System.get_env("ELEVEN_LABS_API_KEY")

config :scrapped_twitch_api,
  default_adapter: "https://dev.twitch.tv/docs/api/reference",
  access_token_scopes: ~w(user:read:email channel:manage:broadcast user:manage:chat_color),
  callback_protocol: :http,
  callback_uri: "localhost",
  callback_port: 8090

import_config "#{config_env()}.exs"
