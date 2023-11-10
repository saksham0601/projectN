function saveFile()
{
    let output = document.getElementById("noteInput").value;
    let file_name = prompt("Please enter the file name", "MyNote");
    
    let blob = new Blob([output], {type: "text/plain;charset=utf-8"});
    saveAs(blob, file_name + ".md");
}

function openFile() {

    chooseFile();
    readFile();

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