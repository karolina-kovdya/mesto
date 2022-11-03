export default class UserInfo {
  #userName;
  #userJob;
  #profileInformation;
  #userAvatar;

  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this.#userName = document.querySelector(nameSelector);
    this.#userJob =document.querySelector(jobSelector);
    this.#userAvatar = document.querySelector(avatarSelector)
  }

  getUserInfo() {
    this.#profileInformation = {
      name: this.#userName.textContent,
      job: this.#userJob.textContent,
    };
    return this.#profileInformation;
  }

  setUserInfo(formData) {
    this.#userName.textContent = formData.name;
    this.#userJob.textContent = formData.about;
    this.#userAvatar.src = formData.avatar;
  }
}
