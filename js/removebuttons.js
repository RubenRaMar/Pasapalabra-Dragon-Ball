import { handleCloseClassification, handleHideOptionsMenu, handleOpenClassification, handleRestartGame, handleShowOptionsMenu, handleStopGame } from "./optionsmenu.js";
import { check, classificationButton, closeClassificationButton, menuButton, pasapalabra, restartButton, stopButton } from "./registerqueryselector.js";
import { handleDownButtonCheck, handleDownButtonPasapalabra, handleUpbuttonCheck, handleUpbuttonPasapalabra } from "./getuseranswer.js";

const removeButtons = () => {
    closeClassificationButton.removeEventListener('click', handleCloseClassification);
    classificationButton.removeEventListener('click', handleOpenClassification);
    pasapalabra.removeEventListener('mousedown', handleDownButtonPasapalabra);
    menuButton.removeEventListener('mouseover', handleShowOptionsMenu);
    menuButton.removeEventListener('mouseout', handleHideOptionsMenu);
    restartButton.removeEventListener('click', handleRestartGame);
    check.removeEventListener('mousedown', handleDownButtonCheck);
    removeEventListener('mouseup', handleUpbuttonPasapalabra);
    stopButton.removeEventListener('click', handleStopGame);
    removeEventListener('keydown', handleDownButtonCheck);
    removeEventListener('mouseup', handleUpbuttonCheck);
    removeEventListener('keyup', handleUpbuttonCheck);
};

export { removeButtons };