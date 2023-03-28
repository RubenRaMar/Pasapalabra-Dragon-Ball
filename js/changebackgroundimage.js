
const changeBackgroundImage = (backgroundImage) => {
    backgroundImage.classList.remove('background-image');
    backgroundImage.classList.add('tournament-background-image');
};

const restartBackgroundImage = (backgroundImage) => {
    backgroundImage.classList.remove('tournament-background-image');
    backgroundImage.classList.add('background-image');
};

export { changeBackgroundImage, restartBackgroundImage };