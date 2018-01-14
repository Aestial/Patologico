import Piece from './Piece';

export default class Root extends Piece {
  constructor(name, properties) {
    super(name, properties);
    this.className = 'Root';
  }
  updateColor(index) {
    var l = this.properties.colors.length;
    var c = this.properties.colors[Math.abs(index % l)];
    this.svg.attr({
      fill: c
    });
  }
}
