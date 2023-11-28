document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'b') {
        event.preventDefault(); // Prevent the default browser behavior
        applyBold(); // Trigger the underline function
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'i') {
        event.preventDefault(); // Prevent the default browser behavior
        applyItalic(); // Trigger the underline function
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault(); // Prevent the default browser behavior
        applyUnderline(); // Trigger the underline function
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'h') {
        event.preventDefault(); // Prevent the default browser behavior
        applyHighlight(); // Trigger the underline function
    }
});