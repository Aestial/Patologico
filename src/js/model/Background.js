import Piece from './Piece';

export default class Background extends Piece {
  constructor(name, properties) {
    super(name, properties);
    this.className = 'Background';
  }
  updateColor(index) {
    var l = this.colors.length;
    var c = this.colors[Math.abs(index % l)];
    this.svg.style.backgroundColor = c;
  }
}
