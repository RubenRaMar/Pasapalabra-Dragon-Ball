const showElementContent = (elementContent, display) => {
    
    elementContent.classList.remove('display-none');
    
    if (!display) elementContent.classList.add('display-initial');
    if (display === 'flex') elementContent.classList.add('display-flex');
};

const hideElementContent = (elementContent) => {
        elementContent.classList.remove('display-initial');
        elementContent.classList.remove('display-flex');
        elementContent.classList.add('display-none');  
};

export { hideElementContent, showElementContent }