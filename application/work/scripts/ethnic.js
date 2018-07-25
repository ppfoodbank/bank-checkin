(function() {
    'use strict'

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });
    
    // TODO change this to save the actual values instead of id
    document.getElementById('ethnicBack').addEventListener('click', function() {
        app.loadNextPage('id', uuidv4(), 'family.html');
    });

    // TODO change this to save the actual values instead of id
    document.getElementById('ethnicNext').addEventListener('click', function() {
        app.loadNextPage('id', uuidv4(), 'gender.html');
    });
})();
