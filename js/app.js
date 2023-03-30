import { closeClassificationButton, pasapalabraContainer, classificationContainer, countdownCircle, classificationButton, pasapalabraImage, countdownNumber, backgroundImage, usernameInput, confirmAvatar, restartButton, welcomeScreen, circleAvatar, menuButton, stopButton, pasapalabra, checkImage, userAnswerInput, avatars, ask, options, letters, check, getLetterPosition, getSelectedLetter } from './queryselector.js';
import { startNextTurn, restartQuestionPosition } from './startnextturn.js';
import { handleShowOptionsMenu, handleHideOptionsMenu, handleOpenClassification, handleCloseClassification } from './optionsmenu.js';
import { registerWelcomeScreenEventsLinteners, registerPasapalabraGameEventListeners } from './registereventlisteners.js';
import { restartAvatarClasses, chooseAvatar } from './chooseavatar.js';
import { startCountdown, startCountdownCircle, countdown } from './countdown.js';
import { changeBackgroundImage, restartBackgroundImage } from './changebackgroundimage.js';
import { hideElementContent, showElementContent } from './showandhideelementcontent.js';
import { deselectLetter, restartLettersColor } from './changelettercolor.js';
import { restartQuestions, chooseQuestionForEachLetter } from './questions.js';
import { generateUpperCamelCase } from './generateupperCamelCase.js';
import { processUserAnswer } from './processuseranswer.js';
import { removeButtons } from './removebuttons.js';
import { finishGame } from './finishgame.js';

let usersPoints = [];

const gameData = {
    username: '',
    answerPoints: 0,
    isGameOver: true,
}

const handleStopGame = () => {
    if (!gameData.isGameOver) {
        deselectLetter(gameData, getSelectedLetter);
        finishGame(gameData, countdown, countdownCircle, ask, usersPoints, restartQuestionPosition);
    };
};

const handleRestartGame = () => {
    if (gameData.username) {
        removeButtons(menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, pasapalabra, check, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handleDownButtonPasapalabra, handleUpbuttonPasapalabra, handleDownButtonCheck, handleUpbuttonCheck);
        registerWelcomeScreenEventsLinteners(menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, addEventListener, confirmAvatar, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handlechooseAvatar);
        hideElementContent(classificationContainer);
        hideElementContent(options);
        hideElementContent(pasapalabraContainer);
        showElementContent(welcomeScreen);
        restartAvatarClasses(avatars, circleAvatar);
        restartBackgroundImage(backgroundImage);
        restartLettersColor(letters);
        restartQuestionPosition();
        restartQuestions();
        deselectLetter(gameData, getSelectedLetter);
        clearInterval(countdown);
        gameData.isGameOver = true;
        userAnswerInput.value = '';
        gameData.answerPoints= 0;
        gameData.username = '';
        chooseAvatar(avatars, circleAvatar);
    };
};

const handlechooseAvatar = (keypress) => {
    if (keypress.key === 'Enter' || keypress.type === 'mousedown') {
        if (!circleAvatar.src.includes("empty") && usernameInput.value) {
            removeEventListener('keydown', handlechooseAvatar);
            confirmAvatar.removeEventListener('mousedown', handlechooseAvatar);
            return preparePasapalabraGame();
        };
    };
};

const handleDownButtonCheck = (keypress) => {
    if (gameData.isGameOver) return check.removeEventListener('mousedown', handleDownButtonCheck);
    if (keypress.key === 'Enter' || keypress.type === 'mousedown') {
        checkImage.src = 'images/checked.png';

        processUserAnswer(userAnswerInput, gameData, deselectLetter, getSelectedLetter);
        startNextTurn(userAnswerInput, getLetterPosition, ask, finishGame, gameData, countdown, countdownCircle, usersPoints, restartQuestionPosition);
    };
};

const handleUpbuttonCheck = () => checkImage.src = 'images/check.png';

const handleDownButtonPasapalabra = () => {
    if (gameData.isGameOver) return pasapalabra.removeEventListener('mousedown', handleDownButtonPasapalabra);
    pasapalabraImage.src = 'images/pasapalabred.png';

    deselectLetter(gameData, getSelectedLetter);
    startNextTurn(userAnswerInput, getLetterPosition, ask, finishGame, gameData, countdown, countdownCircle, usersPoints, restartQuestionPosition);
};

const handleUpbuttonPasapalabra = () => pasapalabraImage.src = 'images/pasapalabra.png';

const preparePasapalabraGame = () => {

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
            startNextTurn(userAnswerInput, getLetterPosition, ask, finishGame, gameData, countdown, countdownCircle, usersPoints, restartQuestionPosition);
            clearInterval(preparationTime);
        }
    }, 1000);
};

registerWelcomeScreenEventsLinteners(menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, addEventListener, confirmAvatar, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handlechooseAvatar);
chooseAvatar(avatars, circleAvatar);