import { Module } from "../core/module";
import { random } from '../utils'

export class SoudModule extends Module {
    trigger() {
        const sounds = ["https://www.fesliyanstudios.com/play-mp3/366", "https://www.fesliyanstudios.com/play-mp3/4896", "https://www.fesliyanstudios.com/play-mp3/382", "https://www.fesliyanstudios.com/play-mp3/384", "https://www.fesliyanstudios.com/play-mp3/385"];
        const number = random(0, sounds.length - 1);
        const audio = new Audio(sounds[number]);
        audio.play()
    }
}

