(function() {
    'use strict'

    console.log('Executing checkin.js');

    window.onload = function() {
        document.getElementById('numCheckin').innerHTML = 'Check-in count: ' + app.numCheckin;
    }
    
    document.getElementById('startCheckin').addEventListener('click', function() {
        app.loadNextPage('id', uuidv4(), 'zipcode.html');
    });

    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
        }
    })();
