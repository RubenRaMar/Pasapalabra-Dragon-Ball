import { askAQuestion } from './askaquetion.js';
import { questions } from './questions.js';
import { selectLetter } from './changelettercolor.js';
import { getLetterPosition } from './queryselector.js';


const questionData = {
    choosenQuestionIndex : '',
    choosenQuestion      : '',
    answered             : '',
    questionPosition     : 0,
    letterPosition       : 0,
}



const checkIfPlaying = () => questions.every((question) => question.answered);

const startNextTurn = (userAnswerInput, ask, finishGame, gameData, countdown, countdownCircle, restartQuestionPosition) => {

    userAnswerInput.value = '';
    if (questionData.questionPosition === 27) questionData.questionPosition = 0;

    questionData.letterPosition = getLetterPosition(questionData.questionPosition);
    questionData.choosenQuestion = questions[questionData.questionPosition];
    questionData.choosenQuestionIndex = questionData.choosenQuestion.questionIndex;
    questionData.answered = questionData.choosenQuestion.answered;

    if ((!checkIfPlaying())) {

        if (questionData.answered) return (questionData.questionPosition++) + (startNextTurn(userAnswerInput, ask, finishGame, gameData, countdown, countdownCircle, restartQuestionPosition));

        askAQuestion(ask, questionData.choosenQuestion, questionData.choosenQuestionIndex);
        selectLetter(questionData.letterPosition);
        questionData.questionPosition++
    };

    if (checkIfPlaying()) (finishGame(gameData, countdown, countdownCircle, ask, restartQuestionPosition));
};

const restartQuestionPosition = () => questionData.questionPosition = 0;

export { startNextTurn, restartQuestionPosition, questionData };