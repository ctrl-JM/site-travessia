const botaoMenu = document.getElementById('menu-toggle');
const linksMenu = document.getElementById('menu-links');
const icon = document.getElementById('menu-icon');

botaoMenu.addEventListener('click', () => {
  linksMenu.classList.toggle('ativo');
  icon.classList.toggle('aberto');
});
