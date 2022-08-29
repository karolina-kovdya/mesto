const popupElement = document.querySelector('.popup');
const popupElementEdit = document.querySelector('.popup_edit');
const popupElementAdded = document.querySelector('.popup_added');
const popupElementShow = document.querySelector('.popup_show-card');
const formElementedit = document.querySelector('.form_edit');
const formElementAdded = document.querySelector('.form_added')
const popupEdit = document.querySelector('.profile__button_type_edit');
const popupAdded = document.querySelector('.profile__button_type_add');
const formInput = document.querySelector('.form__input');
const nameInput = document.querySelector('.form__item_el_name');
const jobInput = document.querySelector('.form__item_el_job');
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
  titleValue = element.name;
  fotoValue = element.link;

  createCard(titleValue, fotoValue);

  const card = createCard(titleValue, fotoValue);

  renderCard (card, listElement);
});

function createCard(titleValue, fotoValue) {
  const newCardElement = templateElement.content.cloneNode(true);

  newCardElement.querySelector('.place__title').textContent = titleValue;
  newCardElement.querySelector('.place__image').src = fotoValue;

  newCardElement.querySelector('.place__button-delete').addEventListener('click', deleteCard);
  newCardElement.querySelector('.place__button-like').addEventListener('click', likeCard);
  newCardElement.querySelector('.place__image').addEventListener('click', setPopupShow);

  return newCardElement;
}

function renderCard(card, listElement) {
  listElement.prepend(card);
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function setPopupEdit() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;

  openPopup(popupElementEdit);
}

function setPopupShow(e) {
  const itemElement = e.target.closest('.item');

  const text = itemElement.querySelector('.place__title').textContent;
  const pic = itemElement.querySelector('.place__image').src;
  
  cardTitle.textContent = text;
  cardPic.src = pic;

  openPopup(popupElementShow);
}

function closePopup(popupElement) {
  
  popupElement.classList.remove('popup_opened');
}

function submitFormEdit(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  closePopupEdit();
}

function submitFormAdded(evt) {
  evt.preventDefault();

  const title = titleInput.value;
  const foto = fotoInput.value;

  titleInput.value = '';
  fotoInput.value = '';

  createCard(titleValue, fotoValue);

  const card = createCard(titleValue, fotoValue);

  renderCard (card, listElement);

  closePopup(popupElementAdded);
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
formElementedit.addEventListener('submit', submitFormEdit);
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


