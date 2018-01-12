import Observable from '../Observable';

export default class Piece extends Observable {
  constructor(name, properties = {}) {
    super();
    this.name = name;
    this.properties = properties;
  }
}
