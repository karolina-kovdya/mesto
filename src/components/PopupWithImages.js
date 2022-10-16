import Popup from "./Popup.js";
import { cardTitle, cardPic } from "../utils/constants.js";

export default class PopupWithImages extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(data) {
    cardTitle.textContent = data.name;
    cardPic.src = data.link;
    super.open();
  }
}
