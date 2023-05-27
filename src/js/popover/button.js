import Popover from "./popover";

export default class Button {
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
