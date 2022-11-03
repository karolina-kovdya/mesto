export default class Api {
  #url;
  #header;

  constructor({ url, headers }) {
    this.#url = url;
    this.#header = headers;
  }

  #checkRes(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this.#url}/cards`, { headers: this.#header }).then(
      this.#checkRes
    );
  }

  getUserInfo() {
    return fetch(`${this.#url}/users/me`, { headers: this.#header }).then(
      this.#checkRes
    );
  }

  editProfile(name, about) {
    return fetch(`${this.#url}/users/me`, {
      method: "PATCH",
      headers: this.#header,
      body: JSON.stringify({ name, about }),
    }).then(this.#checkRes);
  }

  changeAvatar(avatar) {
    return fetch(`${this.#url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.#header,
      body: JSON.stringify({ avatar }),
    }).then(this.#checkRes);
  }

  addNewCard(name, link) {
    return fetch(`${this.#url}/cards`, {
      method: "POST",
      headers: this.#header,
      body: JSON.stringify({ name, link }),
    }).then(this.#checkRes);
  }

  addLike(card) {
    return fetch(`${this.#url}/cards/${card._id}/likes`, {
      method: "PUT",
      headers: this.#header,
    }).then(this.#checkRes);
  }

  deleteLike(card) {
    return fetch(`${this.#url}/cards/${card._id}/likes`, {
      method: "DELETE",
      headers: this.#header,
    }).then(this.#checkRes);
  }

  deleteCard(id) {
    return fetch(`${this.#url}/cards/${id}`, {
      method: "DELETE",
      headers: this.#header,
    }).then(this.#checkRes);
  }
}
