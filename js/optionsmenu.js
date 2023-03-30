
import { closeClassificationButton, pasapalabraContainer, classificationContainer, countdownCircle, classificationButton, backgroundImage, confirmAvatar, restartButton, welcomeScreen, circleAvatar, menuButton, stopButton, pasapalabra, userAnswerInput, ask, options, check, getSelectedLetter } from './queryselector.js';
import { gameData, handleDownButtonCheck, handleUpbuttonCheck, handleDownButtonPasapalabra,  handleUpbuttonPasapalabra } from "./app.js";
import { hideElementContent, showElementContent } from './showandhideelementcontent.js';
import { registerWelcomeScreenEventsLinteners } from './registereventlisteners.js';
import { deselectLetter, restartLettersColor } from './changelettercolor.js';
import { restartAvatarClasses, chooseAvatar, handleChooseAvatar } from './getavatarchoose.js';
import { restartBackgroundImage } from './changebackgroundimage.js';
import { restartQuestionPosition } from './startnextturn.js';
import { removeButtons } from './removebuttons.js';
import { restartQuestions } from './questions.js';
import { finishGame } from './finishgame.js';
import { countdown } from './countdown.js';


const handleOpenClassification  = () => showElementContent(classificationContainer);

const handleCloseClassification = () => hideElementContent(classificationContainer);

const handleShowOptionsMenu     = () => showElementContent(options);

const handleHideOptionsMenu     = () => hideElementContent(options);

const handleStopGame = () => {
    if (!gameData.isGameOver) {
        deselectLetter(gameData, getSelectedLetter);
        finishGame(gameData, countdown, countdownCircle, ask, restartQuestionPosition);
    };
};

const handleRestartGame = () => {
    if (gameData.username) {
        removeButtons(menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, pasapalabra, check, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handleDownButtonPasapalabra, handleUpbuttonPasapalabra, handleDownButtonCheck, handleUpbuttonCheck);
        registerWelcomeScreenEventsLinteners(menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, addEventListener, confirmAvatar, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handleChooseAvatar);
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

export { handleShowOptionsMenu, handleHideOptionsMenu, handleOpenClassification, handleCloseClassification, handleStopGame, handleRestartGame };