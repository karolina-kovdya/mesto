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

initialCards.forEach((element) => {
  const newCardElement = templateElement.content.cloneNode(true);

  newCardElement.querySelector('.place__title').textContent = element.name;
  newCardElement.querySelector('.place__image').src = element.link;

  newCardElement
  .querySelector('.place__button_type_delete')
  .addEventListener('click', (e) => {
  const itemElement = e.target.closest('.item');
  itemElement.remove()
  });

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

function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
}

function addCard(titleValue, fotoValue) {
  const newCardElement = templateElement.content.cloneNode(true);

  newCardElement.querySelector('.place__title').textContent = titleValue;
  newCardElement.querySelector('.place__image').src = fotoValue;
  
  newCardElement
  .querySelector('.place__button_type_delete')
  .addEventListener('click', (e) => {
  const itemElement = e.target.closest('.item');
  itemElement.remove()
  });

  listElement.prepend(newCardElement);
}

function HandlerSumbitAdd(evt) {
  evt.preventDefault();

  const title = titleInput.value;
  const foto = fotoInput.value;

  addCard(title, foto);
}

popupEdit.addEventListener('click', openPopupEdit);
popupAdded.addEventListener('click', openPopupAdded);
formElementedit.addEventListener('submit', formSubmitHandler);
formElementAdded.addEventListener('submit', HandlerSumbitAdd);


