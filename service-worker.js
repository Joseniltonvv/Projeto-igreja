self.addEventListener('push', function(event) {
    const options = {
      body: event.data ? event.data.text() : 'Notificação padrão',
      icon: '/images/icon.png',
      badge: '/images/badge.png'
    };
  
    event.waitUntil(
      self.registration.showNotification('Título da Notificação', options)
    );
  });
  
  function inscreverUsuario() {
    navigator.serviceWorker.ready.then(function(registration) {
      const options = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array('<Sua chave pública VAPID>')
      };
      registration.pushManager.subscribe(options).then(function(subscription) {
        console.log('Inscrição bem-sucedida:', subscription);
        // Envie a inscrição para o servidor para armazená-la
      }).catch(function(error) {
        console.error('Falha ao inscrever-se:', error);
      });
    });
  }
  
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  const webPush = require('web-push');

const vapidKeys = {
  publicKey: '<Sua chave pública VAPID>',
  privateKey: '<Sua chave privada VAPID>'
};

webPush.setVapidDetails(
  'mailto:exemplo@seusite.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Enviar notificação para a inscrição do usuário
webPush.sendNotification(subscription, 'Sua mensagem de notificação')
  .then(function() {
    console.log('Notificação enviada com sucesso.');
  })
  .catch(function(error) {
    console.error('Erro ao enviar notificação:', error);
  });
