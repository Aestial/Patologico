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

// if (isMobile) {
//     console.log(md.mobile());
// } else {
// }

window.addEventListener('load', onLoaded);

function touchstart(e) {
    e.preventDefault();
}

function touchmove(e) {
    e.preventDefault();
}
//
// if (isMobile) {
//   console.log(md.mobile());
//   document.addEventListener('touchstart', this.touchstart);
//   document.addEventListener('touchmove', this.touchmove);
//   $('html, body').css({
//     overflow: 'hidden',
//     height: '100%',
//     width: '100%'
//   });
// } else {
//   window.addEventListener('load', onLoaded);
// }
