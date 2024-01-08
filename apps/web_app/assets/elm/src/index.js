import { Elm } from "./Main.elm";
import ElmPhoenixWebSocket from "./elmPhoenixWebSocket";
import { Socket, Presence } from "phoenix";

const rootNode = document.getElementById("app");
if (rootNode !== null) {
  const app = Elm.Main.init({ node: rootNode });
  ElmPhoenixWebSocket.init(app.ports, Socket, Presence);
}
