const form = document.getElementById('signupForm');
    const error = document.getElementById('error');

    form.addEventListener('submit', function (e) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (!name || !email || !password || password !== confirmPassword) {
        error.style.display = 'block';
        e.preventDefault();
      }
    });