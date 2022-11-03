import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import {
  popupElementEdit,
  popupElementAdded,
  popupElementShow,
  popupElementChange,
  popupElementDelete,
  formElementAdded,
  formElementEdit,
  formChangeAvatar,
  popupAdded,
  popupEdit,
  popupChange,
  cardListSelector,
  validationConfig,
  nameInput,
  jobInput,
  userName,
  userJob,
  userAvatar,
} from "../utils/constants.js";
import Section from "../components/section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImages from "../components/PopupWithImages.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-52",
  headers: {
    authorization: "40b87cce-85a4-4ba9-8753-335bfa689170",
    "Content-Type": "application/json",
  },
});

let userId;

const createCard = (data) => {
  const card = new Card(data, ".template", userId, {
    handleCardClick: () => {
      popupWithImages.open(data);
    },
    handleDeleteCard: (cardId) => {
      popupWithConfirm.open();
      popupWithConfirm.setSubmitDelete(() => {
        api
          .deleteCard(cardId)
          .then(() => {
            card.deleteCard();
          })
          .catch((err) => console.log(err));
      });
    },
    handleAddLike: () => {
      api
        .addLike(data)
        .then((counter) => {
          card.setCounter(counter);
          card.addLike();
        })
        .catch((err) => console.log(err));
    },
    handleDeleteLike: () => {
      api
        .deleteLike(data)
        .then((counter) => {
          card.setCounter(counter);
          card.deleteLike();
        })
        .catch((err) => console.log(err));
    },
  });
  const cardElement = card.generateCard();

  return cardElement;
};

const cardList = new Section(
  {
    renderer: (data) => {
      cardList.addItem(createCard(data));
    },
  },
  cardListSelector
);

Promise.all([api.getCards(), api.getUserInfo()]).then(([cards, userInfo]) => {
  userId = userInfo._id;
  cardList.renderItems(cards);
  userInformation.setUserInfo(userInfo);
});

const popupWithConfirm = new PopupWithConfirmation(popupElementDelete);
popupWithConfirm.setEventListeners();

const popupWithImages = new PopupWithImages(popupElementShow);
popupWithImages.setEventListeners();

const userInformation = new UserInfo({
  nameSelector: userName,
  jobSelector: userJob,
  avatarSelector: userAvatar,
});

const popupFormEdit = new PopupWithForm(popupElementEdit, {
  handleSubmitForm: (data) => {
    popupFormEdit.loading(true);
    api
      .editProfile(data.name, data.job)
      .then((formData) => {
        userInformation.setUserInfo(formData);
        popupFormEdit.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupFormEdit.loading(false);
      });
  },
});
popupFormEdit.setEventListeners();

const setPopupEdit = () => {
  popupFormEdit.open();
  const profileInfo = userInformation.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.job;
  formEditValidator.resetValidation();
};

popupEdit.addEventListener("click", setPopupEdit);

const popupAvatar = new PopupWithForm(popupElementChange, {
  handleSubmitForm: (data) => {
    popupAvatar.loading(true);
    api
      .changeAvatar(data.avatar)
      .then((formData) => {
        userInformation.setUserInfo(formData);
        popupAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupAvatar.loading(false);
      });
  },
});

popupAvatar.setEventListeners();

const setPopupChangeAvatar = () => {
  popupAvatar.open();
  formAddValidator.resetValidation();
};

popupChange.addEventListener("click", setPopupChangeAvatar);

const popupFormAdd = new PopupWithForm(popupElementAdded, {
  handleSubmitForm: (data) => {
    popupFormAdd.loading(true);
    api
      .addNewCard(data.name, data.link)
      .then((data) => {
        cardList.addItem(createCard(data));
        popupFormAdd.close()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupFormAdd.loading(false);
      });
  },
});
popupFormAdd.setEventListeners();

const setPopupAdd = () => {
  popupFormAdd.open();
  formAddValidator.resetValidation();
};

popupAdded.addEventListener("click", setPopupAdd);

const formEditValidator = new FormValidator(validationConfig, formElementEdit);
const formAddValidator = new FormValidator(validationConfig, formElementAdded);
const formAvatarValidator = new FormValidator(
  validationConfig,
  formChangeAvatar
);

formEditValidator.enableValidation();
formAddValidator.enableValidation();
formAvatarValidator.enableValidation();
