let popup = document.querySelector('.popup');

let openPopup = document.querySelector('.profile__button_type_edit');

let closePopup = document.querySelector('.form__button-close');

let formInput = document.querySelector('.form__input');
 
let nameInput = document.querySelector('.form__item_el_name');

let jobInput = document.querySelector('.form__item_el_job');

let userInfo = document.querySelector('profile__user-information')

let userName = document.querySelector('.profile__user-name');

let userJob = document.querySelector('.profile__user-subname');

openPopup.addEventListener('click', function() {
    popup.classList.add('popup_opened');
})

function popupClose ()  {
    popup.classList.remove('popup_opened');
}

popupClose();

closePopup.addEventListener('click', popupClose);

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    nameInput.value = userName;
    jobInput.value = userJob;

    userInfo.insertAdjacentElementHTML = `
        <div class="profile__user-information">
          <span class="profile__user-name">${nameInput.value}</span>
          <span class="profile__user-subname">${jobInput.value}</span>
        </div>
    `;

    userName.textContent = nameInput.textContent
    userJob.textContent = jobInput.textContent

}

    formInput.addEventListener('submit', formSubmitHandler); 


