import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import Tabs from "%modules%/tabs/tabs"
import $ from "jquery";
import { tns } from "tiny-slider/src/tiny-slider"
const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
global.jQuery = $;

require ("@fancyapps/fancybox/dist/jquery.fancybox");

$('[data-fancybox]').fancybox({
  protect: true
});

$(`.burger`).on(`click`, (evt) => {
  evt.preventDefault();
  $(`.burger__inner`).toggleClass(`burger__inner--active`);
  $(`.header__inner`).toggleClass(`header__inner--active`);
})


const subItems = document.querySelectorAll(`.navigation__sub-item`);
const dropdownItems = document.querySelectorAll(`.navigation__dropdown-item`);
const changeWidth = (item) => {
  item.style.width = item.offsetWidth + 5 + 'px';
}

subItems.forEach((item) => changeWidth(item));
dropdownItems.forEach((item) => changeWidth(item));

const tabs = document.querySelectorAll(`[data-tabs]`);

if(tabs) {
  tabs.forEach((item) => new Tabs(item));
}

