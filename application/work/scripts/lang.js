(function() {
    'use strict'

    window.onload = function() {
        document.getElementById('numCheckin').innerHTML = 'Check-in count: ' + app.numCheckin;
    }
    
    // TODO change this to save the actual values instead of id
    document.getElementById('langBack').addEventListener('click', function() {
        app.loadNextPage('id', uuidv4(), 'ethnic.html');
    });

    // TODO change this to save the actual values instead of id
    document.getElementById('langNext').addEventListener('click', function() {
        app.loadNextPage('id', uuidv4(), 'confirm.html');
    });
})();
