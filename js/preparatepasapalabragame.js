import { registerPasapalabraGameEventListeners } from "./registereventlisteners.js";
import { startCountdown, startCountdownCircle } from "./countdown.js";
import { generateUpperCamelCase } from "./generateupperCamelCase.js";
import { changeBackgroundImage } from "./changebackgroundimage.js";
import { chooseQuestionForEachLetter } from "./questions.js";
import { countdownNumber } from "./queryselector.js";

export const preparePasapalabraGame = (hideElementContent, showElementContent, welcomeScreen, classificationContainer, pasapalabraContainer, backgroundImage, countdownCircle, ask, gameData, usernameInput, deselectLetter, getSelectedLetter, finishGame, restartQuestionPosition, usersPoints, pasapalabra, check, handleDownButtonPasapalabra, handleUpbuttonPasapalabra, handleDownButtonCheck, handleUpbuttonCheck, startNextTurn, userAnswerInput, countdown) => {

    let secondsOfPreparation = 3;
    let secondsOfGame = 180;

    countdownNumber.innerHTML = secondsOfGame;

    hideElementContent(welcomeScreen);
    hideElementContent(classificationContainer);
    showElementContent(pasapalabraContainer);
    changeBackgroundImage(backgroundImage);
    startCountdownCircle(countdownCircle);
    chooseQuestionForEachLetter();

    ask.innerHTML = `<span class = 'letter'>Preparate</span><span class = 'letter-question'>${secondsOfPreparation}</span>`;

    const preparationTime = setInterval(() => {

        --secondsOfPreparation;

        ask.innerHTML = `<span class = 'letter'>Preparate</span><span class = 'letter-question'>${secondsOfPreparation}</span>`;

        if (secondsOfPreparation <= 0) {
            gameData.username = (generateUpperCamelCase(usernameInput.value));
            usernameInput.value = '';
            gameData.isGameOver = false;
            startCountdown(countdownNumber, secondsOfGame, deselectLetter, gameData, getSelectedLetter, finishGame, countdownCircle, ask, usersPoints, restartQuestionPosition);
            registerPasapalabraGameEventListeners(pasapalabra, check, handleDownButtonPasapalabra, handleUpbuttonPasapalabra, handleDownButtonCheck, handleUpbuttonCheck);
            startNextTurn(userAnswerInput, ask, finishGame, gameData, countdown, countdownCircle, usersPoints, restartQuestionPosition);
            clearInterval(preparationTime);
        }
    }, 1000);
};