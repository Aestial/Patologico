import Observable from '../Observable';

export default class Piece extends Observable {
  constructor(name, colors, properties = {}) {
    super();
    this.name = name;
    this.colors = colors;
    this.properties = properties;
    this.index = Math.floor(Math.random() * this.colors.length);
  }
  setSVG(svg) {
    this.svg = svg;
  }
  updateIndex(dir) {
    console.log("Object: " + this.name);
    console.log("Index: " + this.index + ((dir > 0) ? " +1" : " -1"));
    this.index += dir;
    this.updateColor(this.index);
  }
}
