const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupElementEdit = document.querySelector('.popup_edit');
const popupElementAdded = document.querySelector('.popup_added');
const popupElementShow = document.querySelector('.popup_show-card');
const formElement = document.querySelector('.form');
const formElementedit = document.querySelector('.form_edit');
const formElementAdded = document.querySelector('.form_added')
const popupEdit = document.querySelector('.profile__button_type_edit');
const popupAdded = document.querySelector('.profile__button_type_add');
const formInput = formElement.querySelector('.form__input');
const nameInput = formElement.querySelector('.form__item_el_name');
const jobInput = formElement.querySelector('.form__item_el_job');
const userName = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-subname');
const titleInput = document.querySelector('.form__item_el_title');
const fotoInput = document.querySelector('.form__item_el_foto');
const templateElement = document.querySelector('.template');
const listElement = document.querySelector('.place__list');
const popupCloseEdit = document.querySelector('.popup__close-edit');
const popupCloseAdded = document.querySelector('.popup__close-added');
const popupCloseShow = document.querySelector('.popup__close-show');
const likeElement = document.querySelector('place__button_type_like');
const fotoElement = document.querySelector('.place__image');
const fotoTitle = document.querySelector('.place__title');
const cardPic = document.querySelector('.popup__image');
const cardTitle =document.querySelector('.popup__subtitle');

initialCards.forEach((element) => {
  const newCardElement = templateElement.content.cloneNode(true);

  newCardElement.querySelector('.place__title').textContent = element.name;
  newCardElement.querySelector('.place__image').src = element.link;

  newCardElement.querySelector('.place__button-delete').addEventListener('click', deleteCard);
  newCardElement.querySelector('.place__button-like').addEventListener('click', likeCard);
  newCardElement.querySelector('.place__image').addEventListener('click', openPopupShow);

  listElement.prepend(newCardElement);
});

function openPopupEdit() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;

  popupElementEdit.classList.add('popup_opened');
}

function openPopupAdded() {
  popupElementAdded.classList.add('popup_opened');
}

function openPopupShow(e) {
  const itemElement = e.target.closest('.item');

  setPopupShow(itemElement);

  popupElementShow.classList.add('popup_opened');
}

function setPopupShow (elem) {
  const text = elem.querySelector('.place__title').textContent;
  const pic = elem.querySelector('.place__image').src;
  
  cardTitle.textContent = text;
  cardPic.src = pic;
}

function closePopupEdit() {
  popupElementEdit.classList.remove('popup_opened');
}

function closePopupAdded() {
  popupElementAdded.classList.remove('popup_opened');
}

function closePopupShow () {
  popupElementShow.classList.remove('popup_opened');
}

function HandlerSumbitEdit(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  closePopupEdit();
}

function addCard(titleValue, fotoValue) {
  const newCardElement = templateElement.content.cloneNode(true);

  newCardElement.querySelector('.place__title').textContent = titleValue;
  newCardElement.querySelector('.place__image').src = fotoValue;

  newCardElement.querySelector('.place__button-delete').addEventListener('click', deleteCard);
  newCardElement.querySelector('.place__button-like').addEventListener('click', likeCard);
  newCardElement.querySelector('.place__image').addEventListener('click', openPopupShow);


  listElement.prepend(newCardElement);
}

function deleteCard(e) {
  const itemElement = e.target.closest('.item');
  itemElement.remove()
}

function likeCard(e) {
  const like = e.target
  e.target.classList.toggle('place__button-like_active');
}

function HandlerSumbitAdd(evt) {
  evt.preventDefault();

  const title = titleInput.value;
  const foto = fotoInput.value;

  addCard(title, foto);

  closePopupAdded();
}

popupEdit.addEventListener('click', openPopupEdit);
popupAdded.addEventListener('click', openPopupAdded);
formElementedit.addEventListener('submit', HandlerSumbitEdit);
formElementAdded.addEventListener('submit', HandlerSumbitAdd);
popupCloseEdit.addEventListener('click', closePopupEdit);
popupCloseAdded.addEventListener('click', closePopupAdded);
popupCloseShow.addEventListener('click', closePopupShow);


