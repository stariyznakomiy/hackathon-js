import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";
import { SoudModule } from "./modules/sound_module";
import { CustomModule } from "./modules/custom.module";
import { TimeModule } from "./modules/time.module";

import "./styles.css";

document.addEventListener("DOMContentLoaded", function () {
    const menu = new ContextMenu("#menu");
    menu.add(new ClicksModule("clicks-module", "Считать клики (за 3 секунды)"));
    menu.add(new ShapeModule("shape-module", "Создать фигуру"));
    menu.add(new BackgroundModule("background-module", "Поменять цвет"));
    menu.add(new SoudModule("soud-module", "случайный звук"));
    menu.add(new CustomModule("custom-module", "Кастомный модуль"));
    menu.add(new TimeModule("time-module", "таймер"))
});
