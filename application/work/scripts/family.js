(function() {
    'use strict'

    window.onload = function() {
        document.getElementById('numCheckin').innerHTML = 'Check-in count: ' + app.numCheckin;
    }
    
    document.getElementById('familyBackButton').addEventListener('click', function() {
        app.loadPreviousPage('housed.html');
    });
})();
