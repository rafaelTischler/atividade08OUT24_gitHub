// O código só será executado após o carregamento completo da página
window.onload = function() {
    const button = document.getElementById('button');
  
    button.addEventListener('mouseover', () => {
      // Tamanho da janela do navegador
      const windowWidth = window.innerWidth - button.offsetWidth;
      const windowHeight = window.innerHeight - button.offsetHeight;
  
      // Posição aleatória
      const randomX = Math.random() * windowWidth;
      const randomY = Math.random() * windowHeight;
  
      // Mover o botão
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    });
  };
  