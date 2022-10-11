export const initialCards = [
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

export const popupElementEdit = document.querySelector(".popup_edit");
export const popupElementAdded = document.querySelector(".popup_added");
export const popupElementShow = document.querySelector(".popup_show-card");
export const formElementEdit = document.querySelector(".form_edit");
export const formElementAdded = document.querySelector(".form_added");
export const popupEdit = document.querySelector(".profile__button_type_edit");
export const popupAdded = document.querySelector(".profile__button_type_add");
export const nameInput = document.querySelector(".form__input_el_name");
export const jobInput = document.querySelector(".form__input_el_job");
export const userName = document.querySelector(".profile__user-name");
export const userJob = document.querySelector(".profile__user-subname");
export const titleInput = document.querySelector(".form__input_el_title");
export const photoInput = document.querySelector(".form__input_el_photo");
export const popupCloseEdit = document.querySelector(".popup__close-edit");
export const popupCloseAdded = document.querySelector(".popup__close-added");
export const popupCloseShow = document.querySelector(".popup__close-show");
export const cardPic = document.querySelector(".popup__image");
export const cardTitle = document.querySelector(".popup__subtitle");
export const cardListSelector = ".place__list";

export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button-submit",
  inactiveButtonClass: "form__button-submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};