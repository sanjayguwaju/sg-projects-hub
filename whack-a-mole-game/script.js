const holes = document.querySelectorAll('.hole');
let score = 0;
let mole;

function showMole() {
  const randomHole = holes[Math.floor(Math.random() * holes.length)];
  randomHole.classList.add('mole');
  mole = randomHole;
  setTimeout(() => {
    randomHole.classList.remove('mole');
    showMole();
  }, 1000);
}

holes.forEach(hole => {
  hole.addEventListener('click', function () {
    if (this === mole) {
      score++;
      document.getElementById('score').textContent = score;
    }
  });
});

showMole();