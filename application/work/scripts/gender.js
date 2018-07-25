(function() {
    'use strict'

    var gender = '';
    var otherButtonSelected = false;

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });
    
    document.getElementById('genderBackButton').addEventListener('click', function() {
        app.loadPreviousPage('ethnic.html');
    });

    document.getElementById('genderNextButton').addEventListener('click', function() {
        if (otherButtonSelected) {
            gender =  document.getElementById('genderOther-input').value;
        }
        app.loadNextPage('Gender', gender, 'lang.html');
    });

    document.getElementById('genderMaleButton').addEventListener('click', function() {
        gender = 'male';
        otherButtonSelected = false;
    });

    document.getElementById('genderFemaleButton').addEventListener('click', function() {
        gender = 'female';
        otherButtonSelected = false;
    });

    document.getElementById('genderOtherButton').addEventListener('click', function() {
        otherButtonSelected = true;
    });

    document.getElementById('genderOther-input').addEventListener('focus', function() {
        document.getElementById('genderOtherButton').classList.add('active');
    });

    document.getElementById('genderOther-input').addEventListener('blur', function() {
        document.getElementById('genderOtherButton').classList.remove('active');
    });
})();
