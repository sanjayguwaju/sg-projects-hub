const toggleMenu = document.getElementById('toggleMenu');
const navLinks = document.getElementById('navLinks');

toggleMenu.onclick = () => {
  navLinks.classList.toggle('show');
};