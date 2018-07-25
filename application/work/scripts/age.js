(function() {
    'use strict';

    var age = -1;

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    document.getElementById('ageBackButton').addEventListener('click', function() {
        app.loadPreviousPage('zipcode.html');
    });

    document.getElementById('ageNextButton').addEventListener('click', function() {
        app.loadNextPage('age', age, 'visit.html');
    });

    document.getElementById('ageFirst').addEventListener('click', function() {
        age = "0-2";
    });

    document.getElementById('ageSecond').addEventListener('click', function() {
        age = "3-18";
    });

    document.getElementById('ageThird').addEventListener('click', function() {
        age = "19-54";
    });

    document.getElementById('ageFourth').addEventListener('click', function() {
        age = "55+";
    });
})();