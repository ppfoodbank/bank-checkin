(function() {
    'use strict'

    window.onload = function() {
        document.getElementById('numCheckin').innerHTML = 'Check-in count: ' + app.numCheckin;
    }
    
    document.getElementById('visitBackButton').addEventListener('click', function() {
        app.loadPreviousPage('age.html');
    });
})();
