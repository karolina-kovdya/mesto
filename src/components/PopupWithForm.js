import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  #handleSubmitForm;
  #popupForm;
  #inputList;
  #formValues;
  #buttonSubmit;
  #btnSubmitText;

  constructor(popupSelector, { handleSubmitForm }) {
    super(popupSelector);
    this.#handleSubmitForm = handleSubmitForm;
    this.#popupForm = this._popup.querySelector(".form");
    this.#buttonSubmit = this.#popupForm.querySelector(".form__button-submit")
    this.#btnSubmitText = this.#buttonSubmit.textContent;
    this.#inputList = this.#popupForm.querySelectorAll(".form__input");
  }

  #getInputValues() {
    this.#formValues = {};
    this.#inputList.forEach(input => {
        this.#formValues[input.name] = input.value;
    });    
    return this.#formValues;
}

  loading(isLoad, loadingText='Сохранение...') {
   if(isLoad) {
    this.#buttonSubmit.textContent = loadingText;
   } else {
    this.#buttonSubmit.textContent = this.#btnSubmitText;
   }
  }

  setEventListeners() {
    super.setEventListeners();

    this.#popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this.#handleSubmitForm(this.#getInputValues());
    });
  }

  close() {
    super.close();
    this.#popupForm.reset();
  }
}
