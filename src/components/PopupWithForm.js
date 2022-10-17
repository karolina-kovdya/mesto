import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  #handleSubmitForm;
  #popupForm;
  #inputList;
  #formValues;
  #popup;

  constructor({ handleSubmitForm }, popupSelector) {
    super(popupSelector);
    this.#handleSubmitForm = handleSubmitForm;
    this.#popup = document.querySelector(popupSelector);
    this.#popupForm = this.#popup.querySelector(".form");
    this.#inputList = this.#popupForm.querySelectorAll(".form__input");
  }

  #getInputValues() {
    this.#formValues = {};
    this.#inputList.forEach(input => {
        this.#formValues[input.name] = input.value;
    });    
    return this.#formValues;
}

  setEventListeners() {
    super.setEventListeners();

    this.#popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this.#handleSubmitForm(this.#getInputValues());

      this.close();
    });
  }

  close() {
    super.close();
    this.#popupForm.reset();
  }
}
