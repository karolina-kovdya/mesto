export default class Card {
    #name;
    #link;
    #templateSelector;
    #element;
    #openPopupShow;

    constructor(data, templateSelector, openPopupShow) {
      this.#name = data.name;
      this.#link = data.link;
      this.#templateSelector = templateSelector;
      this.#openPopupShow = openPopupShow;
    }

    #getTemplate() {
      const cardElement = document
      .querySelector(this.#templateSelector)
      .content
      .querySelector('.item')
      .cloneNode(true)

      return cardElement;
    }

    #deleteCard() {
      this.#element.remove();
    }

    #likeCard() {
      const likeElement = this.#element.querySelector('.place__button-like');
      likeElement.classList.toggle('place__button-like_active');
    }

    #openCard() {
      this.#openPopupShow(this.#name, this.#link);
    }

    #setEventListeners() {
      this.#element.querySelector('.place__button-delete')
      .addEventListener('click', () => {
        this.#deleteCard();
      });

      this.#element.querySelector('.place__button-like')
      .addEventListener('click', () => {
        this.#likeCard();
      });

      this.#element.querySelector('.place__image')
      .addEventListener('click', () => {
        this.#openCard();
      });
    }

    generateCard() {
      this.#element = this.#getTemplate();
      this.#setEventListeners();

      this.#element.querySelector('.place__image').src = this.#link;
      this.#element.querySelector('.place__title').textContent = this.#name;
      this.#element.querySelector('.place__image').alt = `Фотография ${this.#name}`

      return this.#element
    }
  }


