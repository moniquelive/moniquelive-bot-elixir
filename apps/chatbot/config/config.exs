import Config

config :chatbot,
  bots: [
    [
      bot: Chatbot.Bot,
      user: "moniquelive_bot",
      pass: System.get_env("TWITCH_TMI_OAUTH"),
      channels: ["moniquelive"],
      capabilities: ['membership', 'tags', 'commands'],
      debug: false
    ]
  ]

config :elixir, :time_zone_database, Tzdata.TimeZoneDatabase
