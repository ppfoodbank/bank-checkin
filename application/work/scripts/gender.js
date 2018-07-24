(function() {
    'use strict'

    window.onload = function() {
        document.getElementById('numCheckin').innerHTML = 'Check-in count: ' + app.numCheckin;
    }
    
    document.getElementById('genderBackButton').addEventListener('click', function() {
        app.loadPreviousPage('ethnic.html');
    });
})();
