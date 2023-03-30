import { closeClassificationButton, pasapalabraContainer, classificationContainer, countdownCircle, classificationButton, pasapalabraImage, backgroundImage, usernameInput, confirmAvatar, restartButton, welcomeScreen, circleAvatar, menuButton, stopButton, pasapalabra, checkImage, userAnswerInput, ask, options, check, getSelectedLetter } from './queryselector.js';
import { handleShowOptionsMenu, handleHideOptionsMenu, handleOpenClassification, handleCloseClassification } from './optionsmenu.js';
import { registerWelcomeScreenEventsLinteners } from './registereventlisteners.js';
import { countdown } from './countdown.js';
import { restartBackgroundImage } from './changebackgroundimage.js';
import { hideElementContent, showElementContent } from './showandhideelementcontent.js';
import { deselectLetter, restartLettersColor } from './changelettercolor.js';
import { restartQuestions } from './questions.js';
import { startNextTurn, restartQuestionPosition } from './startnextturn.js';
import { restartAvatarClasses, chooseAvatar } from './chooseavatar.js';
import { preparePasapalabraGame } from './preparatepasapalabragame.js';
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
        restartAvatarClasses(circleAvatar);
        restartBackgroundImage(backgroundImage);
        restartLettersColor();
        restartQuestionPosition();
        restartQuestions();
        deselectLetter(gameData, getSelectedLetter);
        clearInterval(countdown);
        gameData.isGameOver = true;
        userAnswerInput.value = '';
        gameData.answerPoints= 0;
        gameData.username = '';
        chooseAvatar(circleAvatar);
    };
};

const handlechooseAvatar = (keypress) => {
    if (keypress.key === 'Enter' || keypress.type === 'mousedown') {
        if (!circleAvatar.src.includes("empty") && usernameInput.value) {
            removeEventListener('keydown', handlechooseAvatar);
            confirmAvatar.removeEventListener('mousedown', handlechooseAvatar);
            return preparePasapalabraGame(hideElementContent, showElementContent, welcomeScreen, classificationContainer, pasapalabraContainer, backgroundImage, countdownCircle, ask, gameData, usernameInput, deselectLetter, getSelectedLetter, finishGame, restartQuestionPosition, usersPoints, pasapalabra, check, handleDownButtonPasapalabra, handleUpbuttonPasapalabra, handleDownButtonCheck, handleUpbuttonCheck, startNextTurn, userAnswerInput, countdown);
        };
    };
};

const handleDownButtonCheck = (keypress) => {
    if (gameData.isGameOver) return check.removeEventListener('mousedown', handleDownButtonCheck);
    if (keypress.key === 'Enter' || keypress.type === 'mousedown') {
        checkImage.src = 'images/checked.png';

        processUserAnswer(userAnswerInput, gameData, deselectLetter, getSelectedLetter);
        startNextTurn(userAnswerInput, ask, finishGame, gameData, countdown, countdownCircle, usersPoints, restartQuestionPosition);
    };
};

const handleUpbuttonCheck = () => checkImage.src = 'images/check.png';

const handleDownButtonPasapalabra = () => {
    if (gameData.isGameOver) return pasapalabra.removeEventListener('mousedown', handleDownButtonPasapalabra);
    pasapalabraImage.src = 'images/pasapalabred.png';

    deselectLetter(gameData, getSelectedLetter);
    startNextTurn(userAnswerInput, ask, finishGame, gameData, countdown, countdownCircle, usersPoints, restartQuestionPosition);
};

const handleUpbuttonPasapalabra = () => pasapalabraImage.src = 'images/pasapalabra.png';

registerWelcomeScreenEventsLinteners(menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, addEventListener, confirmAvatar, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handlechooseAvatar);
chooseAvatar(circleAvatar);