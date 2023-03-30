let choosenQuestionIndex = '',
    choosenQuestion      = '',
    answered             = '',
    questionPosition     = 0,
    letterPosition       = 0;

const checkIfPlaying = (questions) => questions.every((question) => question.answered);

const startNextTurn = (userAnswerInput, getLetterPosition, questions, askAQuestion, ask, selectLetter, finishGame, gameData, countdown, pauseCountdownCircle, countdownCircle, generateRanking, rankingRows, usersPoints, restartQuestionPosition) => {

    userAnswerInput.value = '';
    if (questionPosition === 27) questionPosition = 0;

    letterPosition = getLetterPosition(questionPosition);
    choosenQuestion = questions[questionPosition];
    choosenQuestionIndex = choosenQuestion.questionIndex;
    answered = choosenQuestion.answered;

    if ((!checkIfPlaying(questions))) {

        if (answered) return (++questionPosition) + (startNextTurn(userAnswerInput, getLetterPosition, questions, askAQuestion, ask, selectLetter, finishGame, gameData, countdown, pauseCountdownCircle, countdownCircle, generateRanking, rankingRows, usersPoints, restartQuestionPosition));

        askAQuestion(ask, choosenQuestion, choosenQuestionIndex);
        selectLetter(letterPosition);
        questionPosition++
    };

    if (checkIfPlaying(questions)) (finishGame(gameData, countdown, pauseCountdownCircle, countdownCircle, ask, generateRanking, rankingRows, usersPoints, restartQuestionPosition));
};

const restartQuestionPosition = () => questionPosition = 0;

export { startNextTurn, choosenQuestion, choosenQuestionIndex, letterPosition, restartQuestionPosition };