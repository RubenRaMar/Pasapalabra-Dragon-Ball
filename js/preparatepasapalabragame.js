import { ask, classificationContainer, countdownNumber, pasapalabraContainer, usernameInput, welcomeScreen } from "./registerqueryselector.js";
import { hideElementContent, showElementContent } from "./showandhideelementcontent.js";
import { registerPasapalabraGameEventListeners } from "./registerbuttons.js";
import { startCountdown, startCountdownCircle } from "./countdown.js";
import { generateUpperCamelCase } from "./generateupperCamelCase.js";
import { chooseQuestionForEachLetter } from "./getquestiondata.js";
import { changeBackgroundImage } from "./changebackgroundimage.js"
import { startNextTurn } from "./startnextturn.js";
import { gameData } from "./app.js";

const preparePasapalabraGame = () => {

    let secondsOfPreparation  = 3;
    let secondsOfGame         = 180;

    countdownNumber.innerHTML = secondsOfGame;
    hideElementContent(classificationContainer);
    showElementContent(pasapalabraContainer);
    hideElementContent(welcomeScreen);
    chooseQuestionForEachLetter();
    changeBackgroundImage();
    startCountdownCircle();

    ask.innerHTML = `<span class = 'letter'>Preparate</span><span class = 'letter-question'>${secondsOfPreparation}</span>`;

    const preparationTime = setInterval(() => {

        --secondsOfPreparation;

        ask.innerHTML = `<span class = 'letter'>Preparate</span><span class = 'letter-question'>${secondsOfPreparation}</span>`;

        if (secondsOfPreparation <= 0) {
            gameData.username = (generateUpperCamelCase(usernameInput.value));
            registerPasapalabraGameEventListeners();
            clearInterval(preparationTime);
            startCountdown(secondsOfGame);
            gameData.isGameOver = false;
            usernameInput.value = '';
            startNextTurn();
        }
    }, 1000);
};

export { preparePasapalabraGame };