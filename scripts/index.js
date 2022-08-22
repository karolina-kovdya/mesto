let popup = document.querySelector('.popup');

let popupAddCard = document.querySelector('.popup_add-card');

let form = document.querySelector('.popup__form')

let openPopup = document.querySelector('.profile__button_type_edit');

let AddPopup = document.querySelector('.profile__button_type_add');

let closePopup = document.querySelector('.popup__button-close');

let formInput = document.querySelector('.popup__input');
 
let nameInput = document.querySelector('.popup__item_el_name');

let jobInput = document.querySelector('.popup__item_el_job');

let userInfo = document.querySelector('profile__user-information')

let userName = document.querySelector('.profile__user-name');

let userJob = document.querySelector('.profile__user-subname');

let titleInput = formInput.querySelector('.popup__item_el_title');

let fotoInput = formInput.querySelector('.popup__item_el_foto');

let placeTitle = document.querySelector('.place__title');

let placeFoto = document.querySelector('.place__image');

function popupOpen () {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;

    popup.classList.add('popup_opened');
}

function popupOpenAdd () {

    popupAddCard.classList.add('popup_opened');
}

function popupClose ()  {
    popup.classList.remove('popup_opened');
}

function popupAddClose () {
    popupAddCard.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    popupClose();
}

openPopup.addEventListener('click', popupOpen);

AddPopup.addEventListener('click', popupOpenAdd);

closePopup.addEventListener('click', popupClose);

closePopup.addEventListener('click', popupAddClose);

form.addEventListener('submit', formSubmitHandler); 


