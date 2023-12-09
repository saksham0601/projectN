document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'b') {
        event.preventDefault(); // Prevent the default browser behavior
        applyBold();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'i') {
        event.preventDefault();
        applyItalic();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        applyUnderline();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'h') {
        event.preventDefault();
        applyHighlight();
    }
});