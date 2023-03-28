import { options, classificationContainer } from "./queryselector.js";
import { hideElementContent, showElementContent } from "./showandhideelementcontent.js";

const handleOpenClassification  = () => showElementContent(classificationContainer, 'flex');

const handleCloseClassification = () => hideElementContent(classificationContainer);

const handleShowOptionsMenu     = () => showElementContent(options);

const handleHideOptionsMenu     = () => hideElementContent(options);

export { handleShowOptionsMenu, handleHideOptionsMenu, handleOpenClassification, handleCloseClassification };