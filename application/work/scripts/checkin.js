(function() {
    'use strict'

    window.addEventListener('load', function() {
        document.getElementById('numCheckin').innerHTML = 'Check-in count: ' + app.numCheckin;
    });

    document.getElementById('startCheckin').addEventListener('click', function() {
        window.location = 'zipcode.html';
    });

    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
    }

    // Then later, request syncs
    navigator.serviceWorker.ready.then(function(swRegistration) {
        return swRegistration.sync.register('syncDB');
    });
})();