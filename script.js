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
  
// Inicialize o EmailJS com seu User ID
emailjs.init('P8b7RfrI5UTiRNQKG');

// Adicione um ouvinte de eventos ao botão
document.getElementById('send-button').addEventListener('click', function() {
    var message = document.getElementById('message-box').value.trim();

    if (message !== '') {
        // Enviar o e-mail usando o EmailJS
        emailjs.send('service_kq5vte6', 'template_01', {
            message: message
        })
        .then(function(response) {
            document.getElementById('response-message').textContent = 'Pedido de oração enviado com sucesso!';
            document.getElementById('message-box').value = ''; // Limpa a caixa de mensagem
        }, function(error) {
            document.getElementById('response-message').textContent = 'Erro ao enviar pedido. Tente novamente.';
            console.error('Erro ao enviar e-mail:', error);
        });
    } else {
        document.getElementById('response-message').textContent = 'Por favor, digite um pedido de oração.';
    }
});
