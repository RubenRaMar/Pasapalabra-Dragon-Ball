const restartAvatarClasses = (avatars, circleAvatar) => {
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

const chooseAvatar = (avatars, circleAvatar) => {
    
    for (let index = 0; index < avatars.length; index++) {
        avatars[index].addEventListener('click', (avatar) => {
            restartAvatarClasses(avatars, circleAvatar);
            selectedAvatar(avatars[index]);
            circleAvatar.src = avatar.target.src;
        });
    };
};

export { restartAvatarClasses, chooseAvatar };