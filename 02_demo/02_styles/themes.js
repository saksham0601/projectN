// Changes specific elments when changing between dark and light mode
function changeTheme(theme) {
    const body = document.body;
    switch (theme) {
        case 'default':
            body.style.backgroundColor = '#31313f';
            body.style.color = 'white';
            break;
        case 'light':
            body.style.backgroundColor = '#f9f9f9';
            body.style.color = '#333';
            break;
        default:
            break;
    }
    body.classList.toggle('light-mode', theme === 'light');
    saveTheme(theme);
}

// Save selected theme to localStorage
function saveTheme(theme) {
    localStorage.setItem('selectedTheme', theme);
}

// Retrieve selected theme from localStorage
function getSavedTheme() {
    return localStorage.getItem('selectedTheme');
}

// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = getSavedTheme();
    if (savedTheme) {
        changeTheme(savedTheme);
    }
});