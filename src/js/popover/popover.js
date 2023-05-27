export default class Popover {
  constructor() {
    this.popover = [];

    this.showPopover = this.showPopover.bind(this);
    this.removePopover = this.removePopover.bind(this);
  }

  showPopover(
    element,
    title = "Popover title",
    content = "And here's some amazing content. It's very engaging. Right?"
  ) {
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
      element: popover,
    });

    popover.appendChild(popoverTitle);
    popover.append(popoverText);
    document.body.appendChild(popover);

    const { top, left } = element.getBoundingClientRect();
    popover.style.top = top - popover.offsetHeight - 9 + "px";
    popover.style.left =
      left +
      element.offsetWidth -
      element.offsetWidth / 2 -
      popover.offsetWidth / 2 +
      "px";

    return id;
  }

  removePopover(id) {
    const target = this.popover.find((el) => el.id === id);

    target.element.remove();

    this.popover = this.popover.filter((el) => el.id !== id);
  }
}
