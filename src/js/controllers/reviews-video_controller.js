import { Controller } from "stimulus";
import { tns } from "tiny-slider/src/tiny-slider"

export default class extends Controller {
  static targets = [ "prev", "next", "list" ]

  connect() {
    this.init();
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
          items: 2,
          nav: false,
        }
      },
    });
  }

}
