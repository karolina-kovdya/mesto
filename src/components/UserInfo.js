export default class UserInfo {
  #userName;
  #userJob;
  #profileInformation;

  constructor({ nameSelector, jobSelector }) {
    this.#userName = document.querySelector(nameSelector);
    this.#userJob =document.querySelector(jobSelector);
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
    this.#userJob.textContent = formData.job;
  }
}
