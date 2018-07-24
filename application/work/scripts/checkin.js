(function() {
    'use strict'

    window.onload = function() {
        document.getElementById('numCheckin').innerHTML = 'Check-in count: ' + app.numCheckin;
    }
    
    document.getElementById('startCheckin').addEventListener('click', function() {
        app.loadNextPage('id', uuidv4(), 'zipcode.html');
    });
})();
