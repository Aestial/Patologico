import Snap from 'snapsvg';

import Root from './Root.js';
import Parent from './Parent.js';
import Background from './Background.js';
// var colors = require('../colors.js');

export default class Character {
  constructor() {
    console.log("Character created!");
    this.colors = require('../colors.js');
    this.shirt = new Root("Shirt", this.colors.shirt);
    this.tie = new Root("Tie", this.colors.tie);
    this.rombos = new Parent("Rombos", this.colors.tie);
    this.back = new Background("Background", this.colors.background);
  }
  shuffle() {
    this.shirt.updateColor(this.shirt.index);
    this.tie.updateColor(this.tie.index);
    this.rombos.updateColor(this.rombos.index);
    this.back.updateColor(this.back.index);
  }
  setSVG() {
    this.shirt.setSVG(this.pato.select("#shirt"));
    this.tie.setSVG(this.pato.select("#tie"));
    this.rombos.setSVG(this.pato.select("#rombos"));
    this.back.setSVG(document.body);
  }
  onLoaded() {
    this.pato = Snap("#pato");
    this.top = this.pato.g();
    this.setSVG();
    this.shuffle();
  }
  option(piece, fwd) {
    console.log("Piece: " + piece + " Forward: " + fwd);
    switch (piece) {
      case 0:
        this.shirt.updateIndex((fwd ? 1 : -1));
        break;
      case 1:
        this.tie.updateIndex((fwd ? 1 : -1));
        break;
      case 2:
        this.rombos.updateIndex((fwd ? 1 : -1));
        break;
      case 3:
        this.back.updateIndex((fwd ? 1 : -1));
        break;
      default:
        break;
    }
  }
}
