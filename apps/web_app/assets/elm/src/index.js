import { Elm } from "./Main.elm";
import ElmPhoenixWebSocket from "./elmPhoenixWebSocket";
import { Socket, Presence } from "phoenix";

const rootNode = document.getElementById("app");
if (rootNode !== null) {
  const app = Elm.Main.init({ node: rootNode });
  ElmPhoenixWebSocket.init(app.ports, Socket, Presence);
  app.ports.playMP3.subscribe(function(payload) {
    const audio = new Audio("data:audio/mp3;base64," + payload);
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(() => audio.play());
  });
}
