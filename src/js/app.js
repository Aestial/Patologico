// JS modules
import Snap from 'snapsvg';
import Piece from './model/Piece.js';
// CSS
require('!style-loader!css-loader!../css/style.css');
// require('!style-loader!css-loader!../fonts/myfrida/font.css');

var colors = require('./colors.js');
var shirt, tie, rombos;

var shirt_index = 0;
var tie_index = 0;
var rombos_index = 0;
var back_index = 0;

window.onload = function() {
  var g = Snap();
  g.attr({
    viewBox: [0, 0, 640, 873]
  });
  var top = g.g();
  Snap.load("./svg/Patologico.svg", function(f) {
    var root = f.select("#root");
    shirt = f.select("#camisa");
    tie = f.select("#corbata");
    rombos = f.select("#rombos");
    top.add(root);
  });
  Snap.load("./svg/Camisa.svg", function(f) {
    var root = f.select("#root");
    root.transform('t685,100');
    top.add(root);
  });
  Snap.load("./svg/Corbata.svg", function(f) {
    var root = f.select("#root");
    root.transform('t715,250');
    top.add(root);
  });
  Snap.load("./svg/Rombo.svg", function(f) {
    var root = f.select("#root");
    root.transform('t700,420');
    top.add(root);
  });
  Snap.load("./svg/FlechaDer.svg", function(f) {
    var root = f.select("#root");
    var action = function() {
      shirt_index++;
      var clenght = colors.shirt.length;
      var color = colors.shirt[Math.abs(shirt_index % clenght)];
      shirt.attr({
        fill: color
      });
    };
    var action2 = function() {
      tie_index++;
      var clenght = colors.tie.length;
      var color = colors.tie[Math.abs(tie_index % clenght)];
      tie.attr({
        fill: color
      });
    };
    var action3 = function() {
      rombos_index++;
      var clenght = colors.tie.length;
      var color = colors.tie[Math.abs(rombos_index % clenght)];
      for (var i = 0; i < rombos.children().length; i++) {
        if (rombos.children()[i].type == "rect" || rombos.children()[i].type == "path") {
          //console.log(rombos.children()[i].type);
          rombos.children()[i].attr({
            fill: color
          });
        }
      }
    };
    var action4 = function() {
      back_index++;
      var clenght = colors.background.length;
      var color = colors.background[Math.abs(back_index % clenght)];
      document.body.style.backgroundColor = color;
    };
    var shirt_but = root.clone();
    shirt_but.click(action);
    shirt_but.transform('t800 130 s0.6 0.6');
    top.add(shirt_but);
    var tie_but = root.clone();
    tie_but.click(action2);
    tie_but.transform('t800 280 s0.6 0.6');
    top.add(tie_but);
    var rombos_but = root.clone();
    rombos_but.click(action3);
    rombos_but.transform('t800 440 s0.6 0.6');
    top.add(rombos_but);
    var back_but = root.clone();
    back_but.click(action4);
    back_but.transform('t750 580 s0.6 0.6');
    top.add(back_but);
  });
  Snap.load("./svg/FlechaIzq.svg", function(f) {
    var root = f.select("#root");
    var action = function() {
      shirt_index--;
      var clenght = colors.shirt.length;
      var color = colors.shirt[Math.abs(shirt_index % clenght)];
      shirt.attr({
        fill: color
      });
    };
    var action2 = function() {
      tie_index--;
      var clenght = colors.tie.length;
      var color = colors.tie[Math.abs(tie_index % clenght)];
      tie.attr({
        fill: color
      });
    };
    var action3 = function() {
      rombos_index--;
      var clenght = colors.tie.length;
      var color = colors.tie[Math.abs(rombos_index % clenght)];
      for (var i = 0; i < rombos.children().length; i++) {
        if (rombos.children()[i].type == "rect" || rombos.children()[i].type == "path") {
          //console.log(rombos.children()[i].type);
          rombos.children()[i].attr({
            fill: color
          });
        }
      }
    };
    var action4 = function() {
      back_index--;
      var clenght = colors.background.length;
      var color = colors.background[Math.abs(back_index % clenght)];
      document.body.style.backgroundColor = color;
    };
    var shirt_but = root.clone();
    shirt_but.click(action);
    shirt_but.transform('t620 130 s0.6 0.6');
    top.add(shirt_but);
    var tie_but = root.clone();
    tie_but.click(action2);
    tie_but.transform('t620 280 s0.6 0.6');
    top.add(tie_but);
    var rombos_but = root.clone();
    rombos_but.click(action3);
    rombos_but.transform('t620 440 s0.6 0.6');
    top.add(rombos_but);
    var back_but = root.clone();
    back_but.click(action4);
    back_but.transform('t680 580 s0.6 0.6');
    top.add(back_but);
  });
};
