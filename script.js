// Lista de URLs das imagens (substitua com suas próprias imagens)
const images = [ 
    'imagem/ag.jpeg',
    'imagem/c.jpeg',
    'imagem/s.jpeg',
    'imagem/pr.jpeg',
    'imagem/rv.jpeg',
    'imagem/va.jpeg',
   
    
  ];
  
  // Remove URLs duplicadas
const uniqueImageUrls = [...new Set(imageUrls)];

// Seleciona o container da galeria
const galleryContainer = document.getElementById('image-gallery');

// Adiciona cada imagem ao container
uniqueImageUrls.forEach(imageUrl => {
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  imgElement.alt = 'Imagem';
  galleryContainer.appendChild(imgElement);
    
  });
  