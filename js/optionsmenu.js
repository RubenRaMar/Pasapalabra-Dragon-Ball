
import { pasapalabraContainer, classificationContainer, welcomeScreen, userAnswerInput, options } from './registerqueryselector.js';
import { hideElementContent, showElementContent } from './showandhideelementcontent.js';
import { registerWelcomeScreenEventsLinteners } from './registerbuttons.js';
import { deselectLetter, restartLettersColor } from './changelettercolor.js';
import { restartAvatarClasses, chooseAvatar } from './getavatarchoose.js';
import { restartBackgroundImage } from './changebackgroundimage.js';
import { restartQuestionPosition } from './startnextturn.js';
import { removeButtons } from './removebuttons.js';
import { restartQuestions } from './questions.js';
import { finishGame } from './finishgame.js';
import { countdown } from './countdown.js';
import { gameData} from "./app.js";


const handleOpenClassification  = () => showElementContent(classificationContainer);

const handleCloseClassification = () => hideElementContent(classificationContainer);

const handleShowOptionsMenu     = () => showElementContent(options);

const handleHideOptionsMenu     = () => hideElementContent(options);

const handleStopGame = () => {
    if (!gameData.isGameOver) (deselectLetter()) + ( finishGame());
};

const handleRestartGame = () => {
    if (gameData.username) {
        removeButtons();
        registerWelcomeScreenEventsLinteners();
        hideElementContent(classificationContainer);
        hideElementContent(options);
        hideElementContent(pasapalabraContainer);
        showElementContent(welcomeScreen);
        restartAvatarClasses();
        restartBackgroundImage();
        restartLettersColor();
        restartQuestionPosition();
        restartQuestions();
        deselectLetter();
        clearInterval(countdown);
        gameData.isGameOver   = true;
        userAnswerInput.value = '';
        gameData.username     = '';
        gameData.answerPoints = 0;
        chooseAvatar();
    };
};

export { handleShowOptionsMenu, handleHideOptionsMenu, handleOpenClassification, handleCloseClassification, handleStopGame, handleRestartGame };
