import { preparePasapalabraGame } from "./preparatepasapalabragame.js";
import { avatars, confirmAvatar, usernameInput } from "./queryselector.js";
import { circleAvatar } from "./queryselector.js";

const restartAvatarClasses = (circleAvatar) => {
    avatars.forEach((avatar) => {
        avatar.classList.remove('selected-avatar');
        avatar.classList.add('avatar');
        circleAvatar.src = 'images/empty.png';
    });
};

const selectedAvatar = (avatar) => {
    avatar.classList.add('selected-avatar');
    avatar.classList.remove('avatar');;
};

const chooseAvatar = (circleAvatar) => {
    
    for (let index = 0; index < avatars.length; index++) {
        avatars[index].addEventListener('click', (avatar) => {
            restartAvatarClasses(circleAvatar);
            selectedAvatar(avatars[index]);
            circleAvatar.src = avatar.target.src;
        });
    };
};

const handleChooseAvatar = (keypress) => {
    if (keypress.key === 'Enter' || keypress.type === 'mousedown') {
        if (!circleAvatar.src.includes("empty") && usernameInput.value) {
            removeEventListener('keydown', handleChooseAvatar);
            confirmAvatar.removeEventListener('mousedown', handleChooseAvatar);
            preparePasapalabraGame();
        };
    };
};

export { restartAvatarClasses, chooseAvatar, handleChooseAvatar };