# Audio

Spotify + DI.FM integration for the stream bot.

## Responsibilities

- Poll DI.FM (AudioAddict) and broadcast song changes.
- Track Spotify playback and publish current track information.
- Maintain keep/skip votes and publish updates.

## PubSub events

- `audio:music_changed` → `{:audio, %{title, artist, album_cover_url, is_playing?}}`
- `spotify:keepers_and_skippers_changed` → `%{keepers: [String], skippers: [String]}`

## Runtime notes

- Spotify refresh token is read from config via `spotify_ex` (see `apps/audio/config/config.exs`).
- DI.FM channel list lives in `apps/audio/priv/difm_channels.txt`.
- DI.FM refresh interval is computed from track duration and start time.
