//Image detection was created with the help of ChatGPT
function extractImageLinks(markdownContent) {
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    const matches = [];
    let match;

    while ((match = imageRegex.exec(markdownContent)) !== null) {
        matches.push(match[1]);
    }

    return matches;
}

function displayImages() {
    const markdownInput = document.getElementById('noteInput').value;
    const markdownContainer = document.getElementById('noteDisplay');

    // Clear previous content
    markdownContainer.innerHTML = '';

    // Extract image links
    const imageLinks = extractImageLinks(noteInput);

    // Display images
    imageLinks.forEach(imageLink => {
        const img = document.createElement('img');
        img.src = imageLink;
        img.alt = 'Image';
        markdownContainer.appendChild(img);
    });
}