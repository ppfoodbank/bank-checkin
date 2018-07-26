(function() {
    'use strict'

    var firstVisit = false;
    var selected = false;

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    document.getElementById('visitBackButton').addEventListener('click', function() {
        app.loadPreviousPage('age.html');
    });

    document.getElementById('visitNextButton').addEventListener('click', function() {
        if (selected) app.loadNextPage('isDuplicated', !firstVisit, 'housed.html');
    });

    document.getElementById('visitYesButton').addEventListener('click', function(e) {
        app.highlight(e.currentTarget);
        firstVisit = true;
        selected = true;
    });

    document.getElementById('visitNoButton').addEventListener('click', function(e) {
        app.highlight(e.currentTarget);
        firstVisit = false;
        selected = true;
    });
})();