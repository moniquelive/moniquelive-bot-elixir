# Chatbot

Twitch chat bot with command handling, TTS, and PubSub events.

## Responsibilities

- Connect to Twitch chat (TMI) and respond to commands.
- Load `commands.json` and hot-reload in dev/test.
- Trigger TTS via ElevenLabs and publish audio to the overlay.
- Broadcast bot events via Phoenix PubSub.

## Configuration

Required env vars:

- `TWITCH_TMI_OAUTH` (TMI auth token)
- `ELEVEN_LABS_API_KEY` (for TTS)

Command config:

- `apps/chatbot/priv/commands.json` defines commands, responses, and logs.
- Hot reload is enabled in dev/test and disabled in prod.

## Running locally

From repo root:

- `mix -C apps/chatbot deps.get`
- `mix -C apps/chatbot iex -S mix`

The bot process is started by the application supervisor.
