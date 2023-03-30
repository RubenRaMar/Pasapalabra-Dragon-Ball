let countdown;

const startCountdown = (countdownNumber, secondsOfGame, deselectLetter, gameData, getSelectedLetter, finishGame, countdownCircle, ask, usersPoints, restartQuestionPosition) => {

    countdownNumber.innerHTML = secondsOfGame;

    countdown = setInterval(() => {

        secondsOfGame -= 1;
        countdownNumber.innerHTML = secondsOfGame;

        if (+countdownNumber.innerHTML === 0) {
            clearInterval(countdown);
            deselectLetter(gameData.isGameOver, getSelectedLetter);
            finishGame(gameData, countdown, pauseCountdownCircle, countdownCircle, ask, usersPoints, restartQuestionPosition);
        };
    }, 1000);
};

const startCountdownCircle = (countdownCircle) => countdownCircle.classList.remove('circle-paused');

const pauseCountdownCircle = (countdownCircle) => countdownCircle.classList.add('circle-paused');

export { startCountdown, startCountdownCircle, pauseCountdownCircle, countdown };