import Config

config :chatbot,
  watch_commands: false,
  chat_client: Chatbot.ChatClient.Test,
  http_client: Chatbot.HttpClient.Test,
  commands_config: Chatbot.Config.Test,
  twitch_api_client: Chatbot.TwitchApiClient.Test,
  tts_timeout_ms: 1_000,
  tts_max_retries: 0

config :scrapped_twitch_api,
  callback_port: 18_090
