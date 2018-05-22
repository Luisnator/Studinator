if(navigator.serviceWorker){
    let serviceworker = navigator.serviceWorker.register('Serviceworker-worker.js');
    let registFunction = function(reg){
        console.log("Worker registriert!");
    }
    let errorRegistFunction = function(err){
        console.log("Fehler beim Registrieren: " + err);
    }
    serviceworker.then(registFunction, errorRegistFunction);
} else {
    console.log("Service Worker nicht unterstützt.");
}
