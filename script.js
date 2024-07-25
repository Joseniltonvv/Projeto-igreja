// Lista de URLs das imagens (substitua com suas próprias imagens)
const images = [
    'imagem/1.jpeg',
    'imagem/10.jpeg',
    'imagem/3.jpeg',
    'imagem/7.jpeg',
    
  ];
  
  // Seleciona o container da galeria
  const galleryContainer = document.getElementById('image-gallery');
  
  // Adiciona cada imagem ao container
  images.forEach(imageUrl => {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Imagem';
    galleryContainer.appendChild(imgElement);
    
  });
  