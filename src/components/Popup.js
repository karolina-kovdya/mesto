export default class Popup {
  #buttonClose;

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.#buttonClose = this._popup.querySelector(".popup__close");
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
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this.#handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this.#handleEscClose);
  }

  loading(isLoading) {
    
  }

  setEventListeners() {
    this.#buttonClose.addEventListener("click", () => {
      this.close();
    });

    this._popup.addEventListener("click", this.#handleOverlayClose);
  }
}
