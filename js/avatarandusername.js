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

const getAvatarAndUsername = (usernameInput, avatars, circleAvatar) => {

    usernameInput.value = '';
    
    for (let index = 0; index < avatars.length; index++) {
        avatars[index].addEventListener('click', (avatar) => {
            restartAvatarClasses(avatars, circleAvatar);
            selectedAvatar(avatars[index]);
            circleAvatar.src = avatar.target.src;
        });
    };
};

const generateUpperCamelCase = (username) => {
    let capitalLetter     = true;
    const lettersUsername = [];

    const userLetters = username.split('');

    userLetters.forEach(letter => {
        (capitalLetter) ? lettersUsername.push(letter.toUpperCase()) : lettersUsername.push(letter);
        (letter === ' ') ? capitalLetter = true : capitalLetter = false;
    });
    return lettersUsername.join('');
};

export { restartAvatarClasses, getAvatarAndUsername, generateUpperCamelCase };