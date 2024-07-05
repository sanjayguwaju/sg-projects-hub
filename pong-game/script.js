const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

const paddleWidth = 10, paddleHeight = 100;
const ballSize = 10;
let ball = { x: canvas.width / 2, y: canvas.height / 2, dx: 2, dy: -2 };
let paddle1 = { y: canvas.height / 2 - paddleHeight / 2 };
let paddle2 = { y: canvas.height / 2 - paddleHeight / 2 };

function drawPaddle(y) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, y, paddleWidth, paddleHeight);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ballSize, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y + ball.dy < ballSize || ball.y + ball.dy > canvas.height - ballSize) {
        ball.dy = -ball.dy;
    }

    if (ball.x + ball.dx < ballSize) {
        if (ball.y > paddle1.y && ball.y < paddle1.y + paddleHeight) {
            ball.dx = -ball.dx;
        } else {
            alert('Game Over');
            document.location.reload();
        }
    }

    if (ball.x + ball.dx > canvas.width - ballSize) {
        if (ball.y > paddle2.y && ball.y < paddle2.y + paddleHeight) {
            ball.dx = -ball.dx;
        } else {
            alert('Game Over');
            document.location.reload();
        }
    }
}

function movePaddles() {
    canvas.addEventListener('mousemove', (e) => {
        paddle1.y = e.clientY - paddleHeight / 2;
    });

    paddle2.y = ball.y - paddleHeight / 2;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle(paddle1.y);
    drawPaddle(paddle2.y);
    drawBall();
    moveBall();
    movePaddles();
    requestAnimationFrame(draw);
}

draw();