const selectLetter = (letterPosition) => letterPosition.classList.add('selected-letter');

const deselectLetter = (gameOver, getSelectedLetter) => {
    if (!gameOver) getSelectedLetter().classList.remove('selected-letter');
};

const restartLettersColor = (letters) => {
    letters.forEach(letter => {
        letter.classList.remove('failed-letter')
        letter.classList.remove('correct-letter')
    });
};
export { selectLetter, deselectLetter, restartLettersColor };