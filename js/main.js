import Store from "./store.js";
import DOMHandler from "./dom-handler.js";

class Main {
  constructor() {
    this.__store = new Store();
    this.__dom = new DOMHandler();
    this.render = this.render.bind(this);
  }

  render() {
    if (this.__store.hasItems()) {
      this.__dom.updateElementsStatesFromStore();
    }
    this.__dom.makeElementsMoveable();
  }
}

let app = new Main();
window.addEventListener("DOMContentLoaded", app.render);
