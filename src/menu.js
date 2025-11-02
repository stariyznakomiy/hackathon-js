import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  open(event) {
    const x = event.clientX;
    const y = event.clientY;

    this.el.style.display = "block";
    this.el.style.left = `${x}px`;
    this.el.style.top = `${y}px`;
  }

  close() {
    this.el.style.display = "none";
  }

  add(module) {
    const html = module.toHTML();

    const div = document.createElement("div");
    div.innerHTML = html;

    const menuItem = div.firstChild;
    this.el.appendChild(menuItem);

    menuItem.addEventListener("click", () => {
      module.trigger();
    });
  }
}
