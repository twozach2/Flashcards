document.addEventListener('DOMContentLoaded', () => {
    const flashcard = document.querySelector('.flashcard');
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });

    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', () => {
        // Here you will add the logic to load the next flashcard.
        // For now, it just unflips the card.
        flashcard.classList.remove('flipped');
    });
});
