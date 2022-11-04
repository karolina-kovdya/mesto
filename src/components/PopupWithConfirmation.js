import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  #popupForm;
  #submitDelete;


  constructor(popupSelector) {
    super(popupSelector);
    this.#popupForm = this._popup.querySelector(".form");
  }

  setSubmitDelete(callBack) {
    this.#submitDelete = callBack;
  }

  setEventListeners() {
    super.setEventListeners();

    this.#popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this.#submitDelete();
    });
  }
}
