const userCardsContainer = document.getElementById('user-cards');

// Fetch user data from the API
fetch('http://localhost:3000/api/users')
  .then(response => response.json())
  .then(users => {
    // Loop through the users and create a card for each user
    users.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('card');

      const name = document.createElement('h3');
      name.textContent = user.name;

      const email = document.createElement('p');
      email.textContent = `Email: ${user.email}`;

      const password = document.createElement('p');
      password.textContent = `Password: ${user.password}`;

      card.appendChild(name);
      card.appendChild(email);
      card.appendChild(password);

      userCardsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
