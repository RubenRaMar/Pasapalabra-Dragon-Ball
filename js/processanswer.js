const checkIfTheAnswerIsCorrect = (choosenQuestion, choosenQuestionIndex, userAnswerInput) => getChoosenAnswer(choosenQuestion, choosenQuestionIndex) === getUserAnswer(userAnswerInput).toLowerCase();

const changeLetterColor         = (isCorrectAnswer, letterPosition) => isCorrectAnswer ? letterPosition.classList.add('correct-letter') : letterPosition.classList.add('failed-letter');

const getChoosenAnswer          = (choosenQuestion, choosenQuestionIndex) => choosenQuestion[choosenQuestionIndex];

const getAnwerPoints            = (isCorrectAnswer) => isCorrectAnswer ? 1 : 0;

const getUserAnswer             = (userAnswer) => userAnswer.value;


export { checkIfTheAnswerIsCorrect, getAnwerPoints, changeLetterColor }