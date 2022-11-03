export default class Card {
  #name;
  #link;
  #templateSelector;
  #element;
  #handleCardClick;
  #handleDeleteCard;
  #handleDeleteLike;
  #handleAddLike;
  #cardTitle;
  #cardImage;
  #buttonDelete;
  #buttonLike;
  #userId;
  #ownerId;
  #cardId;
  #likeCounter;
  #likes;

  constructor(data, templateSelector, userId, { handleCardClick ,handleDeleteCard, handleDeleteLike, handleAddLike}) {
    this.#name = data.name;
    this.#link = data.link;
    this.#ownerId = data.owner;
    this.#cardId = data._id;
    this.#likes = data.likes;
    this.#userId = userId;
    this.#templateSelector = templateSelector;
    this.#handleCardClick = handleCardClick;
    this.#handleDeleteCard = handleDeleteCard;
    this.#handleDeleteLike = handleDeleteLike;
    this.#handleAddLike = handleAddLike;
  }

  #getTemplate() {
    const cardElement = document
      .querySelector(this.#templateSelector)
      .content.querySelector(".item")
      .cloneNode(true);

    return cardElement;
  }

  #checkId() {
    if (this.#userId !== this.#ownerId._id) {
      this.#buttonDelete.remove();
    }
  }

  #checkLike() {
    this.#likes.forEach((user) => {
      if(user._id === this.#userId) {
        this.addLike();
      } else {
        this.deleteLike();
      }
    });
  }

  addLike() {
    this.#buttonLike.classList.add("place__button-like_active");
  }

  deleteLike() {
    this.#buttonLike.classList.remove("place__button-like_active");
  }

  setCounter(counter) {
    this.#likeCounter.textContent = counter.likes.length
  }

  #openCard() {
    this.#handleCardClick({ name: this.#name, link: this.#link });
  }

  #setLikes() {
    if (this.#buttonLike.classList.contains("place__button-like_active")) {
      this.#handleDeleteLike()
    } else {
      this.#handleAddLike()
    }
  }

  #setEventListeners() {
    this.#buttonDelete.addEventListener("click", () => {
      this.#handleDeleteCard(this.#cardId);
    });

    this.#buttonLike.addEventListener("click", () => {
      this.#setLikes();
    });

    this.#cardImage.addEventListener("click", () => {
      this.#openCard();
    });
  }

  deleteCard() {
    this.#element.remove();
    this.#element = null;
  }

  generateCard() {
    this.#element = this.#getTemplate();

    this.#cardTitle = this.#element.querySelector(".place__title");
    this.#cardImage = this.#element.querySelector(".place__image");
    this.#buttonLike = this.#element.querySelector(".place__button-like");
    this.#buttonDelete = this.#element.querySelector(".place__button-delete");
    this.#likeCounter = this.#element.querySelector(".place__counter")
    this.#cardImage.src = this.#link;
    this.#cardTitle.textContent = this.#name;
    this.#cardImage.alt = `Фотография ${this.#name}`;
    this.#likeCounter.textContent = this.#likes.length;

    this.#setEventListeners();
    this.#checkId();
    this.#checkLike(this.#likes);
    

    return this.#element;
  }
}
