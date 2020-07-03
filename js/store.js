export default class Store {
  //   constructor() {
  //     this.updateStoredItemWithData = this.updateStoredItemWithData.bind(this);
  //   }
  getAll() {
    return JSON.parse(localStorage.getItem("charts")) || [];
  }

  getById(id) {
    let charts = this.getAll();
    return charts.find((chart) => chart.id === id);
  }

  addItemToStore(item) {
    let charts = this.getAll();
    charts.push(item);
    this.saveUpdatedListToStore(charts);
  }

  updateStoredItemWithData(id, data) {
    let itemToBeEdit = this.getById(id);

    if (!itemToBeEdit) {
      let item = {
        id,
        width: data.width || "",
        height: data.height || "",
        x: data.x || "",
        y: data.y || "",
      };
      return this.addItemToStore(item);
    }

    for (let prop in data) {
      itemToBeEdit[prop] = data[prop];
    }
    this.updateStoreWithUpdatedItem(itemToBeEdit);
  }

  updateStoreWithUpdatedItem(item) {
    let charts = this.getAll();
    charts.map((chart, index) => {
      if (chart.id === item.id) {
        charts.splice(index, 1, item);
      }
    });

    this.saveUpdatedListToStore(charts);
  }

  saveUpdatedListToStore(list) {
    localStorage.setItem("charts", JSON.stringify(list));
  }

  hasItems() {
    let charts = JSON.parse(localStorage.getItem("charts")) || [];
    return !!charts.length;
  }

  updateStoredItem(id, dataObject) {}
}
