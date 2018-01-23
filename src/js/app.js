// JS modules
import Snap from 'snapsvg';

// import * as forkit from 'forkit/js/forkit';
require('forkit/js/forkit');
import 'forkit/css/forkit.css';
import 'forkit/css/demo.css';

import Root from './model/Root.js';
import Parent from './model/Parent.js';
import Background from './model/Background.js';
import MenuElement from './model/MenuElement.js';
// CSS
require('../css/style.css');

var colors = require('./colors.js');

// Elements
var shirt = new Root("Shirt", {
  colors: colors.shirt
});
var tie = new Root("Tie", {
  colors: colors.tie
});
var rombos = new Parent("Rombos", {
  colors: colors.tie
});
var back = new Background("Background", {
  colors: colors.background
});

//Menu
var shirt_M = new MenuElement("Shirt", shirt);
var tie_M = new MenuElement("Tie", tie);
var rombos_M = new MenuElement("Rombos", rombos);
var back_M = new MenuElement("Rombos", rombos);

window.addEventListener('load', onLoaded);

function onLoaded() {
  // Find pato
  var pato = Snap("#pato");
  var top = pato.g();
  // Set graphic elements
  shirt.setSVG(pato.select("#shirt"));
  tie.setSVG(pato.select("#tie"));
  rombos.setSVG(pato.select("#rombos"));
  back.setSVG(document.body);
  // Icons
  shirt_M.setIcon("./svg/Camisa.svg", top, 't750,100');
  tie_M.setIcon("./svg/Corbata.svg", top, 't785,250');
  rombos_M.setIcon("./svg/Rombo.svg", top, 't765,400');

  // Buttons
  Snap.load("./svg/FlechaIzq.svg", function(f) {
    var root = f.select("#root");
    shirt_M.setLeftArrow(root.clone(), top, 't680 130 s0.6 0.6');
    shirt_M.arrows.left.click(function() {
      shirt.updateIndex(-1);
    });
    tie_M.setLeftArrow(root.clone(), top, 't680 280 s0.6 0.6');
    tie_M.arrows.left.click(function() {
      tie.updateIndex(-1);
    });
    rombos_M.setLeftArrow(root.clone(), top, 't680 420 s0.6 0.6');
    rombos_M.arrows.left.click(function() {
      rombos.updateIndex(-1);
    });
    back_M.setLeftArrow(root.clone(), top, 't740 530 s0.6 0.6');
    back_M.arrows.left.click(function() {
      back.updateIndex(-1);
    });
  });
  Snap.load("./svg/FlechaDer.svg", function(f) {
    var root = f.select("#root");
    shirt_M.setRightArrow(root.clone(), top, 't875 130 s0.6 0.66');
    shirt_M.arrows.right.click(function() {
      shirt.updateIndex(1);
    });
    tie_M.setRightArrow(root.clone(), top, 't875 280 s0.6 0.6');
    tie_M.arrows.right.click(function() {
      tie.updateIndex(1);
    });
    rombos_M.setRightArrow(root.clone(), top, 't875 420 s0.6 0.6');
    rombos_M.arrows.right.click(function() {
      rombos.updateIndex(1);
    });
    back_M.setRightArrow(root.clone(), top, 't820 530 s0.6 0.6');
    back_M.arrows.right.click(function() {
      back.updateIndex(1);
    });
  });
}
