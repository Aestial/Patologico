// JS modules
import Snap from 'snapsvg';
import Piece from './model/Piece.js';
// CSS
require('!style-loader!css-loader!../css/style.css');
// require('!style-loader!css-loader!../fonts/myfrida/font.css');

var colors = require('./colors.js');
var types = require('./ElementTypes.js');
var shirt = {},
  tie = {},
  rombos = {},
  back = {};

shirt.name = "Shirt";
tie.name = "Tie";
rombos.name = "Rombos";
back.name = "Back";

shirt.index = 0;
tie.index = 0;
rombos.index = 0;
back.index = 0;

shirt.colors = colors.shirt;
tie.colors = colors.tie;
rombos.colors = colors.tie;
back.colors = colors.background;

window.onload = function() {
  // Find pato
  var pato = Snap("#pato");
  var top = pato.g();
  // Pato elements:
  shirt.svg = pato.select("#shirt");
  tie.svg = pato.select("#tie");
  rombos.svg = pato.select("#rombos");
  back.svg = document.body;
  // Icons
  Snap.load("./svg/Camisa.svg", function(f) {
    var root = f.select("#root");
    root.transform('t750,100');
    top.add(root);
  });
  Snap.load("./svg/Corbata.svg", function(f) {
    var root = f.select("#root");
    root.transform('t785,250');
    top.add(root);
  });
  Snap.load("./svg/Rombo.svg", function(f) {
    var root = f.select("#root");
    root.transform('t765,400');
    top.add(root);
  });
  // Buttons
  Snap.load("./svg/FlechaIzq.svg", function(f) {
    var root = f.select("#root");

    var shirt_but = root.clone();
    shirt_but.click(function() {
      ArrowAction(shirt, -1, types.Root);
    });
    shirt_but.transform('t680 130 s0.6 0.6');
    top.add(shirt_but);

    var tie_but = root.clone();
    tie_but.click(function() {
      ArrowAction(tie, -1, types.Root);
    });
    tie_but.transform('t680 280 s0.6 0.6');
    top.add(tie_but);

    var rombos_but = root.clone();
    rombos_but.click(function() {
      ArrowAction(rombos, -1, types.Children);
    });
    rombos_but.transform('t680 420 s0.6 0.6');
    top.add(rombos_but);

    var back_but = root.clone();
    back_but.click(function() {
      ArrowAction(back, -1, types.Background);
    });
    back_but.transform('t740 530 s0.6 0.6');
    top.add(back_but);
  });
  Snap.load("./svg/FlechaDer.svg", function(f) {
    var root = f.select("#root");

    var shirt_but = root.clone();
    shirt_but.click(function() {
      ArrowAction(shirt, 1, types.Root);
    });
    shirt_but.transform('t875 130 s0.6 0.6');
    top.add(shirt_but);

    var tie_but = root.clone();
    tie_but.click(function() {
      ArrowAction(tie, 1, types.Root);
    });
    tie_but.transform('t875 280 s0.6 0.6');
    top.add(tie_but);

    var rombos_but = root.clone();
    rombos_but.click(function() {
      ArrowAction(rombos, 1, types.Children);
    });
    rombos_but.transform('t875 420 s0.6 0.6');
    top.add(rombos_but);

    var back_but = root.clone();
    back_but.click(function() {
      ArrowAction(back, 1, types.Background);
    });
    back_but.transform('t820 530 s0.6 0.6');
    top.add(back_but);
  });
};

var ArrowAction = function(obj, dir, type) {
  console.log("Object: " + obj.name + "\nDir: " + ((dir > 0) ? "+1" : "-1"));
  obj.index = obj.index + dir;
  var c = obj.colors[Math.abs(obj.index % obj.colors.length)];
  switch (type) {
    case types.Root:
      obj.svg.attr({
        fill: c
      });
      break;
    case types.Children:
      for (var i = 0; i < obj.svg.children().length; i++) {
        if (obj.svg.children()[i].type == "rect" || obj.svg.children()[i].type == "path")
          obj.svg.children()[i].attr({
            fill: c
          });
      }
      break;
    case types.Background:
      obj.svg.style.backgroundColor = c;
      break;
  }
};
