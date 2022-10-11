import { initialCards } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import {
  popupElementEdit,
  popupElementAdded,
  popupElementShow,
  formElementAdded,
  formElementEdit,
  popupAdded,
  popupEdit,
  popupCloseAdded,
  popupCloseEdit,
  popupCloseShow,
  nameInput,
  jobInput,
  userName,
  userJob,
  cardPic,
  cardTitle,
  titleInput,
  photoInput,
  cardListSelector,
  validationConfig

} from "../utils/constants.js";
import Section from "../components/section.js";

const cardList = new Section ({ 
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, ".template", openPopupShow);
    const cardElement = card.generateCard();

    cardList.addItem(cardElement);
  }
}, cardListSelector);

cardList.renderItems();

const formEditValidator = new FormValidator(validationConfig, formElementEdit);
const formAddValidator = new FormValidator(validationConfig, formElementAdded);

formEditValidator.enableValidation();
formAddValidator.enableValidation();

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupWithEsc);
  popup.addEventListener("click", closePopupOverlay);
};

const setPopupEdit = () => {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;

  openPopup(popupElementEdit);
  formEditValidator.resetValidation();
};

function openPopupShow(data) {
  cardTitle.textContent = data.name;
  cardPic.src = data.link;

  openPopup(popupElementShow);
}

const setPopupAdd = () => {
  openPopup(popupElementAdded);
  formElementAdded.reset();
  formAddValidator.resetValidation();
};

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");

  document.removeEventListener("keydown", closePopupWithEsc);
  popup.removeEventListener("click", closePopupOverlay);
};

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

function closePopupWithEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

const handleEditFormSubmit = (evt) => {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  closePopup(popupElementEdit);
};

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const title = titleInput.value;
  const photo = photoInput.value;

  const newCard = new Object();
  newCard.name = title;
  newCard.link = photo;

  renderCard(newCard);

  closePopup(popupElementAdded);
}

popupEdit.addEventListener("click", setPopupEdit);
popupAdded.addEventListener("click", setPopupAdd);
formElementEdit.addEventListener("submit", handleEditFormSubmit);
formElementAdded.addEventListener("submit", handleAddFormSubmit);
popupCloseEdit.addEventListener("click", function () {
  closePopup(popupElementEdit);
});
popupCloseAdded.addEventListener("click", function () {
  closePopup(popupElementAdded);
});
popupCloseShow.addEventListener("click", function () {
  closePopup(popupElementShow);
});
