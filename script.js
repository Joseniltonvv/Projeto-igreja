// Lista de URLs das imagens (substitua com suas próprias imagens)
const images = [ 
    'imagem/ag.jpeg',
    'imagem/c.jpeg',
    'imagem/s.jpeg',
    'imagem/pr.jpeg',
    'imagem/rv.jpeg',
    'imagem/va.jpeg',
   
    
  ];

   
document.getElementById('scrolling-wrapper') .addEventListener('click', function() {
this.style.animationPlayState = this.style.animationPlayState === 'paused' ? 'running' : 'paused';


}); 

  // Remove URLs duplicadas
const uniqueImageUrls = [...new Set(imageUrls)];

// Seleciona o container da galeria
const scrollingWrapper = document.getElementById('scrolling-wrapper');

// Adiciona cada imagem ao container
uniqueImageUrls.forEach(imageUrl => {
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  imgElement.alt = 'Imagem';
  scrollingWrapper.appendChild(imgElement);
});

// Adiciona imagens novamente para criar um efeito de rolagem contínua
uniqueImageUrls.forEach(imageUrl => {
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  imgElement.alt = 'Imagem';
  scrollingWrapper.appendChild(imgElement);
});
  
document.getElementById('imagem-pausa').addEventListener('click', () => {
  const musica = document.getElementById('musica-automatica');
  if (musica.paused) {
      musica.play();
  }
});

document.getElementById('subscribe-now').addEventListener('click', function() {
  OneSignal.push(function() {
    OneSignal.showNativePrompt(); // Solicita permissão de notificações ao clicar no botão
  });
});

