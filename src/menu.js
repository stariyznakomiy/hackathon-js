import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);

        document.body.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            this.open(event);
        });
    }

    open(event) {
        this.el.style.display = "block";
        this.el.style.top = `${event.clientY}px`;
        this.el.style.left = `${event.clientX}px`;
    }

    close() {
        this.el.style.display = "none";
    }

    add(module) {
        const moduleElement = module.toHTML();
        this.el.insertAdjacentHTML("beforeend", moduleElement);
        const newElement = this.el.querySelector(`[data-type="${module.type}"]`);
        newElement.addEventListener("click", () => {
            module.trigger();
            this.close();
        });
    }
}
