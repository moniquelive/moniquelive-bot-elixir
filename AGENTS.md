# AGENTS

This repo is an Elixir umbrella for a Twitch streaming bot and overlay.
Apps talk via Phoenix PubSub and share a small utilities library.

## Repo Map
- **apps/chatbot**: Twitch chat bot (TMI) with command handling, Twitch API calls, TTS, and PubSub events.
- **apps/audio**: Spotify + DI.FM integration, song tracking, skip/keep voting, PubSub events.
- **apps/web_app**: Phoenix LiveView overlay, channels, widgets, Elm front-end.
- **apps/utils**: Shared helpers (word wrap, duration formatting).
- **config/**: Umbrella config; per-app config in apps/*/config.
- **apps/chatbot/commands.json**: Bot commands and responses (hot-reloaded).
- **apps/web_app/assets/elm**: Elm source; compiled JS goes to assets/js/index.js.

## Setup / Build / Run
- `mix deps.get` (root) to fetch deps for all apps.
- `mix -C apps/web_app phx.server` to run the Phoenix server.
- `mix -C apps/web_app assets.setup` to install Tailwind/esbuild.
- `mix -C apps/web_app assets.build` for a dev asset build.
- `mix -C apps/web_app assets.deploy` for production assets + digest.
- `node apps/web_app/assets/elm/build.js --watch` to rebuild Elm -> JS in dev.
- `mix release` (root) builds the umbrella release (web_app is configured).
- If you need to run mix inside an app, prefer `mix -C apps/<app> <task>`.

## Lint / Format
- `mix format` (root) formats Elixir/HEEx using .formatter.exs.
- `mix format --check-formatted` for CI-style checks.
- `mix -C apps/chatbot credo` (lint; credo only in chatbot/web_app).
- `mix -C apps/web_app credo` (lint; phoenix/web_app).
- There is no dedicated JS/Elm linter configured.

## Tests
- `mix test` (root) runs all umbrella tests.
- `mix -C apps/<app> test` runs a single app's suite.
- `mix test apps/<app>/test/foo_test.exs` runs one test file.
- `mix test apps/<app>/test/foo_test.exs:123` runs a single test by line.
- `mix -C apps/<app> test test/foo_test.exs:123` same, from app dir.
- Web app tests use `WebAppWeb.ConnCase` and `WebAppWeb.ChannelCase`.
- Use `async: true` in ExUnit when tests do not share global state.

## Validation
- Always validate changes by running `mix format && mix test` at the repo root.

## Umbrella Conventions
- Each app has its own `mix.exs` and `.formatter.exs`.
- Keep app dependencies in each app; root `mix.exs` has no deps.
- Root `config/config.exs` imports `apps/*/config/config.exs`.
- App names are snake_case atoms, matching `apps/<app>` folder names.
- Releases are configured at root; `web_app` is marked permanent.

## Module Layout
- Start with `@moduledoc` and module attributes (`@name`, constants).
- Follow with `use`, `alias`, `require`, and `@behaviour` declarations.
- Public API functions first, callbacks next, private helpers last.
- Group related functions with doc separators as in `Chatbot.Commands`.
- Keep private helpers `defp` at the bottom.
- Avoid long functions; extract helpers when branching grows.

## Testing Conventions
- Use `ExUnit.Case` with `async: true` when safe.
- Use `doctest` for small pure helpers (see `DurationFormatter` and `Utils`).
- Use `WebAppWeb.ChannelCase`/`ConnCase` for Phoenix tests.
- Start required processes with `start_supervised!` in `setup`.
- Keep test modules named `FooTest` matching the module under test.
- Store shared helpers in `apps/<app>/test/support` and require as needed.

## Frontend Styling (HEEx/Tailwind)
- Prefer Tailwind utility classes; keep inline styles minimal.
- Use component helpers in `WebAppWeb.WebAppComponents` before adding new markup.
- For repeated UI, add a component instead of duplicating markup.
- Keep CSS changes in `apps/web_app/assets/css/app.css` or Tailwind config.
- Update Tailwind `content` paths if you add new template locations.
- Avoid editing vendor files under `apps/web_app/assets/vendor`.

## API Integrations
- Twitch API calls go through `scrapped_twitch_api` or TMI; keep tokens in env.
- Spotify uses `spotify_ex`; refresh token is stored in a local file.
- HTTP calls use `Req`; prefer `Req.new` with base_url and pattern match on response.
- When adding new PubSub events, update both Elixir broadcasters and Elm decoders.
- Keep rate limits in mind; avoid tight polling loops.

