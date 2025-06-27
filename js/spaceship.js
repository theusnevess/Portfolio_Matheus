document.addEventListener('DOMContentLoaded', () => {
  const spaceship = document.querySelector('.spaceship');
  
  // Esconder cursor padrão
  document.body.style.cursor = 'none';

  // Posicionamento preciso
  document.addEventListener('mousemove', (e) => {
    spaceship.style.left = `${e.clientX}px`;
    spaceship.style.top = `${e.clientY}px`;
  });

  // Restaurar cursor ao sair da página
  document.addEventListener('mouseleave', () => {
    spaceship.style.opacity = '0';
  });
  
  document.addEventListener('mouseenter', () => {
    spaceship.style.opacity = '1';
  });
});