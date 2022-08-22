import { Elm } from './Main.elm';
import ElmPhoenixWebSocket  from './elmPhoenixWebSocket';
import { Socket, Presence } from 'phoenix';

const app = Elm.Main.init({
  node: document.getElementById('app')
});

ElmPhoenixWebSocket.init(app.ports, Socket, Presence);

