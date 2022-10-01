import { initialCards } from "./initialCards.js";
import Card from "./Cards.js";
import FormValidator from "./FormValidator.js";

const popupElementEdit = document.querySelector('.popup_edit');
const popupElementAdded = document.querySelector('.popup_added');
const popupElementShow = document.querySelector('.popup_show-card');
const formElementEdit = document.querySelector('.form_edit');
const formElementAdded = document.querySelector('.form_added')
const popupEdit = document.querySelector('.profile__button_type_edit');
const popupAdded = document.querySelector('.profile__button_type_add');
const nameInput = document.querySelector('.form__input_el_name');
const jobInput = document.querySelector('.form__input_el_job');
const userName = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-subname');
const titleInput = document.querySelector('.form__input_el_title');
const photoInput = document.querySelector('.form__input_el_photo');
const popupCloseEdit = document.querySelector('.popup__close-edit');
const popupCloseAdded = document.querySelector('.popup__close-added');
const popupCloseShow = document.querySelector('.popup__close-show');
const cardPic = document.querySelector('.popup__image');
const cardTitle = document.querySelector('.popup__subtitle');
const buttonSubmitAdded = document.querySelector('.form__button-submit_added');

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-submit',
  inactiveButtonClass: 'form__button-submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const validateFormEdit = new FormValidator(validationConfig, formElementEdit);
const validateFormAdd = new FormValidator(validationConfig, formElementAdded);

validateFormEdit.enableValidation();
validateFormAdd.enableValidation();

function createCard(data) {
    const card = new Card (data, '.template', openPopupShow);
    const cardElement = card.generateCard();
    return cardElement;
}

function renderCard(data) {
    const newCard = createCard(data);
    document.querySelector('.place__list').prepend(newCard);
}

initialCards.forEach((data) =>{
    renderCard(data);
})

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEsc);
  popup.addEventListener('click', closePopupOverlay);
}

const setPopupEdit = () => {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;

  openPopup(popupElementEdit);
  resetValidation(formElementEdit, validationConfig);
}

function openPopupShow(name, link) {
  cardTitle.textContent = name;
  cardPic.src = link;

  openPopup(popupElementShow);
}

const closePopup = (popup) => {
  
  popup.classList.remove('popup_opened');
  
  document.removeEventListener('keydown', closePopupWithEsc);
  popup.removeEventListener('click', closePopupOverlay);
}

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function closePopupWithEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

const submitFormEdit = (evt) => {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  closePopup(popupElementEdit);
}

function submitFormAdded() {

  const title = titleInput.value;
  const photo = photoInput.value;

  const newCard = new Object();
  newCard.name = title;
  newCard.link = photo;

  formElementAdded.reset();

  renderCard(newCard);

  closePopup(popupElementAdded);
}

popupEdit.addEventListener('click', setPopupEdit);
popupAdded.addEventListener('click', function(){
  openPopup(popupElementAdded);
  formElementAdded.reset();
  validateFormAdd.resetValidation();
});
formElementEdit.addEventListener('submit', submitFormEdit);
formElementAdded.addEventListener('submit', submitFormAdded);
popupCloseEdit.addEventListener('click', function(){
  closePopup(popupElementEdit);
});
popupCloseAdded.addEventListener('click', function(){
  closePopup(popupElementAdded);
});
popupCloseShow.addEventListener('click', function(){
  closePopup(popupElementShow);
});