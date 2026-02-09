# WebApp

Phoenix LiveView overlay + Elm front-end for widgets.

## Routes

- `/layer` (Elm overlay)
- `/widget/music` (LiveView music widget)
- `/widget/marquee` (LiveView marquee widget)

## Run locally

From repo root:

- `mix -C apps/web_app assets.setup`
- `mix -C apps/web_app phx.server`

Elm (dev):

- `node apps/web_app/assets/elm/build.js --watch`

## Notes

- Elm source lives in `apps/web_app/assets/elm/src`.
- Compiled Elm output goes to `apps/web_app/assets/js/index.js`.
