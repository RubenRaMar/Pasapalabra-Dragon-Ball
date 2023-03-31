import { backgroundImage } from "./queryselector.js";

const changeBackgroundImage = () => (backgroundImage.classList.remove('background-image')) + (backgroundImage.classList.add('tournament-background-image'));

const restartBackgroundImage = () => (backgroundImage.classList.remove('tournament-background-image')) + (backgroundImage.classList.add('background-image'));

export { changeBackgroundImage, restartBackgroundImage };