## Code Style: Elixir Basics
- **Formatting**: always run `mix format`; HEEx uses Phoenix.LiveView.HTMLFormatter.
- **Modules**: PascalCase; namespace by app (`Chatbot.*`, `Audio.*`, `WebApp*`, `Utils.*`).
- **Files**: snake_case; file name mirrors module.
- **Docs**: internal modules use `@moduledoc false` (common in this repo).
- **Callbacks**: include `@impl true` for behaviour callbacks.
- **Types**: add `@spec` for public functions; use `@type` for structs when helpful.
- **Naming**: predicate functions end with `?`, bang functions end with `!`.
- **Aliases**: prefer `alias Foo.{Bar, Baz}` over multiple alias lines.
- **Imports**: avoid `import` unless needed for macros; prefer `alias` + explicit calls.
- **Pipelines**: use `|>` for linear transforms; use `case`/`with` for branching.
- **Stateful modules**: pattern is `@name __MODULE__` + named `start_link`.
- **Concurrency**: GenServer/Agent/:gen_statem are used; keep timers in `handle_info`.
- **Data**: use `MapSet` for unique sets; update maps with `Map.update`/`put_in`.
- **Structs**: use `@enforce_keys` for required fields (see `Chatbot.User`).
- **Guards**: prefer `defguard` for state checks (see `Audio.Spotify`).
- **Language**: user-facing strings are mostly Portuguese; keep language consistent.

## Code Style: Error Handling & Logging
- Handle external API calls with `case`/`with` returning `{:ok, ...}` or `{:error, ...}`.
- Use bang functions (`File.read!`, `Jason.decode!`) only when failure should crash.
- Log failures with `Logger.error` or `Logger.info`; avoid `IO.inspect` in prod paths.
- Prefer returning friendly strings for chat responses; avoid leaking raw errors to users.
- Keep PubSub topics stable and string-based (e.g., `audio:music_changed`).
- Keep `Code.eval_string` usage scoped to `commands.json` templating only.

## Code Style: Phoenix / LiveView
- Use `WebAppWeb, :controller`, `:channel`, `:live_widget` macros.
- LiveView components should declare `attr`/`slot` and use `~H` templates.
- Use `assign/3` for socket state; avoid direct map updates in LiveView.
- PubSub is the primary bridge between chatbot/audio and web_app.
- Channel event names must match Elm decoders (`music_changed`, `marquee_updated`, `play_tts`).
- Routes of interest: `/layer`, `/widget/music`, `/widget/marquee`.
- Component helpers live in `apps/web_app/lib/web_app_web/components`.

## Chatbot Command Config
- Commands are defined in `apps/chatbot/commands.json`.
- `actions` lists command aliases; `responses` are sent to chat.
- `responses` and `logs` are evaluated as Elixir with `command` and `sender` bindings.
- Keep JSON valid; `Chatbot.Config` hot-reloads on file change via FileSystem.
- Avoid adding untrusted code to `responses` because it is evaluated.

## Event Contracts / PubSub
- `audio:music_changed` broadcasts `{:audio, %{title, artist, album_cover_url, is_playing?}}`.
- `spotify:keepers_and_skippers_changed` broadcasts `%{keepers: [String], skippers: [String]}`.
- `layer:marquee_updated` broadcasts `{:marquee, text}`.
- `rewards:play_tts` broadcasts `{:play_tts, %{mp3: Base64}}`.
- Elm decoders expect keys `title`, `artist`, `album_cover_url`, `text`, `mp3`.
- Update Elm decoders when payload shapes change.

## Code Style: Elm / JS / Assets
- Elm source lives in `apps/web_app/assets/elm/src`.
- `apps/web_app/assets/js/index.js` is generated; do not edit by hand.
- Rebuild Elm with `node apps/web_app/assets/elm/build.js` (use `--watch` for dev).
- Keep Elm ports and Phoenix event payloads in sync with channel pushes.
- JS uses ES modules in `apps/web_app/assets/js`; avoid adding global scripts.
- Tailwind config is `apps/web_app/assets/tailwind.config.js`.
- Generated assets go to `apps/web_app/priv/static`; do not hand-edit.

## Config / Secrets
- Twitch chat bot needs `TWITCH_TMI_OAUTH` env var.
- ElevenLabs TTS uses `ELEVEN_LABS_API_KEY` env var.
- Spotify credentials are read from local files in `apps/audio/config`.
- Files are `.spotify_client_id`, `.spotify_client_secret`, `.spotify_refresh_token`.
- OAuth callback for `scrapped_twitch_api` is `http://localhost:8090` (see README).
- Do not commit secret files or tokens; keep them in local env or gitignored files.

## Editor Rules
- No Cursor or Copilot rule files found (.cursor/rules/, .cursorrules, or .github/copilot-instructions.md).
