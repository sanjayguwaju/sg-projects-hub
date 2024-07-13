const buttons = document.querySelectorAll('.button');
const colors = ['red', 'blue', 'green', 'yellow'];
let gameSequence = [];
let userSequence = [];
let level = 0;

function startGame() {
    level = 0;
    gameSequence = [];
    userSequence = [];
    document.getElementById('message').textContent = 'Watch the sequence';
    nextSequence();
}

function nextSequence() {
    userSequence = [];
    level++;
    document.getElementById('message').textContent = `Level ${level}`;
    const randomColor = colors[Math.floor(Math.random() * 4)];
    gameSequence.push(randomColor);
    flashSequence();
}

function flashSequence() {
    let i = 0;
    const interval = setInterval(() => {
        flashColor(gameSequence[i]);
        i++;
        if (i >= gameSequence.length) clearInterval(interval);
    }, 1000);
}

function flashColor(color) {
    const button = document.getElementById(color);
    button.style.opacity = 0.5;
    setTimeout(() => button.style.opacity = 1, 500);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.id;
        userSequence.push(color);
        checkAnswer(userSequence.length - 1);
    });
});

function checkAnswer(currentLevel) {
    if (userSequence[currentLevel] === gameSequence[currentLevel]) {
        if (userSequence.length === gameSequence.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        document.getElementById('message').textContent = `Game Over! You reached level ${level}`;
        setTimeout(startGame, 2000);
    }
}

startGame();