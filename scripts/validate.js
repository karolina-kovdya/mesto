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

const resetValidation = (formElement, config) => {
    const errors = Array.from(formElement.querySelectorAll('.form__input-error'));
    const inputs = formElement.querySelectorAll(config.inputSelector);

    errors.forEach((error) => {
        error.textContent = '';
    });

    inputs.forEach((input) => {
        input.classList.remove(config.inputErrorClass);
    });
}

const toggleInputError = (formElement, inputElement, config)=> {
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

const disableButton = (button, config) => {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', '');
}

const enableButton = (button, config) => {
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute('disabled', '');
}

const toggleButtonState = (inputList, button, config) => {
    if (hasInvalidInput(inputList)) {
        disableButton (button, config);
    } else {
        enableButton(button, config);
    }
}

const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const button = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, button, config);
    
    inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', function(){
            toggleInputError(formElement, inputElement, config)

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