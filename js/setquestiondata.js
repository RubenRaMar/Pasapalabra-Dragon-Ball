import { getLetterPosition } from './queryselector.js';

const chooseQuestionForEachLetter     = () => questions.forEach((question) => question.questionIndex = Math.round(Math.random() * 2));

const setQuestionData = (questionData, questions) => {  
    questionData.letterPosition       = getLetterPosition(questionData.questionPosition);
    questionData.choosenQuestionIndex = questionData.choosenQuestion.questionIndex;
    questionData.choosenQuestion      = questions[questionData.questionPosition];
    questionData.answered             = questionData.choosenQuestion.answered;
};

export { setQuestionData, chooseQuestionForEachLetter };