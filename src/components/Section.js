export default class Section {
  #container;
  #renderer;

  constructor({ renderer }, containerSelector) {
    this.#renderer = renderer;
    this.#container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this.#container.prepend(element);
  }

  renderItems(items) {
    items.forEach((item) => {
      this.#renderer(item);
    });
  }
}
