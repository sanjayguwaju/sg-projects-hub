const cards = ['🍎', '🍌', '🍇', '🍓', '🍎', '🍌', '🍇', '🍓'];
let shuffledCards = cards.sort(() => 0.5 - Math.random());
const board = document.getElementById('board');
let firstCard, secondCard;
let flipped = false;
let lockBoard = false;

shuffledCards.forEach(card => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.dataset.value = card;
  cardElement.addEventListener('click', flipCard);
  board.appendChild(cardElement);
});

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.textContent = this.dataset.value;
  if (!flipped) {
    flipped = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkMatch();
}

function checkMatch() {
  if (firstCard.dataset.value === secondCard.dataset.value) {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.textContent = '';
      secondCard.textContent = '';
      lockBoard = false;
    }, 1000);
  }
  flipped = false;
}