import { Controller } from "stimulus";
import { tns } from "tiny-slider/src/tiny-slider"

export default class extends Controller {
  static targets = [ "prev", "next", "list" ]

  connect() {
    this.init();

    const items = this.listTarget.querySelectorAll(`.reviews__item`);

    items.forEach((item) => this.showMore(item));
  }

  init() {
    const slider = tns({
      container: this.listTarget,
      items: 1,
      nav: true,
      navPosition: `bottom`,
      slideBy: 'page',
      autoplay: false,
      nextButton: this.nextTarget,
      prevButton: this.prevTarget,
      responsive: {
        1000: {
          items: 2
        }
      },
    });
  }

  showMore(item) {
    const button = item.querySelector(`.reviews__more`);

    button.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      item.classList.toggle(`reviews__item--active`);
    })
  }

}
