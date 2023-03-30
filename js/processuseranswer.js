import { checkIfTheAnswerIsCorrect, getAnwerPoints, changeLetterColor } from './processanswer.js';
import { choosenQuestion, choosenQuestionIndex, letterPosition } from './startnextturn.js';

export const processUserAnswer = (userAnswerInput, gameData, deselectLetter, getSelectedLetter) => {

    const isCorrectAnswer = checkIfTheAnswerIsCorrect(choosenQuestion.answer, choosenQuestionIndex, userAnswerInput)

    changeLetterColor(isCorrectAnswer, letterPosition);
    
    deselectLetter(gameData.isGameOver, getSelectedLetter);
    gameData.answerPoints += getAnwerPoints(isCorrectAnswer);
    choosenQuestion.answered = true;
};