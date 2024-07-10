const words = ['javascript', 'hangman', 'programming', 'developer'];
const randomWord = words[Math.floor(Math.random() * words.length)];
const lettersContainer = document.querySelector('.letters');
const wordContainer = document.querySelector('.word');
const message = document.querySelector('.message');
let guessedLetters = [];
let remainingGuesses = 6;

// Create word blanks
randomWord.split('').forEach(() => {
  const letterElement = document.createElement('span');
  letterElement.textContent = '_ ';
  wordContainer.appendChild(letterElement);
});

// Create alphabet letters for guessing
for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  const letterElement = document.createElement('div');
  letterElement.classList.add('letter');
  letterElement.textContent = letter;
  letterElement.addEventListener('click', () => guessLetter(letter));
  lettersContainer.appendChild(letterElement);
}

function guessLetter(letter) {
  if (guessedLetters.includes(letter)) return;
  guessedLetters.push(letter);
  const letterElements = document.querySelectorAll('.word span');

  let correctGuess = false;
  randomWord.split('').forEach((char, index) => {
    if (char.toUpperCase() === letter) {
      letterElements[index].textContent = char.toUpperCase() + ' ';
      correctGuess = true;
    }
  });

  if (!correctGuess) {
    remainingGuesses--;
    message.textContent = `Wrong guess! Remaining guesses: ${remainingGuesses}`;
  }

  if (remainingGuesses === 0) {
    message.textContent = `Game Over! The word was ${randomWord.toUpperCase()}`;
    disableLetters();
  }

  if (!Array.from(letterElements).some(el => el.textContent === '_ ')) {
    message.textContent = `Congratulations! You guessed the word: ${randomWord.toUpperCase()}`;
    disableLetters();
  }
}

function disableLetters() {
  const letterButtons = document.querySelectorAll('.letter');
  letterButtons.forEach(button => button.style.pointerEvents = 'none');
}