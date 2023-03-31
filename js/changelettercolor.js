import { getSelectedLetter, letters } from "./registerqueryselector.js";
import { gameData } from "./app.js";

const selectLetter = (letterPosition) =>
  letterPosition.classList.add("selected-letter");

const deselectLetter = () => {
  if (!gameData.isGameOver)
    getSelectedLetter().classList.remove("selected-letter");
};

const changeLetterColor = (isCorrectAnswer, letterPosition) =>
  isCorrectAnswer
    ? letterPosition.classList.add("correct-letter")
    : letterPosition.classList.add("failed-letter");

const restartLettersColor = () => {
  letters.forEach((letter) => {
    letter.classList.remove("failed-letter");
    letter.classList.remove("correct-letter");
  });
};

export { selectLetter, deselectLetter, restartLettersColor, changeLetterColor };
