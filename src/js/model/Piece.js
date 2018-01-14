import Observable from '../Observable';

export default class Piece extends Observable {
  constructor(name, properties = {}) {
    super();
    this.name = name;
    this.properties = properties;
    this.index = 0;
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
