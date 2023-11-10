document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('textarea');
  
    // Render Markdown into HTML in real-time as the user types
    textArea.addEventListener('input', function() {
        const noteMarkdown = textArea.value;
        const sanitizedMarkdown = DOMPurify.sanitize(noteMarkdown); // Sanitize the Markdown input
        const noteHTML = marked.parse(sanitizedMarkdown); // Parse the sanitized Markdown into HTML
        textArea.innerHTML = noteHTML; // Display the rendered HTML
    });
  });

let input = document.getElementById("textarea");
let selectedText = getSelectedText();

function getSelectedText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function replaceSelection(selection) {
    // Get the textarea element by its ID
    var textBox = document.getElementById("textarea");
  
    // Get the start and end positions of the selected text
    var startPos = textBox.selectionStart;
    var endPos = textBox.selectionEnd;
  
    // Get the text before and after the selected text
    var textBefore = textBox.value.substring(0, startPos);
    var textAfter = textBox.value.substring(endPos, textBox.value.length);
  
    // Set the value of the textBox with the selected text removed
    textBox.value = textBefore + selection + textAfter;
}

function fontUp()
{
    selectedText.style.fontSize = "larger";
}

function fontDown()
{
    selectedText.style.fontSize = "smaller";
}

function textBold()
{
    selectedText = window.getSelection().toString();
    if (selectedText) {
        let modifiedText = "**" + selectedText + "**";
        replaceSelection(modifiedText);
    }
}

function textItalic()
{
    if (input.style.fontStyle == "italic")
    {
        input.style.fontStyle = "normal";
    }
    else
    {
        input.style.fontStyle = "italic";
    }
}

function saveFile()
{
    let output = document.getElementById("textarea").value;
    let file_name = prompt("Please enter the file name", "MyNote");
    
    let blob = new Blob([output], {type: "text/plain;charset=utf-8"});
    saveAs(blob, file_name + ".md");
}

function readFile()
{
    // Get the input element
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
            var fileContentsTextarea = document.getElementById('textarea');
            fileContentsTextarea.value = contents;
        };

        // Read the file as text
        reader.readAsText(file);
    } else {
        alert('Please select a file.');
    }
}