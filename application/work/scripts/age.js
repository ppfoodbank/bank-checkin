(function() {
    'use strict';

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    document.getElementById('ageBackButton').addEventListener('click', function() {
        app.loadPreviousPage('zipcode.html');
    });
})();