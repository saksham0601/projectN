document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.getElementById('saveButton');
  const noteInput = document.getElementById('noteInput');
  const noteDisplay = document.getElementById('noteDisplay');

  saveButton.addEventListener('click', function() {
      const noteMarkdown = noteInput.value;
      const noteHTML = marked.parse(noteMarkdown); // Parse the Markdown into HTML
      noteDisplay.innerHTML = noteHTML; // Display the rendered HTML
  });
}); 