export const processUserAnswer = (checkIfTheAnswerIsCorrect, choosenQuestion, choosenQuestionIndex, userAnswerInput, gameData, changeLetterColor, letterPosition, getAnwerPoints, deselectLetter, getSelectedLetter) => {

    const isCorrectAnswer = checkIfTheAnswerIsCorrect(choosenQuestion.answer, choosenQuestionIndex, userAnswerInput)

    changeLetterColor(isCorrectAnswer, letterPosition);
    
    deselectLetter(gameData.isGameOver, getSelectedLetter);
    gameData.answerPoints += getAnwerPoints(isCorrectAnswer);
    choosenQuestion.answered = true;
};