const body = document.body;
const colorChangeBtn = document.getElementById('colorChangeBtn');
const colors = ['blue', 'red', 'yellow', 'green', 'white'];

colorChangeBtn.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
});