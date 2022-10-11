export default class Section {
  #container;
  #renderedItems;
  #renderer;

  constructor({ items, renderer }, containerSelector) {
    this.#renderedItems = items;
    this.#renderer = renderer;
    this.#container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this.#container.prepend(element);
  }

  renderItems() {
    this.#renderedItems.forEach((item) => {
      this.#renderer(item);
    });
  }
}
