import { handleChooseAvatar } from "./getavatarchoose.js";
import { handleDownButtonCheck, handleDownButtonPasapalabra, handleUpbuttonCheck, handleUpbuttonPasapalabra } from "./getuseranswer.js";
import { handleCloseClassification, handleHideOptionsMenu, handleOpenClassification, handleRestartGame, handleShowOptionsMenu, handleStopGame } from "./optionsmenu.js";
import { check, classificationButton, closeClassificationButton, confirmAvatar, menuButton, pasapalabra, restartButton, stopButton } from "./registerqueryselector.js";


const registerWelcomeScreenEventsLinteners = () => {
    closeClassificationButton.addEventListener('click', handleCloseClassification);
    classificationButton.addEventListener('click', handleOpenClassification);
    confirmAvatar.addEventListener('mousedown', handleChooseAvatar);
    menuButton.addEventListener('mouseover', handleShowOptionsMenu);
    menuButton.addEventListener('mouseout', handleHideOptionsMenu);
    restartButton.addEventListener('click', handleRestartGame);   
    stopButton.addEventListener('click', handleStopGame);
    addEventListener('keydown', handleChooseAvatar);
};

const registerPasapalabraGameEventListeners = () => {
    pasapalabra.addEventListener('mousedown', handleDownButtonPasapalabra);
    check.addEventListener('mousedown', handleDownButtonCheck);
    addEventListener('mouseup', handleUpbuttonPasapalabra);
    addEventListener('keydown', handleDownButtonCheck);
    addEventListener('mouseup', handleUpbuttonCheck);
    addEventListener('keyup', handleUpbuttonCheck);
};


export { registerWelcomeScreenEventsLinteners, registerPasapalabraGameEventListeners };