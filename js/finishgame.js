export const finishGame = (gameData, countdown, pauseCountdownCircle, countdownCircle, ask, generateRanking, rankingRows, usersPoints, restartQuestionPosition) => {

    if (!gameData.isGameOver) {
        clearInterval(countdown);
        pauseCountdownCircle(countdownCircle);
        ask.innerHTML = `<span class = 'letter'>Final</span><span class = 'letter-question'>Bien jugado ${gameData.username}! Has conseguido un total de ${gameData.answerPoints} puntos.</span>`;
        generateRanking(gameData, rankingRows, usersPoints);
        restartQuestionPosition();
        gameData.isGameOver = true;
    };
};