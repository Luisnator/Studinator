this.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('v1').then(function(cache){
            return cache.addAll([
                '/studboard/',
                '/studboard/Serviceworker.js',
                '/studboard/Serviceworker-worker',
                '/studboard/Aufgaben.html',
                '/studboard/NeuerArtikel.html',
                '/studboard/News.html',
                '/studboard/Popup.html',
                '/studboard/Projekte.html',
                '/studboard/blank.html',
                '/studboard/index.html',
                '/studboard/img/',
                '/studboard/img/StudBoardLogo150x100.png',
                '/studboard/img/StudBoardLogo300x200.png',
                '/studboard/Script/',
                '/studboard/Script/Artikel.js',
                '/studboard/Script/JSON_Umwandlung.js',
                '/studboard/Script/Popup.js',
                '/studboard/Script/Positionsabfrage.js',
                '/studboard/Script/Uebersetzung.js'
            ]);
        })
    );
});

this.addEventListener('fetch', function(evt){
    console.log("Hole " + evt.request.url);
    
    evt.respondWith(
        caches.match(evt.request).then(
            function(res){
                console.log('Resource: ' + res.url + "aus dem Cache geholt");
                return res;
            }).catch(function(err){
                console.log('Resource: ' + evt.request.url + "nicht im Cache");
            })
    );
});