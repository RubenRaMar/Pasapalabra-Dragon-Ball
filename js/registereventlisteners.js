const registerWelcomeScreenEventsLinteners = (menuButton, stopButton, restartButton, classificationButton, closeClassificationButton, addEventListener, confirmAvatar, handleShowOptionsMenu, handleHideOptionsMenu, handleStopGame, handleRestartGame, handleOpenClassification, handleCloseClassification, handleSetAvatarAndUsername) => {
   
    menuButton.addEventListener('mouseover', handleShowOptionsMenu);
    menuButton.addEventListener('mouseout', handleHideOptionsMenu);

    classificationButton.addEventListener('click', handleOpenClassification);
    closeClassificationButton.addEventListener('click', handleCloseClassification);

    stopButton.addEventListener('click', handleStopGame);
    restartButton.addEventListener('click', handleRestartGame);
   
    confirmAvatar.addEventListener('mousedown', handleSetAvatarAndUsername);
    addEventListener('keydown', handleSetAvatarAndUsername);
};

const registerPasapalabraGameEventListeners = (pasapalabra, check, handleDownButtonPasapalabra, handleUpbuttonPasapalabra, handleDownButtonCheck, handleUpbuttonCheck) => {
    pasapalabra.addEventListener('mousedown', handleDownButtonPasapalabra);
    check.addEventListener('mousedown', handleDownButtonCheck);
    addEventListener('mouseup', handleUpbuttonPasapalabra);
    addEventListener('keydown', handleDownButtonCheck);
    addEventListener('mouseup', handleUpbuttonCheck);
    addEventListener('keyup', handleUpbuttonCheck);
};


export { registerWelcomeScreenEventsLinteners, registerPasapalabraGameEventListeners };