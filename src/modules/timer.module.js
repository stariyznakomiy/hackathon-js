import { Module } from "../core/module";

export class TimerModule extends Module {
    trigger() {
        let time = Number(prompt("Введите количество секунд").trim());
        if (isNaN(time) || time <= 0) return alert("Вы ввели не число или число меньше 1");

        const timerDisplay = document.createElement("div");
        timerDisplay.style.fontSize = "48px";
        timerDisplay.style.fontWeight = "bold";
        timerDisplay.style.textAlign = "center";
        timerDisplay.style.padding = "20px";
        timerDisplay.textContent = time;

        document.body.appendChild(timerDisplay);

        const timerInterval = setInterval(() => {
            time--;
            timerDisplay.textContent = time;
            if (time <= 0) {
                clearInterval(timerInterval);
                timerDisplay.remove();
                setTimeout(() => {
                    alert("Время вышло!");
                }, 100);
            }
        }, 1000);
    }
}
