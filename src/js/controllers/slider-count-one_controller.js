import { Controller } from "stimulus";
import { tns } from "tiny-slider/src/tiny-slider"

export default class extends Controller {
  static targets = [ "prev", "next", "list", "current", "length" ]

  connect() {
    if(this.element && window.matchMedia('(max-width: 1050px)').matches) {
      this.init();
    }
  }

  init() {
    const slider = tns({
      container: this.listTarget,
      items: 1,
      nav: false,
      slideBy: 'page',
      autoplay: false,
      nextButton: this.nextTarget,
      prevButton: this.prevTarget,
    });

    this.currentTarget.innerHTML = slider.getInfo().displayIndex;
    this.lengthTarget.innerHTML = slider.getInfo().slideCount;
    this.counter(this.nextTarget, slider);
    this.counter(this.prevTarget, slider);
  }

  counter(target, slider) {
    target.addEventListener(`click`, () => {
      this.currentTarget.innerHTML = slider.getInfo().displayIndex;
    })
  }
}
