import { questions } from './questions.js';
import { getLetterPosition } from './registerqueryselector.js';
import { questionData } from './startnextturn.js';

const chooseQuestionForEachLetter = () => questions.forEach((question) => question.questionIndex = Math.round(Math.random() * 2));

const setQuestionData = () => {  
    questionData.letterPosition       = getLetterPosition(questionData.questionPosition);
    questionData.choosenQuestionIndex = questionData.choosenQuestion.questionIndex;
    questionData.choosenQuestion      = questions[questionData.questionPosition];
    questionData.answered             = questionData.choosenQuestion.answered;
};

export { setQuestionData, chooseQuestionForEachLetter };