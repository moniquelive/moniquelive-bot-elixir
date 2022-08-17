import Config

config :chatbot,
  bots: [
    [
      bot: Chatbot.Bot,
      user: "moniquelive_bot",
      pass: "oauth:xoh4luwe55xabmetacqats3gob8zbt",
      channels: ["moniquelive"],
      capabilities: ['membership', 'tags', 'commands'],
      debug: false
    ]
  ]

config :elixir, :time_zone_database, Tzdata.TimeZoneDatabase
