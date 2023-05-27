/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/popover/popover.js
class Popover {
  constructor() {
    this.popover = [];
    this.showPopover = this.showPopover.bind(this);
    this.removePopover = this.removePopover.bind(this);
  }
  showPopover(element) {
    let title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Popover title";
    let content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "And here's some amazing content. It's very engaging. Right?";
    const popover = document.createElement("DIV");
    popover.classList.add("popover");
    const popoverTitle = document.createElement("DIV");
    popoverTitle.classList.add("popover-title");
    popoverTitle.textContent = title;
    const popoverText = document.createElement("DIV");
    popoverText.classList.add("popover-text");
    popoverText.textContent = content;
    const id = performance.now();
    this.popover.push({
      id,
      element: popover
    });
    popover.appendChild(popoverTitle);
    popover.append(popoverText);
    document.body.appendChild(popover);
    const {
      top,
      left
    } = element.getBoundingClientRect();
    popover.style.top = top - popover.offsetHeight - 9 + "px";
    popover.style.left = left + element.offsetWidth - element.offsetWidth / 2 - popover.offsetWidth / 2 + "px";
    return id;
  }
  removePopover(id) {
    const target = this.popover.find(el => el.id === id);
    target.element.remove();
    this.popover = this.popover.filter(el => el.id !== id);
  }
}
;// CONCATENATED MODULE: ./src/js/popover/button.js

class Button {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this.element = element;
    this.onClickButton = this.onClickButton.bind(this);
    this.popovers = [];
    this.element.addEventListener("click", this.onClickButton);
  }
  onClickButton(e) {
    e.preventDefault();
    if (this.popovers.length > 0) {
      let targetId = this.popovers[0].popover[0].id;
      this.popovers[0].removePopover(targetId);
      this.popovers = [];
    } else {
      let popover = new Popover();
      popover.showPopover(this.element);
      this.popovers.push(popover);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  new Button(".btn");
});
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;