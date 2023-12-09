function changeTheme(theme) {
    const body = document.body;
    const nav = document.querySelector('nav');
    const sidebar = document.querySelector('sidebar');
    switch (theme) {
        case 'default':
            body.style.backgroundColor = '#31313f';
            body.style.color = 'white';
            nav.style.backgroundColor = '#31313f';
            nav.style.boxShadow = '0 0 10px #1C1C23';
            const dropdown1 = document.querySelectorAll('.nav-listitemdrop');
            dropdown1.forEach(dropdown => {
                dropdown.style.backgroundColor = '#383845';
            });
            const darkToolbarButtons = document.querySelectorAll('.bottom-toolbar button');
            darkToolbarButtons.forEach(button => {
                button.style.backgroundColor = '#3f3f4e';
                button.style.color = 'white';
            });

            const darkNavigationButtons = document.querySelectorAll('.navigation button');
            darkNavigationButtons.forEach(button => {
                button.style.backgroundColor = '#3f3f4e';
                button.style.boxShadow = '0 0 10px #1C1C23';
                button.style.color = 'white';
            });

            const darkFlashcardInputs = document.querySelectorAll('.flashcardForm input[type="text"]');
            darkFlashcardInputs.forEach(input => {
                input.style.backgroundColor = '#3f3f4e';
                input.style.boxShadow = '0 0 10px #1C1C23';
                input.style.color = 'white';
            });
            const darkFlashcardformbutton = document.querySelectorAll('.flashcardForm button');
            darkFlashcardformbutton.forEach(button => {
                button.style.color = 'white';
            });

            break;
        case 'light':
            body.style.backgroundColor = '#f9f9f9';
            body.style.color = '#333';
            nav.style.backgroundColor = 'white';
            nav.style.boxShadow = '0 0 10px lightgrey';
            const dropdowns = document.querySelectorAll('.nav-listitemdrop');
            dropdowns.forEach(dropdown => {
                dropdown.style.backgroundColor = 'white';
            });

            const lightNavigationButtons = document.querySelectorAll('.navigation button');
            lightNavigationButtons.forEach(button => {
                button.style.backgroundColor = 'white';
                button.style.boxShadow = '0 0 10px lightgray';
                button.style.color = 'black';
            });

            const lightFlashcardInputs = document.querySelectorAll('.flashcardForm input[type="text"]');
            lightFlashcardInputs.forEach(input => {
                input.style.backgroundColor = 'white';
                input.style.boxShadow = '0 0 10px lightgray';
                input.style.color = 'black';
            });
            const lightFlashcardformbutton = document.querySelectorAll('.flashcardForm button');
            lightFlashcardformbutton.forEach(button => {
                button.style.color = 'black';
            });
            const lightToolbarButtons = document.querySelectorAll('.bottom-toolbar button');
            lightToolbarButtons.forEach(button => {
                button.style.backgroundColor = 'white';
                button.style.color = 'black';
            });

            break;
        default:
            break;
    }
    body.classList.toggle('light-mode', theme === 'light');
    saveTheme(theme);
}