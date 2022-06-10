import audioFile from "../sounds/CLICK_SOUND.mp3";

export function PlaySound() {
    const audio = new Audio();
    audio.src = audioFile;
    audio.autoplay = true;
}