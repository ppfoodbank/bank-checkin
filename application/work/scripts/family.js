(function() {
    'use strict'

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });
    
    document.getElementById('familyBackButton').addEventListener('click', function() {
        app.loadPreviousPage('housed.html');
    });

    document.getElementById('familyNextButton').addEventListener('click', function() {
        app.loadNextPage('familySize', {}, 'ethnic.html');
    });
})();
