const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-submit',
    inactiveButtonClass: 'form__button-submit_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
}

const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.add(config.inputErrorClass);
    errorElement.classList.add(config.errorClass);

    errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);

    errorElement.textContent = ''; 
}

const checkValidityInput = (formElement, inputElement, config)=> {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
        hideInputError(formElement, inputElement, config);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    }); 
}

const toggleButtonState = (inputList, button, config) => {
    if (hasInvalidInput(inputList)) {
        button.classList.add(config.inactiveButtonClass);
    } else {
        button.classList.remove(config.inactiveButtonClass);
    }
}


const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const button = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, button, config);
    
    inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', function(){
            checkValidityInput(formElement, inputElement, config)

            toggleButtonState(inputList, button, config);
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
enableValidation(validationConfig);




