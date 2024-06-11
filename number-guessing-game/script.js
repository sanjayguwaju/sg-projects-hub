const numberToGuess = Math.floor(Math.random() * 100) + 1;
const message = document.getElementById('message');

document.getElementById('submit').addEventListener('click', () => {
    const userGuess = Number(document.getElementById('guess').value);
    if (userGuess === numberToGuess) {
        message.textContent = "Congratulations! You guessed the correct number!";
    } else if (userGuess > numberToGuess) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = "Too low! Try again.";
    }
});