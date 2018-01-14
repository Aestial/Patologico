import Piece from './Piece';

export default class Parent extends Piece {
  constructor(name, properties) {
    super(name, properties);
    this.className = 'Parent';
  }
  updateColor(index) {
    var l = this.properties.colors.length;
    var c = this.properties.colors[Math.abs(index % l)];
    for (var i = 0; i < this.svg.children().length; i++) {
      if (this.svg.children()[i].type == "rect" || this.svg.children()[i].type == "path")
        this.svg.children()[i].attr({
          fill: c
        });
    }
  }
}
