import { closeClassificationButton, countdownCircle, classificationButton, pasapalabraImage, confirmAvatar, restartButton, circleAvatar, menuButton, stopButton, pasapalabra, checkImage, userAnswerInput, ask, check, getSelectedLetter } from './queryselector.js';
import { handleShowOptionsMenu, handleHideOptionsMenu, handleOpenClassification, handleCloseClassification, handleStopGame, handleRestartGame } from './optionsmenu.js';
import { registerWelcomeScreenEventsLinteners } from './registereventlisteners.js';
import { countdown } from './countdown.js';
import { deselectLetter } from './changelettercolor.js';
import { startNextTurn, restartQuestionPosition } from './startnextturn.js';
import { chooseAvatar, handleChooseAvatar } from './chooseavatar.js';
import { processUserAnswer } from './processuseranswer.js';
import { finishGame } from './finishgame.js';

let usersPoints = [];

const gameData = {
    username: '',
    answerPoints: 0,
    isGameOver: true,
}

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

registerWelcomeScreenEventsLinteners(menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, addEventListener, confirmAvatar, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handleChooseAvatar);
chooseAvatar(circleAvatar);

export { gameData , handleDownButtonCheck, handleUpbuttonCheck, handleDownButtonPasapalabra,  handleUpbuttonPasapalabra, usersPoints };