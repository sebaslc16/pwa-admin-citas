
//Instalar service worker, solo se ejectuta una vez
self.addEventListener('install', e => {
    console.log("Service worker instalado ");
    console.log(e);
});

//Activar service worker
self.addEventListener('activate', e => {
    console.log("Service worker activado ");
    console.log(e);
});

//Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);
});