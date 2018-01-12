// JS modules
import Snap from 'snapsvg';
// CSS
require('!style-loader!css-loader!../css/style.css');
// require('!style-loader!css-loader!../fonts/myfrida/font.css');

var colors = require('./colors.js');
var camisa, corbata, rombos;

var camisa_index = 0;
var corbata_index = 0;
var rombos_index = 0;

window.onload = function () {
  var g = Snap();
  g.attr({
    viewBox: [0, 0, 640, 873]
  });
  var top = g.g();
  Snap.load("./svg/Patologico.svg", function (f) {
    var root = f.select("#root");
    camisa = f.select("#camisa");
    corbata = f.select("#corbata");
    rombos = f.select("#rombos");
    top.add(root);
  });
  Snap.load("./svg/Camisa.svg", function(f) {
    var root = f.select("#root");
    root.transform( 't685,100');
    top.add(root);
  });
  Snap.load("./svg/Corbata.svg", function(f) {
    var root = f.select("#root");
    root.transform( 't715,250');
    top.add(root);
  });
  Snap.load("./svg/FlechaDer.svg", function(f) {
    var root = f.select("#root");
    var action = function () {
      camisa_index++;
      var clenght = colors.camisa.length;
      var color = colors.camisa[Math.abs(camisa_index%clenght)];
      camisa.attr({fill: color});
    };
    var action2 = function () {
      corbata_index++;
      var clenght = colors.corbata.length;
      var color = colors.corbata[Math.abs(corbata_index%clenght)];
      corbata.attr({fill: color});
    };
    var camisa_but = root.clone();
    camisa_but.click(action);
    camisa_but.transform( 't800 130 s0.6 0.6');
    top.add(camisa_but);
    var corbata_but = root.clone();
    corbata_but.click(action2);
    corbata_but.transform( 't800 280 s0.6 0.6');
    top.add(corbata_but);
  });
  Snap.load("./svg/FlechaIzq.svg", function(f) {
    var root = f.select("#root");
    var action = function () {
      camisa_index--;
      var clenght = colors.camisa.length;
      var color = colors.camisa[Math.abs(camisa_index%clenght)];
      camisa.attr({fill: color});
    };
    var action2 = function () {
      rombos_index++;
      var clenght = colors.corbata.length;
      var color = colors.corbata[Math.abs(rombos_index%clenght)];
      for(var i = 0; i < rombos.children().length; i++)
      {
        if (rombos.children()[i].type == "rect" || rombos.children()[i].type == "path")
        {
          rombos.children()[i].attr({fill: color});
        }
      }
    };
    var camisa_but = root.clone();
    camisa_but.click(action);
    camisa_but.transform( 't620 130 s0.6 0.6');
    top.add(camisa_but);
    var corbata_but = root.clone();
    corbata_but.click(action2);
    corbata_but.transform( 't620 280 s0.6 0.6');
    top.add(corbata_but);
  });
};
