const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-submit',
    inactiveButtonClass: 'form__button-submit_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
}

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.add('form__input_type_error');
    errorElement.classList.add('form__input-error_active');

    errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');

    errorElement.textContent = ''; 
}

const checkValidityInput = (formElement, inputElement)=> {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const button = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, button);
    
    inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', function(){
            checkValidityInput(formElement, inputElement)

            toggleButtonState(inputList, button);
         });
    });
}

function enableValidation (config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

    setEventListeners(formElement, config);
}); 
}
enableValidation(validationConfig)

function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    }); 
}

function toggleButtonState (inputList, button) {
    if (hasInvalidInput(inputList)) {
        button.classList.add('form__button-submit_disabled');
    } else {
        button.classList.remove('form__button-submit_disabled');
    }
}




