import { countdown, pauseCountdownCircle } from "./countdown.js";
import { restartQuestionPosition } from "./startnextturn.js";
import { generateRanking } from "./generateranking.js";
import { ask } from "./registerqueryselector.js";
import { gameData } from "./app.js";

const finishGame = () => {
  if (!gameData.isGameOver) {
    clearInterval(countdown);
    pauseCountdownCircle();
    ask.innerHTML = `<span class = 'letter'>Final</span><span class = 'letter-question'>Bien jugado ${gameData.username}! Has conseguido un total de ${gameData.answerPoints} puntos.</span>`;
    generateRanking(gameData);
    restartQuestionPosition();
    gameData.isGameOver = true;
  }
};

export { finishGame };
