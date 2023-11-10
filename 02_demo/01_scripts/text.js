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