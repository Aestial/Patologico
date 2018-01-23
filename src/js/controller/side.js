import $ from 'jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import '../../css/side.css';

export default class Side {
  constructor(dom) {
    this.dom = dom;
    this.dom.sideNav();
  }
  toggle(show) {
    var cmd = show ? 'show' : 'hide';
    this.dom.sideNav(cmd);
  }
}
