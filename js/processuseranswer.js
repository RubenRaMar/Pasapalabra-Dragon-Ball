import { changeLetterColor, deselectLetter } from './changelettercolor.js';
import { userAnswerInput } from './registerqueryselector.js';
import { questionData } from './startnextturn.js';
import { gameData } from './app.js';

const checkIfTheAnswerIsCorrect = (choosenQuestion, choosenQuestionIndex, userAnswerInput) => getChoosenAnswer(choosenQuestion, choosenQuestionIndex) === getUserAnswer(userAnswerInput).toLowerCase();

const getChoosenAnswer          = (choosenQuestion, choosenQuestionIndex) => choosenQuestion[choosenQuestionIndex];

const getAnwerPoints            = (isCorrectAnswer) => isCorrectAnswer ? 1 : 0;

const getUserAnswer             = (userAnswer) => userAnswer.value;

const processUserAnswer = () => {

    const isCorrectAnswer = checkIfTheAnswerIsCorrect(questionData.choosenQuestion.answer, questionData.choosenQuestionIndex, userAnswerInput)

    changeLetterColor(isCorrectAnswer, questionData.letterPosition);

    deselectLetter();
    gameData.answerPoints += getAnwerPoints(isCorrectAnswer);
    questionData.choosenQuestion.answered = true;
};

export { processUserAnswer };
