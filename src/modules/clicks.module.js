import { Module } from '../core/module'

export class ClicksModule extends Module {
 

  trigger() {
    alert('Таймер запущен (5 сек)! Делайте клики!');

    let counterAllClicks = -1;
    let counterDoubleClicks = 0;

    const click1Handler = () => {
      counterAllClicks++;
    };

    const click2Handler = () => {
      counterDoubleClicks++;
    };

    document.addEventListener('click', click1Handler);
    document.addEventListener('dblclick', click2Handler);

    setTimeout(() => {
      document.removeEventListener('click', click1Handler);
      document.removeEventListener('dblclick', click2Handler);

      alert(`Всего кликов - ${counterAllClicks}, в том числе ${counterDoubleClicks} двойных!`);
    }, 5000);
  }
}