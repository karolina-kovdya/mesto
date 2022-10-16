export default class Popup {
  #popup;
  #buttonClose;

  constructor(popupSelector) {
    this.#popup = document.querySelector(popupSelector);
    this.#buttonClose = this.#popup.querySelector(".popup__close");
  }

  #handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  #handleOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  open() {
    this.#popup.classList.add("popup_opened");
    document.addEventListener("keydown", this.#handleEscClose);
  }

  close() {
    this.#popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this.#handleEscClose);
  }

  setEventListeners() {
    this.#buttonClose.addEventListener("click", () => {
      this.close();
    });

    this.#popup.addEventListener("click", this.#handleOverlayClose);
  }
}
