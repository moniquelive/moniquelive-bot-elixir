import Config

config :chatbot,
  watch_commands: false,
  chat_client: Chatbot.ChatClient.Stub,
  http_client: Chatbot.HttpClient.Stub,
  commands_config: Chatbot.Config.Stub,
  twitch_api_client: Chatbot.TwitchApiClient.Stub,
  tts_timeout_ms: 1_000,
  tts_max_retries: 0

config :scrapped_twitch_api,
  callback_port: 18_090
