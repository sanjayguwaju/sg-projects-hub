const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.onclick = () => modal.style.display = 'flex';
closeModalBtn.onclick = () => modal.style.display = 'none';