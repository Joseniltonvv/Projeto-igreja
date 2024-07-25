// Lista de URLs das imagens (substitua com suas próprias imagens)
const images = [
    'imagem/va.jpeg',
    'imagem/ag.jpeg',
    'imagem/c.jpeg',
    'imagem/s.jpeg',
    'imagem/pr.jpeg',
    'imagem/rv.jpeg',
   
    
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
  