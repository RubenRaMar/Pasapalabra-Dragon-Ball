export const removeButtons = (menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, pasapalabra, check, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handleDownButtonPasapalabra, handleUpbuttonPasapalabra, handleDownButtonCheck, handleUpbuttonCheck) => {
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