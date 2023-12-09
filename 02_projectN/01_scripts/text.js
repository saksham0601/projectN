// Getting the input area and display area as a const
const noteInput = document.getElementById("noteInput");
const noteDisplay = document.getElementById("note-display");

// Markdown implementation was done with the help of ChatGPT
document.addEventListener('DOMContentLoaded', () => {
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

// Formatting function that applies bold to a text if select or adds the markdown syntax
// at the cursor position
function applyBold() {
  var selectedText = window.getSelection().toString();
  var startPos = noteInput.selectionStart;
  var endPos = noteInput.selectionEnd;

  if(!selectedText){
    // Insert the bold syntax at the current cursor position
    noteInput.value = noteInput.value.substring(0, startPos) + '****' + noteInput.value.substring(endPos);
    
    // Puts the cursor in the middle of the syntax
    noteInput.selectionStart = startPos + 2;
    noteInput.selectionEnd = startPos + 2;
    noteInput.focus();
  }

  if (selectedText) {
    // removes bold formatting from the selected text if it is bolded
    if (selectedText.startsWith("**") && selectedText.endsWith("**")) {
      var formattedText = selectedText.substring(2, selectedText.length - 2);
      replaceSelection(formattedText);
    }
    // adds bold syntax around the selected text
    else {
      var formattedText = "**" + selectedText + "**";
      replaceSelection(formattedText);
    }

    // puts the cursor position after the formatting
    noteInput.selectionStart = startPos + formattedText.length;
    noteInput.selectionEnd = startPos + formattedText.length;
    noteInput.focus();
  } 
}

function applyItalic() {

  var selectedText = window.getSelection().toString();
  var startPos = noteInput.selectionStart;
  var endPos = noteInput.selectionEnd;

  if(!selectedText){
    noteInput.value = noteInput.value.substring(0, startPos) + '**' + noteInput.value.substring(endPos);

    noteInput.selectionStart = startPos + 1;
    noteInput.selectionEnd = startPos + 1; 
    noteInput.focus();
  }

  if (selectedText) {
    if (selectedText.startsWith("*") && selectedText.endsWith("*")) {
      var formattedText = selectedText.substring(1, selectedText.length - 1);
      replaceSelection(formattedText);
    }
    else {
      var formattedText = "*" + selectedText + "*";
      replaceSelection(formattedText);
    }

    noteInput.selectionStart = startPos + formattedText.length;
    noteInput.selectionEnd = startPos + formattedText.length;
    noteInput.focus();
  }
}

// funtion still under work as for now it uses HTML tags to put underline formatting
function applyUnderline() {
  var selectedText = window.getSelection().toString();
  var startPos = noteInput.selectionStart;
  var endPos = noteInput.selectionEnd;

  if(!selectedText){
    noteInput.value = noteInput.value.substring(0, startPos) + '<u>' + selectedText + '</u>' + noteInput.value.substring(endPos);
    
    noteInput.selectionStart = startPos + 3;
    noteInput.selectionEnd = startPos + selectedText.length + 3; 
    noteInput.focus();
  }
  if (selectedText) {
    if (selectedText.startsWith("<u>") && selectedText.endsWith("</u>")) {
      var formattedText = selectedText.substring(1, selectedText.length - 1);
      replaceSelection(formattedText);
    }
    else {
      var formattedText = "<u>" + selectedText + "</u>";
      replaceSelection(formattedText);
    }

    noteInput.selectionStart = startPos + formattedText.length;
    noteInput.selectionEnd = startPos + formattedText.length;
    noteInput.focus();
  }  
}

function applyHighlight() {

  var selectedText = window.getSelection().toString();
  var startPos = noteInput.selectionStart;
  var endPos = noteInput.selectionEnd;

  if(!selectedText){
    // Insert the itlaics syntax at the current cursor position
    noteInput.value = noteInput.value.substring(0, startPos) + '====' + noteInput.value.substring(endPos);

    noteInput.selectionStart = startPos + 2;
    noteInput.selectionEnd = startPos + 2;   
    noteInput.focus();
  }

  if (selectedText) {
    if (selectedText.startsWith("==") && selectedText.endsWith("==")) {
      var formattedText = selectedText.substring(1, selectedText.length - 1);
      replaceSelection(formattedText);
    }
    else {
      var formattedText = "==" + selectedText + "==";
      replaceSelection(formattedText);
    }

    noteInput.selectionStart = startPos + formattedText.length;
    noteInput.selectionEnd = startPos + formattedText.length;
    noteInput.focus();
  }
}

// This function replaces the selected text
function replaceSelection(replacement) {
  var textBox = document.getElementById("noteInput");

  // Get the text before and after the selected text
  // Had to use a bit of chatGPT to figure out the syntax for these 2 lines
  var textBefore = textBox.value.substring(0, textBox.selectionStart);
  var textAfter = textBox.value.substring(textBox.selectionEnd, textBox.value.length);

  // Set the value of the textBox with the selected text removed
  textBox.value = textBefore + replacement + textAfter;
}

