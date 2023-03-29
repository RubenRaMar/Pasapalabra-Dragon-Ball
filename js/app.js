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

let usersPoints = [];

const startPasapalabraGame = () => {

    let gameOver     = true;
    let answerPoints = 0
    let username;

    const handleStopGame = () => {
        if (!gameOver) deselectLetter(gameOver, getSelectedLetter);
        finishGame();
    };

    const handleRestartGame = () => {
        if (username) {
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
            deselectLetter(gameOver, getSelectedLetter);
            userAnswerInput.value = '';
            clearInterval(countdown);
            gameOver = true;
            startPasapalabraGame();
        };
    };

    const handleSetAvatarAndUsername = (keypress) => {
        if (keypress.key === 'Enter' || keypress.type === 'mousedown') {
            if (!circleAvatar.src.includes("empty") && usernameInput.value) {
                removeEventListener('keydown', handleSetAvatarAndUsername);
                confirmAvatar.removeEventListener('mousedown', handleSetAvatarAndUsername);

                username = (generateUpperCamelCase(usernameInput.value));
                return preparePasapalabraGame();
            };
        };
    };

    const handleDownButtonCheck = (keypress) => {
        if (gameOver) return check.removeEventListener('mousedown', handleDownButtonCheck);
        if (keypress.key === 'Enter' || keypress.type === 'mousedown') {
            checkImage.src = 'images/checked.png';
            [answerPoints, choosenQuestion.answered] = processUserAnswer(checkIfTheAnswerIsCorrect, choosenQuestion, choosenQuestionIndex, userAnswerInput, answerPoints, changeLetterColor, letterPosition, getAnwerPoints, deselectLetter, gameOver, getSelectedLetter);
            startNextTurn(userAnswerInput, getLetterPosition, questions, askAQuestion, ask, selectLetter, finishGame);
        };
    };

    const handleUpbuttonCheck = () => checkImage.src = 'images/check.png';

    const handleDownButtonPasapalabra = () => {
        if (gameOver) return pasapalabra.removeEventListener('mousedown', handleDownButtonPasapalabra);
        pasapalabraImage.src = 'images/pasapalabred.png';

        deselectLetter(gameOver, getSelectedLetter);
        startNextTurn(userAnswerInput, getLetterPosition, questions, askAQuestion, ask, selectLetter, finishGame);
    };

    const handleUpbuttonPasapalabra = () => pasapalabraImage.src = 'images/pasapalabra.png';

    const finishGame = () => {

        if (!gameOver) {
            clearInterval(countdown);
            pauseCountdownCircle(countdownCircle);
            ask.innerHTML = `<span class = 'letter'>Final</span><span class = 'letter-question'>Bien jugado ${username}! Has conseguido un total de ${answerPoints} puntos.</span>`;
            generateRanking(username, answerPoints, rankingRows, usersPoints);
            restartQuestionPosition();
            gameOver = true;
        };
    };

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
                gameOver = false;
                startCountdown(countdownNumber, secondsOfGame, deselectLetter, gameOver, getSelectedLetter, finishGame);
                registerPasapalabraGameEventListeners(pasapalabra, check, handleDownButtonPasapalabra, handleUpbuttonPasapalabra, handleDownButtonCheck, handleUpbuttonCheck);
                startNextTurn(userAnswerInput, getLetterPosition, questions, askAQuestion, ask, selectLetter, finishGame);
                clearInterval(preparationTime);
            }
        }, 1000);
    };

    registerWelcomeScreenEventsLinteners(menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, addEventListener, confirmAvatar, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handleSetAvatarAndUsername);
    getAvatarAndUsername(usernameInput, avatars, circleAvatar);
};

startPasapalabraGame();