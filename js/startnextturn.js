import { askAQuestion } from './askaquetion.js';
import { questions } from './questions.js';
import { selectLetter } from './changelettercolor.js';


let choosenQuestionIndex = '',
    choosenQuestion      = '',
    answered             = '',
    questionPosition     = 0,
    letterPosition       = 0;

const checkIfPlaying = () => questions.every((question) => question.answered);

const startNextTurn = (userAnswerInput, getLetterPosition, ask, finishGame, gameData, countdown, countdownCircle, usersPoints, restartQuestionPosition) => {

    userAnswerInput.value = '';
    if (questionPosition === 27) questionPosition = 0;

    letterPosition = getLetterPosition(questionPosition);
    choosenQuestion = questions[questionPosition];
    choosenQuestionIndex = choosenQuestion.questionIndex;
    answered = choosenQuestion.answered;

    if ((!checkIfPlaying())) {

        if (answered) return (++questionPosition) + (startNextTurn(userAnswerInput, getLetterPosition, ask, finishGame, gameData, countdown, countdownCircle, usersPoints, restartQuestionPosition));

        askAQuestion(ask, choosenQuestion, choosenQuestionIndex);
        selectLetter(letterPosition);
        questionPosition++
    };

    if (checkIfPlaying()) (finishGame(gameData, countdown, countdownCircle, ask, usersPoints, restartQuestionPosition));
};

const restartQuestionPosition = () => questionPosition = 0;

export { startNextTurn, choosenQuestion, choosenQuestionIndex, letterPosition, restartQuestionPosition };