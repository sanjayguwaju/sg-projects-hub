const choices = ["rock", "paper", "scissors"];
const result = document.getElementById('result');

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function () {
    const userChoice = this.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let outcome;

    if (userChoice === computerChoice) {
      outcome = "It's a draw!";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
               (userChoice === "scissors" && computerChoice === "paper") ||
               (userChoice === "paper" && computerChoice === "rock")) {
      outcome = "You win!";
    } else {
      outcome = "You lose!";
    }

    result.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${outcome}`;
  });
});