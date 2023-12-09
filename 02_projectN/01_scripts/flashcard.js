let currentFlashcardIndex = 0;
let flashcards = [];

document.getElementById('addCard').addEventListener('click', function() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;

    if (question && answer) {
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');
        flashcard.innerHTML = `<div class="question">${question}</div>
                               <div class="answer" style="display:none">${answer}</div>`;
        flashcard.style.display = flashcards.length === 0 ? 'block' : 'none';
        flashcards.push(flashcard);

        flashcard.addEventListener('click', function() {
            const questionElement = this.querySelector('.question');
            const answerElement = this.querySelector('.answer');
            if (questionElement.style.display === 'none') {
                questionElement.style.display = 'block';
                answerElement.style.display = 'none';
            } else {
                questionElement.style.display = 'none';
                answerElement.style.display = 'block';
            }
        });

        document.querySelector('.flashcard-container').appendChild(flashcard);
        document.getElementById('question').value = '';
        document.getElementById('answer').value = '';
    } else {
        alert('Please enter both a question and an answer.');
    }
});

document.getElementById('nextButton').addEventListener('click', function() {
    if (currentFlashcardIndex < flashcards.length - 1) {
        flashcards[currentFlashcardIndex].style.display = 'none';
        currentFlashcardIndex++;
        flashcards[currentFlashcardIndex].style.display = 'block';
    }
});

document.getElementById('prevButton').addEventListener('click', function() {
    if (currentFlashcardIndex > 0) {
        flashcards[currentFlashcardIndex].style.display = 'none';
        currentFlashcardIndex--;
        flashcards[currentFlashcardIndex].style.display = 'block';
    }
});
