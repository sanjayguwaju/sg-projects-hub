const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strength');

passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    let strength = '';

    if (password.length < 6) {
        strength = 'Weak';
    } else if (password.length >= 6 && password.match(/[A-Z]/) && password.match(/[0-9]/)) {
        strength = 'Strong';
    } else {
        strength = 'Medium';
    }

    strengthText.textContent = `Password strength: ${strength}`;
});