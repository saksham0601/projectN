// Uses the fileSaver.js library to implement saving feature
function saveFile() {
    let output = document.getElementById("noteInput").value;
    let file_name = prompt("Please enter the file name", "MyNote");

    if (file_name) {
        let blob = new Blob([output], { type: "text/plain;charset=utf-8" });
        saveAs(blob, file_name + ".md");
    }
}

function chooseFile() {

    document.getElementById('fileInput').click();

}

function readFile() {
    // Get the input element
    chooseFile();
    var fileInput = document.getElementById('fileInput');

    // Check if a file is selected
    if (fileInput.files.length > 0) {
        // Get the selected file
        var file = fileInput.files[0];

        // Create a FileReader object
        var reader = new FileReader();

        // Define the function to be executed when the file is loaded
        reader.onload = function (e) {
            // Get the contents of the file
            var contents = e.target.result;

            // Display the contents in the textarea
            var fileContentsTextarea = document.getElementById('noteInput');
            fileContentsTextarea.value = contents;
        };

        // Read the file as text
        reader.readAsText(file);
    }

}

function newDocument() {
    // Get the current content of the document
    let content = document.getElementById("noteInput").value;

    // Check if the document is not empty
    if (content.length > 0) {
        // Ask the user if they want to save the current document
        let save = confirm("Do you want to save the current document?");

        // If the user chooses to save
        if (save) {
            saveFile(); // Save the current document
        }
    }

    // Clear the content of the document to start a new one
    document.getElementById("noteInput").value = '';
    document.getElementById("note-display").innerText = '';
}

function changeTheme(theme) {
    const body = document.body;
    const nav = document.querySelector('nav');

    switch (theme) {
        case 'default':
            body.style.backgroundColor = '#31313f';
            body.style.color = 'white';
            nav.style.backgroundColor = '#31313f';
            const dropdown1 = document.querySelectorAll('.nav-listitemdrop');
            dropdown1.forEach(dropdown => {
                dropdown.style.backgroundColor = '#383845';
            });
            break;
        case 'light':
            body.style.backgroundColor = '#f9f9f9';
            body.style.color = '#333';
            nav.style.backgroundColor = '#f9f9f9';
            const dropdowns = document.querySelectorAll('.nav-listitemdrop');
            dropdowns.forEach(dropdown => {
                dropdown.style.backgroundColor = 'white';
            });
            break;
        default:
            break;
    }
    body.classList.toggle('light-mode', theme === 'light');
}
