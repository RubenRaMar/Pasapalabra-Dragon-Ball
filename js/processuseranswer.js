import { checkIfTheAnswerIsCorrect, getAnwerPoints, changeLetterColor } from './processanswer.js';
import { questionData } from './startnextturn.js';

export const processUserAnswer = (userAnswerInput, gameData, deselectLetter, getSelectedLetter) => {

    const isCorrectAnswer = checkIfTheAnswerIsCorrect(questionData.choosenQuestion.answer, questionData.choosenQuestionIndex, userAnswerInput)

    changeLetterColor(isCorrectAnswer, questionData.letterPosition);
    
    deselectLetter(gameData.isGameOver, getSelectedLetter);
    gameData.answerPoints += getAnwerPoints(isCorrectAnswer);
    questionData.choosenQuestion.answered = true;
};