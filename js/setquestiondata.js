const setQuestionData = (questionData, getLetterPosition, questions) => {

    questionData.letterPosition = getLetterPosition(questionData.questionPosition);
    questionData.choosenQuestion = questions[questionData.questionPosition];
    questionData.choosenQuestionIndex = questionData.choosenQuestion.questionIndex;
    questionData.answered = questionData.choosenQuestion.answered;
    console.log(questionData);

};

export { setQuestionData };