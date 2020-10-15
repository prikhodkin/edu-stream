import Turbolinks from "turbolinks";
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import Tabs from "%modules%/tabs/tabs"
import $ from "jquery";
Turbolinks.start();

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));


$(`.burger`).on(`click`, (evt) => {
  evt.preventDefault();
  $(`.burger__inner`).toggleClass(`burger__inner--active`);
  $(`.header__inner`).toggleClass(`header__inner--active`);
})


const subItems = document.querySelectorAll(`.navigation__sub-item`);
const dropdownItems = document.querySelectorAll(`.navigation__dropdown-item`);
const changeWidth = (item) => {
  item.style.width = item.offsetWidth + 3 + 'px';
}

subItems.forEach((item) => changeWidth(item));
dropdownItems.forEach((item) => changeWidth(item));