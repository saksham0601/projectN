const openModalButtons = document.querySelectorAll('[data-modal-target]')
const confirmModalButtons = document.querySelectorAll('[data-confirm-button]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const newDocButtons = document.querySelectorAll('[new-doc-button]')
const overlay = document.getElementById('overlay')

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        //Get the current content of the document
        let content = document.getElementById("note-input").value;

        //If there is something written in the note, open the given popup
        if (content.length > 0) {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        }
        //Else display an error pop-up that nothing is written
        else {
            const modal = document.querySelector("#noInputModal");
            openModal(modal);
        } 
    })
})

confirmModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        saveFile();
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
    })
})

newDocButtons.forEach(button => {
    button.addEventListener('click', () => {
        //Get the current content of the document
        let content = document.getElementById("note-input").value;

        //Clear the document's contents
        document.getElementById("note-input").value = '';
        document.getElementById("note-display").innerText = '';

        //Closes all active modals
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal);
        })
    })
})

function openModal(modal) {
    if (modal == null) {
        return;
    }
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) {
        return;
    }
    modal.classList.remove('active');
    overlay.classList.remove('active');
}