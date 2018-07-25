(function() {
    'use strict'

    var gender = '';

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });
    
    document.getElementById('genderBackButton').addEventListener('click', function() {
        app.loadPreviousPage('ethnic.html');
    });

    document.getElementById('genderNextButton').addEventListener('click', function() {
        app.loadNextPage('Gender', gender, 'lang.html');
    });

    document.getElementById('genderMaleButton').addEventListener('click', function() {
        gender = 'male';
    });

    document.getElementById('genderFemaleButton').addEventListener('click', function() {
        gender = 'female';
    });

    document.getElementById('genderOtherButton').addEventListener('click', function() {
        gender = 'other';
    });
})();
