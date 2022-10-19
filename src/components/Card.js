export default class Card {
  #name;
  #link;
  #templateSelector;
  #element;
  #handleCardClick;
  #cardTitle;
  #cardImage;
  #buttonDelete;
  #buttonLike;

  constructor(data, templateSelector, {handleCardClick}) {
    this.#name = data.name;
    this.#link = data.link;
    this.#templateSelector = templateSelector;
    this.#handleCardClick = handleCardClick;
  }

  #getTemplate() {
    const cardElement = document
      .querySelector(this.#templateSelector)
      .content.querySelector(".item")
      .cloneNode(true);

    return cardElement;
  }

  #deleteCard() {
    this.#element.remove();
    this.#element = null;
  }

  #likeCard() {
    this.#buttonLike.classList.toggle("place__button-like_active");
  }

  #openCard() {
    this.#handleCardClick({ name: this.#name, link: this.#link });
  }

  #setEventListeners() {
    this.#buttonDelete.addEventListener("click", () => {
      this.#deleteCard();
    });

    this.#buttonLike.addEventListener("click", () => {
      this.#likeCard();
    });

    this.#cardImage.addEventListener("click", () => {
      this.#openCard();
    });
  }

  generateCard() {
    this.#element = this.#getTemplate();

    this.#cardTitle = this.#element.querySelector(".place__title");
    this.#cardImage = this.#element.querySelector(".place__image");
    this.#buttonDelete = this.#element.querySelector(".place__button-delete");
    this.#buttonLike = this.#element.querySelector(".place__button-like");

    this.#cardImage.src = this.#link;
    this.#cardTitle.textContent = this.#name;
    this.#cardImage.alt = `Фотография ${this.#name}`;

    this.#setEventListeners();

    return this.#element;
  }
}
