import Config

config :chatbot,
  bots: [
    [
      bot: Chatbot.Bot,
      user: "moniquelive_bot",
      pass: "oauth:xoh4luwe55xabmetacqats3gob8zbt",
      channels: ["moniquelive"],
      debug: false
    ]
  ]
