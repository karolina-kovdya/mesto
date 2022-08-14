let popup = document.querySelector('.popup');

let form = document.querySelector('.popup__form')

let openPopup = document.querySelector('.profile__button_type_edit');

let closePopup = document.querySelector('.popup__button-close');

let formInput = document.querySelector('.popup__input');
 
let nameInput = document.querySelector('.popup__item_el_name');

let jobInput = document.querySelector('.popup__item_el_job');

let userInfo = document.querySelector('profile__user-information')

let userName = document.querySelector('.profile__user-name');

let userJob = document.querySelector('.profile__user-subname');

function popupOpen () {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;

    popup.classList.add('popup_opened')
}

function popupClose ()  {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    popupClose();
}

openPopup.addEventListener('click', popupOpen);

closePopup.addEventListener('click', popupClose);

form.addEventListener('submit', formSubmitHandler); 


