const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const grid = 20;
let snake = [{ x: 160, y: 160 }];
let food = { x: 320, y: 320 };
let direction = { x: 0, y: 0 };
let score = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' && direction.y === 0) {
    direction = { x: 0, y: -grid };
  } else if (e.key === 'ArrowDown' && direction.y === 0) {
    direction = { x: 0, y: grid };
  } else if (e.key === 'ArrowLeft' && direction.x === 0) {
    direction = { x: -grid, y: 0 };
  } else if (e.key === 'ArrowRight' && direction.x === 0) {
    direction = { x: grid, y: 0 };
  }
});

function gameLoop() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    food = { x: Math.floor(Math.random() * 20) * grid, y: Math.floor(Math.random() * 20) * grid };
  } else {
    snake.pop();
  }

  if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
    return alert(`Game over! Score: ${score}`);
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.forEach(segment => {
    ctx.fillStyle = 'green';
    ctx.fillRect(segment.x, segment.y, grid, grid);
  });

  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, grid, grid);

  setTimeout(gameLoop, 100);
}

gameLoop();