import { gameData } from "./app.js";
import { deselectLetter } from "./changelettercolor.js";
import { processUserAnswer } from "./processuseranswer.js";
import { check, checkImage, pasapalabra, pasapalabraImage } from "./registerqueryselector.js";
import { startNextTurn } from "./startnextturn.js";

const handleDownButtonCheck = (keypress) => {
    if (gameData.isGameOver) return check.removeEventListener('mousedown', handleDownButtonCheck);
    if (keypress.key === 'Enter' || keypress.type === 'mousedown') {
        checkImage.src = 'images/checked.png';
        processUserAnswer();
        startNextTurn();
    };
};

const handleUpbuttonCheck = () => checkImage.src = 'images/check.png';

const handleDownButtonPasapalabra = () => {
    if (gameData.isGameOver) return pasapalabra.removeEventListener('mousedown', handleDownButtonPasapalabra);
    pasapalabraImage.src = 'images/pasapalabred.png';
    deselectLetter();
    startNextTurn();
};

const handleUpbuttonPasapalabra = () => pasapalabraImage.src = 'images/pasapalabra.png';

export { handleDownButtonCheck, handleUpbuttonCheck, handleDownButtonPasapalabra, handleUpbuttonPasapalabra }