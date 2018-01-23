// JS modules
require('forkit/js/forkit');
import Side from './controller/side.js';
import Character from './model/Character.js';
import MenuElement from './model/MenuElement.js';
// CSS
import '../css/character.css';
import '../css/forkit.css';
import '../css/forkit-curtain.css';
import '../css/style.css';

var sideDom = $('.button-collapse');
var side = new Side(sideDom);
window.side = side;

var character = new Character();
window.pato = character;

function onLoaded() {
  character.onLoaded();
}
window.addEventListener('load', onLoaded);
