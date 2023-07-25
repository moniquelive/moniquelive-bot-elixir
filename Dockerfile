FROM elixir:1.13.4-alpine as builder
RUN apk --update add git npm

WORKDIR /app

RUN mix do local.hex --force, local.rebar --force

COPY config/ /app/config/
COPY mix.* /app/

COPY apps/chatbot/mix.exs /app/apps/chatbot/
COPY apps/spotify/mix.exs /app/apps/spotify/
COPY apps/web_app/mix.exs /app/apps/web_app/

COPY apps/chatbot/config/*.exs /app/apps/chatbot/config/
COPY apps/spotify/config/*.exs /app/apps/spotify/config/
COPY apps/spotify/config/.spotify_refresh_token /app/apps/spotify/config/.spotify_refresh_token
COPY apps/spotify/config/.spotify_client_id /app/apps/spotify/config/.spotify_client_id
COPY apps/spotify/config/.spotify_client_secret /app/apps/spotify/config/.spotify_client_secret
COPY apps/web_app/config/*.exs /app/apps/web_app/config/

ENV MIX_ENV=prod
RUN mix do deps.get --only $MIX_ENV, deps.update scrapped_twitch_api, deps.compile

COPY . /app/

ARG TWITCH_TMI_OAUTH
ENV TWITCH_TMI_OAUTH=$TWITCH_TMI_OAUTH

WORKDIR /app/apps/web_app
RUN mix compile
RUN mix assets.deploy
# RUN npm install --prefix ./assets
# RUN npm run deploy --prefix ./assets
# RUN mix phx.digest

WORKDIR /app
RUN mix release

########################################################################

#FROM debian:stable-slim
FROM alpine:3.18
RUN apk upgrade --update-cache --available && \
    apk add openssl ncurses inotify-tools && \
    rm -rf /var/cache/apk/*

EXPOSE 4000
ENV PORT=4000 \
    SHELL=/bin/bash

WORKDIR /app
COPY --from=builder app/_build/prod/rel/default .
COPY --from=builder app/apps/chatbot/commands.json apps/chatbot/commands.json

CMD ["bin/default", "start"]
