port module Main exposing (..)

import Animation exposing (percent)
import Animation.Spring.Presets exposing (wobbly)
import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Json.Decode as D
import Phoenix exposing (PhoenixMsg, joinConfig)
import Ports.Phoenix as Ports
import Time



-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }



-- PORTS


port playUrl : String -> Cmd msg


port messageReceiver : (String -> msg) -> Sub msg



-- MODEL


type alias MarqueeMessage =
    { text : String }


type alias WebsocketMessage =
    { action : String
    , payload : String
    }


type alias SongInfo =
    { cover : String
    , title : String
    , artist : String
    }


type alias Model =
    { phoenix : Phoenix.Model
    , currentSong : SongInfo
    , currentSongStyle : Animation.State
    , marqueeMessage : String
    , marqueeStyle : Animation.State
    }


init : () -> ( Model, Cmd Msg )
init _ =
    let
        ( phxConfig, cmd ) =
            Phoenix.init Ports.config
                |> Phoenix.setJoinConfig
                    { joinConfig
                        | topic = "chatbot:events"
                        , events = [ "marquee_updated", "tts_created", "spotify_music_changed" ]
                    }
                |> Phoenix.join "chatbot:events"

        model =
            { phoenix = phxConfig
            , currentSong = SongInfo "" "" ""
            , currentSongStyle = Animation.styleWith (Animation.spring wobbly) [ Animation.translate (percent 115) (percent 0) ]
            , marqueeMessage = ""
            , marqueeStyle = Animation.styleWith (Animation.spring wobbly) [ Animation.translate (percent 0) (percent 100) ]
            }
    in
    ( model, Cmd.map PhoenixMsg cmd )



-- UPDATE


type Msg
    = PhoenixMsg Phoenix.Msg
    | Recv String
    | Animate Animation.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Animate animMsg ->
            let
                newCurrentSongStyle =
                    Animation.update animMsg model.currentSongStyle

                newMarqueeStyle =
                    Animation.update animMsg model.marqueeStyle
            in
            ( { model
                | currentSongStyle = newCurrentSongStyle
                , marqueeStyle = newMarqueeStyle
              }
            , Cmd.none
            )

        PhoenixMsg subMsg ->
            let
                ( newModel, cmd, phoenixMsg ) =
                    Phoenix.update subMsg model.phoenix
                        |> Phoenix.updateWith PhoenixMsg model
            in
            case phoenixMsg of
                Phoenix.ChannelEvent topic event payload ->
                    case event of
                        "marquee_updated" ->
                            let
                                marqueePayload =
                                    case D.decodeValue marqueeMessageDecoder payload of
                                        Ok newText ->
                                            newText

                                        Err err ->
                                            MarqueeMessage (D.errorToString err)

                                newMarqueeStyle =
                                    Animation.interrupt
                                        [ Animation.loop
                                            [ Animation.to [ Animation.translate (percent 0) (percent 0) ]
                                            , Animation.wait (Time.millisToPosix <| 60 * 1000)
                                            , Animation.to [ Animation.translate (percent 0) (percent 100) ]
                                            , Animation.wait (Time.millisToPosix <| 30 * 1000)
                                            ]
                                        ]
                                        model.marqueeStyle
                            in
                            ( { model
                                | marqueeMessage = marqueePayload.text
                                , marqueeStyle = newMarqueeStyle
                              }
                            , cmd
                            )

                        "tts_created" ->
                            let
                                _ =
                                    Debug.log "tts_created" payload
                            in
                            ( newModel, cmd )

                        "spotify_music_changed" ->
                            let
                                _ =
                                    Debug.log "spotify_music_changed" payload
                            in
                            ( newModel, cmd )

                        _ ->
                            let
                                _ =
                                    Debug.log "* topic, event, payload:" ( topic, event, payload )
                            in
                            ( newModel, cmd )

                _ ->
                    ( newModel, cmd )

        Recv message ->
            case D.decodeString websocketMessageDecoder message of
                Ok ws ->
                    case ws.action of
                        "spotify_music_updated" ->
                            case D.decodeString songInfoDecoder ws.payload of
                                Ok song ->
                                    let
                                        newCurrentSongStyle =
                                            Animation.interrupt
                                                [ Animation.to [ Animation.translate (percent 0) (percent 0) ]
                                                , Animation.wait (Time.millisToPosix <| 8 * 1000)
                                                , Animation.to [ Animation.translate (percent 115) (percent 0) ]
                                                ]
                                                model.currentSongStyle
                                    in
                                    ( { model
                                        | currentSong = song
                                        , currentSongStyle = newCurrentSongStyle
                                      }
                                    , Cmd.none
                                    )

                                Err _ ->
                                    ( model, Cmd.none )

                        "tts_created" ->
                            ( model, playUrl ws.payload )

                        _ ->
                            ( model, Cmd.none )

                Err _ ->
                    ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ messageReceiver Recv
        , Animation.subscription Animate
            [ model.currentSongStyle
            , model.marqueeStyle
            ]
        , Sub.map PhoenixMsg <| Phoenix.subscriptions model.phoenix
        ]



-- VIEW


songInfoView : SongInfo -> List (Html Msg)
songInfoView song =
    [ div [ class "cover" ] [ img [ id "coverImg", src song.cover ] [] ]
    , div [ class "container" ]
        [ div [ class "title" ] [ text song.title ]
        , div [ class "artist" ] [ text song.artist ]
        ]
    ]


view : Model -> Html Msg
view model =
    div [ id "root" ]
        [ div
            (Animation.render model.currentSongStyle
                ++ [ class "main" ]
            )
            (songInfoView model.currentSong)
        , node "marquee"
            (Animation.render model.marqueeStyle
                ++ [ attribute "scrolldelay" "60" ]
            )
            [ text model.marqueeMessage ]
        ]



-- JSON decode


marqueeMessageDecoder : D.Decoder MarqueeMessage
marqueeMessageDecoder =
    D.map MarqueeMessage
        (D.field "text" D.string)


websocketMessageDecoder : D.Decoder WebsocketMessage
websocketMessageDecoder =
    D.map2 WebsocketMessage
        (D.field "action" D.string)
        (D.field "payload" D.string)


songInfoDecoder : D.Decoder SongInfo
songInfoDecoder =
    D.map3 SongInfo
        (D.field "imgUrl" D.string)
        (D.field "title" D.string)
        (D.field "artist" D.string)
