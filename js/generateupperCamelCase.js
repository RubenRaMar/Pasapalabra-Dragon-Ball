const generateUpperCamelCase = (username) => {
  if (username.length > 30) username = username.slice(0, 31) + "...";

  let capitalLetter = true;
  const lettersUsername = [],
    userLetters = username.split("");

  userLetters.forEach((letter) => {
    capitalLetter
      ? lettersUsername.push(letter.toUpperCase())
      : lettersUsername.push(letter);
    letter === " " ? (capitalLetter = true) : (capitalLetter = false);
  });
  return lettersUsername.join("");
};

export { generateUpperCamelCase };
