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


document.getElementById('startButton').addEventListener('click', function() {
  document.querySelector('.welcome-screen').classList.add('hidden');
  document.getElementById('mainScreen').classList.remove('hidden');
});



let currentIndex = 0;
let images = document.querySelectorAll('.carousel img');
images[currentIndex].classList.add('active');

function toggleCarousel() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    } else {
        interval = setInterval(nextImage, 3000);
    }
}

let interval = setInterval(nextImage, 3000);

function nextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}
