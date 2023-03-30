export const generateUpperCamelCase = (username) => {
    let capitalLetter     = true;
    const lettersUsername = [];

    const userLetters = username.split('');

    userLetters.forEach(letter => {
        (capitalLetter) ? lettersUsername.push(letter.toUpperCase()) : lettersUsername.push(letter);
        (letter === ' ') ? capitalLetter = true : capitalLetter = false;
    });
    return lettersUsername.join('');
};