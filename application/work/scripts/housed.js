(function() {
    'use strict'

    var housed = "N/A";

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    document.getElementById('housedBackButton').addEventListener('click', function() {
        app.loadPreviousPage('visit.html');
    });

    document.getElementById('housedYesButton').addEventListener('click', function() {
        housed = true;
    });

    document.getElementById('housedNoButton').addEventListener('click', function() {
        housed = false;
    });

    document.getElementById('butNot').addEventListener('click', function() {
        app.skipPage('family.html');
    });

    document.getElementById('housedNextButton').addEventListener('click', function() {
        app.loadNextPage('isHoused', housed, 'family.html');
    });
})();