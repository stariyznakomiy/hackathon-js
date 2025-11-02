import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ShapeModule } from "./modules/shape.module";

const menu = new ContextMenu("#menu");

menu.add(new BackgroundModule());
menu.add(new ShapeModule());

document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  menu.open(event);
});
