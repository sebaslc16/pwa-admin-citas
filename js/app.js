if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
        .then(registrado => console.log('Service worker registrado...', registrado))
        .catch(error => console.log('Error a la hora de registrar el serviceWorker...', error));
} else {
    console.log('ServiceWokers no soportados por el navegador..');
}