// Menu Mobile
const menuBtn = document.querySelector('.cabecalho__menu-mobile');
const menu = document.querySelector('.cabecalho__menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

// Efeito de scroll no header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.cabecalho');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    header.style.animation = 'headerScroll 0.5s ease';
  } else {
    header.classList.remove('scrolled');
  }
});

// Fechar menu ao clicar em um link
const menuLinks = document.querySelectorAll('.cabecalho__menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menuBtn.classList.remove('active');
      menu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
});