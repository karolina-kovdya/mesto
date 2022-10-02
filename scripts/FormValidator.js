export default class FormValidator {
  #validationConfig;
  #formElement;
  #inputList;
  #button;

  constructor(validationConfig, formElement) {
    this.#validationConfig = validationConfig;
    this.#formElement = formElement;
    this.#inputList = Array.from(
      this.#formElement.querySelectorAll(this.#validationConfig.inputSelector)
    );
    this.#button = this.#formElement.querySelector(
      this.#validationConfig.submitButtonSelector
    );
  }

  #showInputError(inputElement, errorMessage) {
    const errorElement = this.#formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.add(this.#validationConfig.inputErrorClass);
    errorElement.classList.add(this.#validationConfig.errorClass);

    errorElement.textContent = errorMessage;
  }

  #hideInputError(inputElement) {
    const errorElement = this.#formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.remove(this.#validationConfig.inputErrorClass);
    errorElement.classList.remove(this.#validationConfig.errorClass);

    errorElement.textContent = "";
  }

  #toggleInputError(inputElement) {
    if (!inputElement.validity.valid) {
      this.#showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.#hideInputError(inputElement);
    }
  }

  #hasInvalidInput() {
    return this.#inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  #disableButton() {
    this.#button.classList.add(this.#validationConfig.inactiveButtonClass);
    this.#button.disabled;
  }

  #enableButton() {
    this.#button.classList.remove(this.#validationConfig.inactiveButtonClass);
    this.#button.removeAttribute("disabled");
  }

  #toggleButtonState() {
    if (this.#hasInvalidInput()) {
      this.#disableButton();
    } else {
      this.#enableButton();
    }
  }

  enableValidation() {
    this.#toggleButtonState();

    this.#inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.#toggleInputError(inputElement);

        this.#toggleButtonState();
      });
    });
  }

  resetValidation() {
    this.#inputList.forEach((inputElement) => {
      this.#hideInputError(inputElement);
    });

    this.#toggleButtonState();
  }
}