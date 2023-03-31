import { ask, userAnswerInput } from './registerqueryselector.js';
import { setQuestionData } from './setquestiondata.js';
import { selectLetter } from './changelettercolor.js';
import { askAQuestion } from './askaquetion.js';
import { finishGame } from './finishgame.js';
import { questions } from './questions.js';

const questionData = {
    choosenQuestionIndex : '',
    choosenQuestion      : '',
    answered             : '',
    questionPosition     : 0,
    letterPosition       : 0,
}

const startNextTurn = () => {

    userAnswerInput.value = '';
    if (questionData.questionPosition === 27) questionData.questionPosition = 0;  
    setQuestionData()

    if ((!checkIfPlaying())) {
        if (questionData.answered) return (questionData.questionPosition++) + (startNextTurn());

        askAQuestion(ask, questionData.choosenQuestion, questionData.choosenQuestionIndex);
        selectLetter(questionData.letterPosition);
        questionData.questionPosition++
    };

    if (checkIfPlaying()) finishGame();
};

const checkIfPlaying = () => questions.every((question) => question.answered);

const restartQuestionPosition = () => questionData.questionPosition = 0;

export { startNextTurn, restartQuestionPosition, questionData };