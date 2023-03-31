import { getLetterPosition } from './registerqueryselector.js';
import { questionData } from './startnextturn.js';
import { questions } from './questions.js';

const chooseQuestionForEachLetter = () => questions.forEach((question) => question.questionIndex = Math.round(Math.random() * 2));

const getQuestionData = () => {  
    questionData.letterPosition       = getLetterPosition(questionData.questionPosition);
    questionData.choosenQuestion      = questions[questionData.questionPosition];
    questionData.choosenQuestionIndex = questionData.choosenQuestion.questionIndex;
    questionData.answered             = questionData.choosenQuestion.answered;
};

export { getQuestionData , chooseQuestionForEachLetter };