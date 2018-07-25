(function() {
    'use strict'

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });
    
    document.getElementById('genderBackButton').addEventListener('click', function() {
        app.loadPreviousPage('ethnic.html');
    });
})();
