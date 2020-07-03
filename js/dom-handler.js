import Store from "./store.js";

export default class DOMHandler {
  constructor() {
    this.__store = new Store();
  }

  updateElementsStatesFromStore() {
    if (!this.__store.hasItems()) return;

    let charts = this.__store.getAll();
    charts.forEach((chart) => {
      let { id, width, height, x, y } = chart,
        chartElement = this.selectElementById(id);
      chartElement.style.width = width;
      chartElement.style.height = height;

      chartElement.style.left = `${x}px`;
      chartElement.style.top = `${y}px`;
    });
  }

  makeElementsMoveable() {
    let charts = document.querySelectorAll(".chart__item");
    charts.forEach((chart) => {
      const moveable = new Moveable(document.body, {
        target: this.selectElementById(chart.id),
        draggable: true,
        resizable: true,
        renderDirections: ["e", "w"],
      });
      moveable
        .on("drag", ({ target, left, top }) => {
          target.style.left = `${left}px`;
          target.style.top = `${top}px`;

          console.log(left, top)
          this.__store.updateStoredItemWithData(chart.id, {
            x: left,
            y: top,
          });
        })

      moveable
        .on("resize", ({ target, width, height, delta }) => {
          delta[0] && (target.style.width = `${width}px`);
          delta[1] && (target.style.height = `${height}px`);
        })
        .on("resizeEnd", ({ target }) => {
          this.__store.updateStoredItemWithData(chart.id, {
            width: target.style.width,
            height: target.style.height,
          });
        });
    });
  }

  selectElementById(id) {
    return document.getElementById(id);
  }
}
