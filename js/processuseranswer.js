export const processUserAnswer = (checkIfTheAnswerIsCorrect, choosenQuestion, choosenQuestionIndex, userAnswerInput, answerPoints, changeLetterColor, letterPosition, getAnwerPoints, deselectLetter, gameOver, getSelectedLetter) => {

    const isCorrectAnswer = checkIfTheAnswerIsCorrect(choosenQuestion.answer, choosenQuestionIndex, userAnswerInput)

    changeLetterColor(isCorrectAnswer, letterPosition);
    
    deselectLetter(gameOver, getSelectedLetter);
    return [answerPoints += getAnwerPoints(isCorrectAnswer), true];
};