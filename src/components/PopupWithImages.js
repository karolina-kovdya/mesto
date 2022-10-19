import Popup from "./Popup.js";

export default class PopupWithImages extends Popup {
  #title;
  #photo;

  constructor(popupSelector) {
    super(popupSelector);
    this.#title = this._popup.querySelector(".popup__subtitle");
    this.#photo = this._popup.querySelector(".popup__image");
  }

  open(data) {
    this.#title.textContent = data.name;
    this.#photo.src = data.link;
    this.#photo.alt = data.name;
    super.open();
  }
}
