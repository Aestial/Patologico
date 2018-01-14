import Observable from '../Observable';

export default class MenuElement extends Observable {
  constructor(name, piece, properties = {}) {
    super();
    this.name = name;
    this.piece = piece;
    this.properties = properties;
    this.arrows = {};
  }
  setIcon(path, top, transform) {
    this.icon = Snap.load(path, function(f) {
      var root = f.select("#root");
      root.transform(transform);
      top.add(root);
    });
  }
  setLeftArrow(svg, top, transform) {
    this.arrows.left = svg;
    this.arrows.left.transform(transform);
    top.add(this.arrows.left);
  }
  setRightArrow(svg, top, transform) {
    this.arrows.right = svg;
    this.arrows.right.transform(transform);
    top.add(this.arrows.right);
  }
}
