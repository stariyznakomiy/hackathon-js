import { Module } from "../core/module";
import { random } from "../utils";

export class ShapeModule extends Module {
  constructor() {
    super("shape", "Случайная фигура");
  }
  trigger() {
    const shape = document.createElement("div");
    const width = random(30, 100);
    const height = random(30, 100);

    shape.style.width = `${width}px`;
    shape.style.height = `${height}px`;
    shape.style.borderRadius = "50%";
    shape.style.backgroundColor = `rgb(${random(0, 255)}, ${random(
      0,
      255
    )}, ${random(0, 255)})`;
    shape.style.top = `${random(0, window.innerHeight - height)}px`;
    shape.style.left = `${random(0, window.innerWidth - width)}px`;
    shape.style.position = "absolute";

    document.body.append(shape);

    setTimeout(() => shape.remove(), 3000);
  }
}
