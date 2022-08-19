import { Elm } from './Main.elm';

const $root = document.createElement('div');
document.body.appendChild($root);

const app = Elm.Main.init({
  node: $root
});
app.ports.playUrl.subscribe(url => (new Audio(url)).play());


