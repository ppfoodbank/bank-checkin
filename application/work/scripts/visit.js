(function() {
    'use strict'

    var firstVisit = false;

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });
    
    document.getElementById('visitBackButton').addEventListener('click', function() {
        app.loadPreviousPage('age.html');
    });

    document.getElementById('visitNextButton').addEventListener('click', function() {
        app.loadNextPage('firstVisit', firstVisit, 'housed.html');
    });

    document.getElementById('visitYesButton').addEventListener('click', function() {
        firstVisit = true;
    });

    document.getElementById('visitNoButton').addEventListener('click', function() {
        firstVisit = false;
    });
})();
