(function () {
    emailjs.init("YOUR_USER_ID");
})();

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => alert('Message Sent!'), (error) => alert('Failed to send message.'));
});