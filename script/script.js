let popup = document.querySelector('.popup');

let openPopup = document.querySelector('.profile__button_type_edit');

let closePopup = document.querySelector('.form__button-close');

let formInput = document.querySelector('.form__input');
 
let nameInput = formInput.querySelector('.form__item_el_name');

let jobInput = formInput.querySelector('.form__item_el_job');

let userName = document.querySelector('.profile__user-name');

let userJob = document.querySelector('.profile__user-subname');

openPopup.addEventListener('click', function() {
    popup.classList.add('popup_opened');
})

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}

    formElement.addEventListener('submit', formSubmitHandler); 


