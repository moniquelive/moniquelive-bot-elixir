module Main exposing (..)

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



-- MODEL


type alias MarqueeMessage =
    { text : String }


type alias SongInfo =
    { cover : String
    , title : String
    , artist : String
    }


type alias KeepersSkippers =
    { keepers : List String
    , skippers : List String
    }


type alias Model =
    { phoenix : Phoenix.Model
    , currentSong : SongInfo
    , currentSongStyle : Animation.State
    , keepersStyle : Animation.State
    , skippersStyle : Animation.State
    , marqueeMessage : String
    , marqueeStyle : Animation.State
    , keepersSkippers : KeepersSkippers
    }


init : () -> ( Model, Cmd Msg )
init _ =
    let
        ( phxConfig, cmd ) =
            Phoenix.init Ports.config
                |> Phoenix.setJoinConfig
                    { joinConfig
                        | topic = "chatbot:events"
                        , events =
                            [ "marquee_updated"
                            , "spotify_music_changed"
                            , "keepers_skippers_changed"
                            ]
                    }
                |> Phoenix.join "chatbot:events"

        model =
            { phoenix = phxConfig
            , currentSong = SongInfo "" "" ""
            , currentSongStyle = Animation.styleWith (Animation.spring wobbly) [ Animation.translate (percent 115) (percent 0) ]
            , keepersStyle = Animation.styleWith (Animation.spring wobbly) [ Animation.scale 1 ]
            , skippersStyle = Animation.styleWith (Animation.spring wobbly) [ Animation.scale 1 ]
            , marqueeMessage = ""
            , marqueeStyle = Animation.styleWith (Animation.spring wobbly) [ Animation.translate (percent 0) (percent 125) ]
            , keepersSkippers = KeepersSkippers [] []
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

                newKeepersStyle =
                    Animation.update animMsg model.keepersStyle

                newSkippersStyle =
                    Animation.update animMsg model.skippersStyle

                newMarqueeStyle =
                    Animation.update animMsg model.marqueeStyle
            in
            ( { model
                | currentSongStyle = newCurrentSongStyle
                , marqueeStyle = newMarqueeStyle
                , keepersStyle = newKeepersStyle
                , skippersStyle = newSkippersStyle
              }
            , Cmd.none
            )

        PhoenixMsg subMsg ->
            processPhoenixMsg model subMsg

        _ ->
            ( model, Cmd.none )


processPhoenixMsg : Model -> Phoenix.Msg -> ( Model, Cmd Msg )
processPhoenixMsg model subMsg =
    let
        ( newModel, cmd, phoenixMsg ) =
            Phoenix.update subMsg model.phoenix
                |> Phoenix.updateWith PhoenixMsg model
    in
    case phoenixMsg of
        Phoenix.ChannelEvent _ event payload ->
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
                                    , Animation.to [ Animation.translate (percent 0) (percent 125) ]
                                    , Animation.wait (Time.millisToPosix <| 30 * 1000)
                                    ]
                                ]
                                model.marqueeStyle
                    in
                    ( { model | marqueeMessage = marqueePayload.text, marqueeStyle = newMarqueeStyle }, cmd )

                "spotify_music_changed" ->
                    let
                        songPayload =
                            case D.decodeValue songInfoDecoder payload of
                                Ok musicInfo ->
                                    musicInfo

                                Err _ ->
                                    SongInfo "" "erro" "erro"

                        newCurrentSongStyle =
                            Animation.interrupt
                                [ Animation.to [ Animation.translate (percent 0) (percent 0) ]
                                , Animation.wait (Time.millisToPosix <| 8 * 1000)
                                , Animation.to [ Animation.translate (percent 115) (percent 0) ]
                                ]
                                model.currentSongStyle
                    in
                    ( { newModel | currentSong = songPayload, currentSongStyle = newCurrentSongStyle }, cmd )

                "keepers_skippers_changed" ->
                    let
                        newKeepersSkippers =
                            case D.decodeValue keepersSkippersDecoder payload of
                                Ok keepersSkippers ->
                                    keepersSkippers

                                Err _ ->
                                    KeepersSkippers [] []

                        keepersChanged =
                            List.length model.keepersSkippers.keepers /= List.length newKeepersSkippers.keepers

                        skippersChanged =
                            List.length model.keepersSkippers.skippers /= List.length newKeepersSkippers.skippers

                        newKeepersStyle =
                            if keepersChanged then
                                Animation.interrupt
                                    [ Animation.set [ Animation.scale 10 ]
                                    , Animation.to [ Animation.scale 1 ]
                                    ]
                                    model.keepersStyle

                            else
                                model.keepersStyle

                        newSkippersStyle =
                            if skippersChanged then
                                Animation.interrupt
                                    [ Animation.set [ Animation.scale 10 ]
                                    , Animation.to [ Animation.scale 1 ]
                                    ]
                                    model.skippersStyle

                            else
                                model.skippersStyle
                    in
                    ( { newModel
                        | keepersSkippers = newKeepersSkippers
                        , keepersStyle = newKeepersStyle
                        , skippersStyle = newSkippersStyle
                      }
                    , cmd
                    )

                _ ->
                    ( newModel, cmd )

        _ ->
            ( newModel, cmd )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Animation.subscription Animate
            [ model.currentSongStyle
            , model.keepersStyle
            , model.skippersStyle
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


keepersSkippersView : Model -> List (Html Msg)
keepersSkippersView model =
    let
        keepersCount =
            model.keepersSkippers.keepers
                |> List.length
                |> String.fromInt

        skippersCount =
            model.keepersSkippers.skippers
                |> List.length
                |> String.fromInt
    in
    [ text (model.currentSong.title ++ " 🔉️ ")
    , div (Animation.render model.skippersStyle ++ [ style "color" "red", style "display" "inline-block" ]) [ skippersCount |> text ]
    , text " x "
    , div (Animation.render model.keepersStyle ++ [ style "color" "green", style "display" "inline-block" ]) [ keepersCount |> text ]
    ]


view : Model -> Html Msg
view model =
    div [ id "root" ]
        [ div
            (Animation.render model.currentSongStyle
                ++ [ class "main" ]
            )
            (songInfoView model.currentSong)
        , h1 [] (keepersSkippersView model)
        , node "marquee"
            (Animation.render model.marqueeStyle
                ++ [ style "z-index" "-9999", attribute "scrolldelay" "60" ]
            )
            [ text model.marqueeMessage ]
        ]



-- JSON decode


marqueeMessageDecoder : D.Decoder MarqueeMessage
marqueeMessageDecoder =
    D.map MarqueeMessage
        (D.field "text" D.string)


songInfoDecoder : D.Decoder SongInfo
songInfoDecoder =
    D.map3 SongInfo
        (D.field "imgUrl" D.string)
        (D.field "title" D.string)
        (D.field "artist" D.string)


keepersSkippersDecoder : D.Decoder KeepersSkippers
keepersSkippersDecoder =
    D.map2 KeepersSkippers
        (D.field "keepers" (D.list D.string))
        (D.field "skippers" (D.list D.string))
