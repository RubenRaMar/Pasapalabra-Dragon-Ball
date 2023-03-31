import { countdownCircle, countdownNumber } from "./registerqueryselector.js";
import { deselectLetter } from "./changelettercolor.js";
import { finishGame } from "./finishgame.js";

let countdown;

const startCountdown = (secondsOfGame) => {
  countdownNumber.innerHTML = secondsOfGame;

  countdown = setInterval(() => {
    secondsOfGame -= 1;
    countdownNumber.innerHTML = secondsOfGame;

    if (+countdownNumber.innerHTML === 0) {
      clearInterval(countdown);
      deselectLetter();
      finishGame();
    }
  }, 1000);
};

const startCountdownCircle = () =>
  countdownCircle.classList.remove("circle-paused");

const pauseCountdownCircle = () =>
  countdownCircle.classList.add("circle-paused");

export {
  startCountdown,
  startCountdownCircle,
  pauseCountdownCircle,
  countdown,
};
