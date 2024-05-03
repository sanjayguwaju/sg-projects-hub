const form = document.getElementById('newsletterForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    message.textContent = `Thank you for subscribing with ${email}!`;
});