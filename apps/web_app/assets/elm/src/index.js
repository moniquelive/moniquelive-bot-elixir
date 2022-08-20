import { Elm } from './Main.elm';
import ElmPhoenixWebSocket  from './elmPhoenixWebSocket';
import { Socket, Presence } from 'phoenix';

const $root = document.createElement('div');
document.body.appendChild($root);

const app = Elm.Main.init({
  node: $root
});
app.ports.playUrl.subscribe(url => (new Audio(url)).play());

ElmPhoenixWebSocket.init(app.ports, Socket, Presence);

