(function() {
    'use strict';

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    document.getElementById('zipcodeBackButton').addEventListener('click', function() {
        app.loadPreviousPage('checkin.html');
    });
})();