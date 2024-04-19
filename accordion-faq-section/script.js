const accordions = document.querySelectorAll('.accordion');
accordions.forEach(acc => {
  acc.onclick = () => {
    const panel = acc.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  };
});