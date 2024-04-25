const form = document.getElementById('loginForm');
const error = document.getElementById('error');

form.addEventListener('submit', function (e) {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    error.style.display = 'block';
    e.preventDefault();
  }
});