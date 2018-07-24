(function() {
    'use strict'

    window.onload = function() {
        document.getElementById('numCheckin').innerHTML = 'Check-in count: ' + app.numCheckin;
    }

    document.getElementById('housedBackButton').addEventListener('click', function() {
        app.loadPreviousPage('visit.html');
    });
})();
