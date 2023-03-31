import { avatars, confirmAvatar, usernameInput } from "./registerqueryselector.js";
import { preparePasapalabraGame } from "./preparatepasapalabragame.js";
import { circleAvatar } from "./registerqueryselector.js";

const restartAvatarClasses = () => {
    avatars.forEach((avatar) => {
        avatar.classList.remove('selected-avatar');
        circleAvatar.src = 'images/empty.png';
        avatar.classList.add('avatar');
    });
};

const selectedAvatar = (avatar) => (avatar.classList.add('selected-avatar')) + (avatar.classList.remove('avatar'));

const chooseAvatar = () => {

    for (let index = 0; index < avatars.length; index++) {
        avatars[index].addEventListener('click', (avatar) => {
            restartAvatarClasses();
            selectedAvatar(avatars[index]);
            circleAvatar.src = avatar.target.src;
        });
    };
};

const handleChooseAvatar = (keypress) => {
    if (keypress.key === 'Enter' || keypress.type === 'mousedown') {
        if (!circleAvatar.src.includes("empty") && usernameInput.value) {
            confirmAvatar.removeEventListener('mousedown', handleChooseAvatar);
            removeEventListener('keydown', handleChooseAvatar);
            preparePasapalabraGame();
        };
    };
};

export { restartAvatarClasses, chooseAvatar, handleChooseAvatar };
