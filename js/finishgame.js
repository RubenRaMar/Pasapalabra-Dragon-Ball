import { generateRanking } from './generateranking.js';
import { pauseCountdownCircle } from './countdown.js';


export const finishGame = (gameData, countdown, countdownCircle, ask, restartQuestionPosition) => {

    if (!gameData.isGameOver) {
        clearInterval(countdown);
        pauseCountdownCircle(countdownCircle);
        ask.innerHTML = `<span class = 'letter'>Final</span><span class = 'letter-question'>Bien jugado ${gameData.username}! Has conseguido un total de ${gameData.answerPoints} puntos.</span>`;
        generateRanking(gameData);
        restartQuestionPosition();
        gameData.isGameOver = true;
    };
};