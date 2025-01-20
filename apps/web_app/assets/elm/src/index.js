import { Elm } from "./Main.elm";
import ElmPhoenixWebSocket from "./elmPhoenixWebSocket";
import { Socket, Presence } from "phoenix";

const rootNode = document.getElementById("app");
if (rootNode !== null) {
  const app = Elm.Main.init({ node: rootNode });
  ElmPhoenixWebSocket.init(app.ports, Socket, Presence);
  app.ports.playMP3.subscribe(function(payload) {
    const audio = new Audio({
      src: "data:audio/mp3;base64," + payload,
      volume: 1.0,
    });
    // navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(() => audio.play());
    audio.play();
  });
}
