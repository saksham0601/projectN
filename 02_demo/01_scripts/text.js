// Implementation of converting user input to markdown was generated with the use of AI
document.addEventListener('DOMContentLoaded', () => {
  const noteInput = document.getElementById('noteInput');
  const noteDisplay = document.getElementById('noteDisplay');

  // Render Markdown into HTML in real-time as the user types
  noteInput.addEventListener('input', function() {
      const noteMarkdown = noteInput.value;
      const sanitizedMarkdown = DOMPurify.sanitize(noteMarkdown); // Sanitize the Markdown input
      const noteHTML = marked.parse(sanitizedMarkdown); // Parse the sanitized Markdown into HTML
      noteDisplay.innerHTML = noteHTML; // Display the rendered HTML
  });
});

function applyBold() {
  var selectedText = window.getSelection().toString();
  if (selectedText) {
    if (selectedText.startsWith("**") && selectedText.endsWith("**")) {
      var modifiedText = selectedText.substring(2, selectedText.length - 2);
      replaceSelection(modifiedText);
    }
    else {
      var modifiedText = "**"+selectedText+"**";
      replaceSelection(modifiedText);
    }
  }  
}

function applyItalic() {

  var selectedText = window.getSelection().toString();
  if (selectedText) {
    if (selectedText.startsWith("*") && selectedText.endsWith("*")) {
      var modifiedText = selectedText.substring(1, selectedText.length - 1);
      replaceSelection(modifiedText);
    }
    else {
      var modifiedText = "*"+selectedText+"*";
      replaceSelection(modifiedText);
    }
  }

}

function applyUnderline() {
  var selectedText = window.getSelection().toString();
  if (selectedText) {
    if (selectedText.startsWith("_") && selectedText.endsWith("_")) {
      var modifiedText = selectedText.substring(1, selectedText.length - 1);
      replaceSelection(modifiedText);
    }
    else {
      var modifiedText = "_"+selectedText+"_";
      replaceSelection(modifiedText);
    }
  }  
}

function getSelectedText() {
  var text = "";
  if (window.getSelection) {
      text = window.getSelection().toString();
  } else if (document.selection && document.selection.type !== "Control") {
      text = document.selection.createRange().text;
  }
  return text;
}

// This function replaces the selected text
function replaceSelection(selection) {
  // Get the textarea element by its ID
  var textBox = document.getElementById("noteInput");

  // Get the start and end positions of the selected text
  var startPos = textBox.selectionStart;
  var endPos = textBox.selectionEnd;

  // Get the text before and after the selected text
  var textBefore = textBox.value.substring(0, startPos);
  var textAfter = textBox.value.substring(endPos, textBox.value.length);

  // Set the value of the textBox with the selected text removed
  textBox.value = textBefore + selection + textAfter;
}

