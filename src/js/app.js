// JS modules
require('forkit/js/forkit');
import Side from './controller/side.js';
import Character from './model/Character.js';
// CSS
import '../css/pato.css';
import '../css/forkit.css';
import '../css/forkit-curtain.css';
import '../css/style.css';

var loading = $('#loading-screen');
var safeTimeout = 1050;

var sideDom = $('.button-collapse');
var side = new Side(sideDom);
window.side = side;

var character = new Character();
window.pato = character;

var onLoaded = function() {
  character.onLoaded();
  setTimeout(function() {
    loading.hide();
  }, safeTimeout);
};

window.addEventListener('load', onLoaded);

function touchstart(e) {
    e.preventDefault();
}

function touchmove(e) {
    e.preventDefault();
}