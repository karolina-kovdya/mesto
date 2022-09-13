const popupElementEdit = document.querySelector('.popup_edit');
const popupElementAdded = document.querySelector('.popup_added');
const popupElementShow = document.querySelector('.popup_show-card');
const formElementEdit = document.querySelector('.form_edit');
const formElementAdded = document.querySelector('.form_added')
const popupEdit = document.querySelector('.profile__button_type_edit');
const popupAdded = document.querySelector('.profile__button_type_add');
const formInput = document.querySelector('.form__set');
const nameInput = document.querySelector('.form__input_el_name');
const jobInput = document.querySelector('.form__input_el_job');
const userName = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-subname');
const titleInput = document.querySelector('.form__input_el_title');
const photoInput = document.querySelector('.form__input_el_photo');
const templateElement = document.querySelector('.template');
const listElement = document.querySelector('.place__list');
const popupCloseEdit = document.querySelector('.popup__close-edit');
const popupCloseAdded = document.querySelector('.popup__close-added');
const popupCloseShow = document.querySelector('.popup__close-show');
const likeElement = document.querySelector('place__button_type_like');
const cardPic = document.querySelector('.popup__image');
const cardTitle = document.querySelector('.popup__subtitle');
const buttonSubmitAdded = document.querySelector('.form__button-submit_added')

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-submit',
  inactiveButtonClass: 'form__button-submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

enableValidation(validationConfig);

initialCards.forEach((element) => {
  const titleValue = element.name;
  const photoValue = element.link;

  const card = createCard(titleValue, photoValue);

  renderCard (card, listElement);
});

function createCard(titleValue, photoValue) {
  const newCardElement = templateElement.content.cloneNode(true);

  newCardElement.querySelector('.place__title').textContent = titleValue;
  newCardElement.querySelector('.place__image').src = photoValue;
  newCardElement.querySelector('.place__image').alt = `Фотография ${titleValue}`;

  newCardElement.querySelector('.place__button-delete').addEventListener('click', deleteCard);
  newCardElement.querySelector('.place__button-like').addEventListener('click', likeCard);
  newCardElement.querySelector('.place__image').addEventListener('click', openPopupShow);

  return newCardElement;
}

function renderCard(card, listElement) {
  listElement.prepend(card);
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEsc);
  popup.addEventListener('click', closePopupOverlay);
}

const setPopupEdit = () => {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;

  openPopup(popupElementEdit);
}

function openPopupShow(e) {
  const itemElement = e.target.closest('.item');

  const text = itemElement.querySelector('.place__title').textContent;
  const pic = itemElement.querySelector('.place__image').src;
  
  cardTitle.textContent = text;
  cardPic.src = pic;

  openPopup(popupElementShow);
}

const closePopup = (popup) => {
  
  popup.classList.remove('popup_opened');
  
  document.removeEventListener('keydown', closePopupWithEsc);
  popup.removeEventListener('click', closePopupOverlay);
}

function closePopupOverlay(evt) {
  const popupList = document.querySelectorAll('.popup');

   popupList.forEach(popup => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
   });
}

function closePopupWithEsc(evt) {
  const popupList = document.querySelectorAll('.popup');

  popupList.forEach(popup => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  });
}

const submitFormEdit = () => {

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  closePopup(popupElementEdit);
}

function submitFormAdded() {

  const title = titleInput.value;
  const photo = photoInput.value;

  titleInput.value = '';
  photoInput.value = '';

  const card = createCard(title, photo);

  renderCard (card, listElement);

  closePopup(popupElementAdded);

  buttonSubmitAdded.classList.add('form__button-submit_disabled');
}

function deleteCard(e) {
  const itemElement = e.target.closest('.item');
  itemElement.remove()
}

function likeCard(e) {
  const like = e.target
  e.target.classList.toggle('place__button-like_active');
}

popupEdit.addEventListener('click', setPopupEdit);
popupAdded.addEventListener('click', function(){
  openPopup(popupElementAdded);
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
