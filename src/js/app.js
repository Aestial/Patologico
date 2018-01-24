// JS modules
import MobileDetect from 'mobile-detect';
require('forkit/js/forkit');
import Side from './controller/side.js';
import Character from './model/Character.js';
// CSS
import '../css/character.css';
import '../css/forkit.css';
import '../css/forkit-curtain.css';
import '../css/style.css';

var md = new MobileDetect(window.navigator.userAgent);
var isMobile = md.mobile() != null;

var loading = $('#loading-screen');
var safeTimeout = 527;

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

if (isMobile) {
    console.log(md.mobile());
} else {
  window.addEventListener('load', onLoaded);
}
