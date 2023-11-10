document.addEventListener('DOMContentLoaded', () => {
  const noteInput = document.getElementById('noteInput');
  const noteDisplay = document.getElementById('noteDisplay');

  // Custom renderer to handle ==highlighted text==
  const renderer = new marked.Renderer();
  const originalRenderer = renderer.paragraph;
  renderer.paragraph = (text) => {
    const highlighted = text.replace(/==([^==]+)==/g, '<mark>$1</mark>');
    return originalRenderer.call(renderer, highlighted);
  };

  // Configure marked
  marked.setOptions({
    renderer, // Use the custom renderer
    gfm: true,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true
  });

  // Render Markdown into HTML in real-time as the user types
  noteInput.addEventListener('input', function() {
    const noteMarkdown = noteInput.value;
    const sanitizedMarkdown = DOMPurify.sanitize(noteMarkdown);
    const noteHTML = marked.parse(sanitizedMarkdown);
    noteDisplay.innerHTML = noteHTML;
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

