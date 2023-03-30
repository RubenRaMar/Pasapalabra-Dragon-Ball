import { closeClassificationButton, rankingRows, pasapalabraContainer, classificationContainer, countdownCircle, classificationButton, pasapalabraImage, countdownNumber, backgroundImage, usernameInput, confirmAvatar, restartButton, welcomeScreen, circleAvatar, menuButton, stopButton, pasapalabra, checkImage, userAnswerInput, avatars, ask, options, letters, check, getLetterPosition, getSelectedLetter } from './queryselector.js';
import { startNextTurn, choosenQuestion, choosenQuestionIndex, letterPosition, restartQuestionPosition } from './startnextturn.js';
import { handleShowOptionsMenu, handleHideOptionsMenu, handleOpenClassification, handleCloseClassification } from './optionsmenu.js';
import { registerWelcomeScreenEventsLinteners, registerPasapalabraGameEventListeners } from './registereventlisteners.js';
import { restartAvatarClasses, getAvatarAndUsername, generateUpperCamelCase } from './avatarandusername.js';
import { startCountdown, startCountdownCircle, pauseCountdownCircle, countdown }from './countdown.js';
import { checkIfTheAnswerIsCorrect, getAnwerPoints, changeLetterColor } from './processanswer.js';
import { changeBackgroundImage, restartBackgroundImage } from './changebackgroundimage.js';
import { hideElementContent, showElementContent } from './showandhideelementcontent.js';
import { selectLetter, deselectLetter, restartLettersColor } from './changelettercolor.js';
import { chooseQuestionForEachLetter } from './choosequestionforeachletter.js';
import { questions, restartQuestions } from './questions.js';
import { processUserAnswer } from './processuseranswer.js';
import { generateRanking } from './generateranking.js';
import { removeButtons } from './removebuttons.js';
import { askAQuestion } from './askaquetion.js';
import { finishGame } from './finishgame.js';

let usersPoints = [];

const startPasapalabraGame = () => {

    const gameData     = {
        username: '',
        answerPoints: 0,
        isGameOver: true,
    }

    const handleStopGame = () => {
        if (!gameData.isGameOver) deselectLetter(gameData, getSelectedLetter);
        finishGame(gameData, countdown, pauseCountdownCircle, countdownCircle, ask, generateRanking, rankingRows, usersPoints, restartQuestionPosition);
    };

    const handleRestartGame = () => {
        if (gameData.username) {
            removeButtons(menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, pasapalabra, check, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handleDownButtonPasapalabra, handleUpbuttonPasapalabra, handleDownButtonCheck, handleUpbuttonCheck);
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
            userAnswerInput.value = '';
            clearInterval(countdown);
            gameData.isGameOver = true;
            startPasapalabraGame();
        };
    };

    const handleSetAvatarAndUsername = (keypress) => {
        if (keypress.key === 'Enter' || keypress.type === 'mousedown') {
            if (!circleAvatar.src.includes("empty") && usernameInput.value) {
                removeEventListener('keydown', handleSetAvatarAndUsername);
                confirmAvatar.removeEventListener('mousedown', handleSetAvatarAndUsername);

                gameData.username = (generateUpperCamelCase(usernameInput.value));
                return preparePasapalabraGame();
            };
        };
    };

    const handleDownButtonCheck = (keypress) => {
        if (gameData.isGameOver) return check.removeEventListener('mousedown', handleDownButtonCheck);
        if (keypress.key === 'Enter' || keypress.type === 'mousedown') {
            checkImage.src = 'images/checked.png';
            
            processUserAnswer(checkIfTheAnswerIsCorrect, choosenQuestion, choosenQuestionIndex, userAnswerInput, gameData, changeLetterColor, letterPosition, getAnwerPoints, deselectLetter, getSelectedLetter);     
            startNextTurn(userAnswerInput, getLetterPosition, questions, askAQuestion, ask, selectLetter, finishGame, gameData, countdown, pauseCountdownCircle, countdownCircle, generateRanking, rankingRows, usersPoints, restartQuestionPosition);
        };
    };

    const handleUpbuttonCheck = () => checkImage.src = 'images/check.png';

    const handleDownButtonPasapalabra = () => {
        if (gameData.isGameOver) return pasapalabra.removeEventListener('mousedown', handleDownButtonPasapalabra);
        pasapalabraImage.src = 'images/pasapalabred.png';

        deselectLetter(gameData, getSelectedLetter);
        startNextTurn(userAnswerInput, getLetterPosition, questions, askAQuestion, ask, selectLetter, finishGame, gameData, countdown, pauseCountdownCircle, countdownCircle, generateRanking, rankingRows, usersPoints, restartQuestionPosition);
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
        chooseQuestionForEachLetter(questions);

        ask.innerHTML = `<span class = 'letter'>Preparate</span><span class = 'letter-question'>${secondsOfPreparation}</span>`;

        const preparationTime = setInterval(() => {

            --secondsOfPreparation;

            ask.innerHTML = `<span class = 'letter'>Preparate</span><span class = 'letter-question'>${secondsOfPreparation}</span>`;

            if (secondsOfPreparation <= 0) {
                gameData.isGameOver = false;
                startCountdown(countdownNumber, secondsOfGame, deselectLetter, gameData, getSelectedLetter, finishGame, countdownCircle, ask, generateRanking, rankingRows, usersPoints, restartQuestionPosition);
                registerPasapalabraGameEventListeners(pasapalabra, check, handleDownButtonPasapalabra, handleUpbuttonPasapalabra, handleDownButtonCheck, handleUpbuttonCheck);
                startNextTurn(userAnswerInput, getLetterPosition, questions, askAQuestion, ask, selectLetter, finishGame, gameData, countdown, pauseCountdownCircle, countdownCircle, generateRanking, rankingRows, usersPoints, restartQuestionPosition);
                clearInterval(preparationTime);
            }
        }, 1000);
    };

    registerWelcomeScreenEventsLinteners(menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, addEventListener, confirmAvatar, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handleSetAvatarAndUsername);
    getAvatarAndUsername(usernameInput, avatars, circleAvatar);
};

startPasapalabraGame();