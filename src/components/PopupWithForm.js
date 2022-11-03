import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  #handleSubmitForm;
  #popupForm;
  #inputList;
  #formValues;
  #buttonSubmit;

  constructor(popupSelector, { handleSubmitForm }) {
    super(popupSelector);
    this.#handleSubmitForm = handleSubmitForm;
    this.#popupForm = this._popup.querySelector(".form");
    this.#buttonSubmit = this.#popupForm.querySelector(".form__button-submit")
    this.#inputList = this.#popupForm.querySelectorAll(".form__input");
  }

  #getInputValues() {
    this.#formValues = {};
    this.#inputList.forEach(input => {
        this.#formValues[input.name] = input.value;
    });    
    return this.#formValues;
}

  loading(isLoad) {
   if(isLoad) {
    this.#buttonSubmit.textContent = "Сохранение..."
   } else {
    this.#buttonSubmit.textContent = "Сохранить"
   }
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
