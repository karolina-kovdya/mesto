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
  cardListSelector,
  validationConfig,
  nameInput,
  jobInput,
  userName,
  userJob,
} from "../utils/constants.js";
import Section from "../components/section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImages from "../components/PopupWithImages.js";

const createCard = (data) => {
  const card = new Card(data, ".template", {
    handleCardClick: () => {
      popupWithImages.open(data);
    },
  });
  const cardElement = card.generateCard();

  return cardElement;
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      cardList.addItem(createCard(data));
    },
  },
  cardListSelector
);
cardList.renderItems();

const popupWithImages = new PopupWithImages(popupElementShow);
popupWithImages.setEventListeners();

const userInformation = new UserInfo({
  nameSelector: userName,
  jobSelector: userJob,
});

const popupFormEdit = new PopupWithForm({
  handleSubmitForm: (formData) => {
    userInformation.setUserInfo(formData);
    popupFormEdit.close();
  },
}, popupElementEdit,
);
popupFormEdit.setEventListeners();

const setPopupEdit = () => {
  const profileInfo = userInformation.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.job;
  formEditValidator.resetValidation();
  popupFormEdit.open();
};

const popupFormAdd = new PopupWithForm({
  handleSubmitForm: (data) => {
    cardList.addItem(createCard(data));
    popupFormAdd.close();
  },
}, popupElementAdded,
);
popupFormAdd.setEventListeners();

const setPopupAdd = () => {
  popupFormAdd.open();
  formElementAdded.reset();
  formAddValidator.resetValidation();
};

const formEditValidator = new FormValidator(validationConfig, formElementEdit);
const formAddValidator = new FormValidator(validationConfig, formElementAdded);

formEditValidator.enableValidation();
formAddValidator.enableValidation();

popupEdit.addEventListener("click", setPopupEdit);
popupAdded.addEventListener("click", setPopupAdd);

