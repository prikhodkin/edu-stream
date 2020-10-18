import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ `more`]


  connect() {
    this.init();
  }

  init() {
    this.moreTarget.addEventListener(`click`, () => {
      this.element.classList.add(`free-lessons__card--active`);
    })
  }
}
