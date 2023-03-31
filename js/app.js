
import { registerWelcomeScreenEventsLinteners } from './registerbuttons.js';
import { chooseAvatar } from './getavatarchoose.js';

const gameData = {
    username: '',
    answerPoints: 0,
    isGameOver: true,
    usersPoints: []
}

registerWelcomeScreenEventsLinteners();
chooseAvatar();

export { gameData };
