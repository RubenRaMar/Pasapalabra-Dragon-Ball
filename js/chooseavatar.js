import { avatars } from "./queryselector.js";

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

export { restartAvatarClasses, chooseAvatar };