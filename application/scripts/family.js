(function() {
    'use strict'

    var familyCat1 = 0;
    var familyCat2 = 0;
    var familyCat3 = 0;
    var familyCat4 = 0;

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    document.getElementById('familyFirst-input').addEventListener('focus', function() {
        document.getElementById('familyFirstButton').classList.add('active');
    });

    document.getElementById('familyFirst-input').addEventListener('blur', function() {
        document.getElementById('familyFirstButton').classList.remove('active');
    });

    document.getElementById('familySecond-input').addEventListener('focus', function() {
        document.getElementById('familySecondButton').classList.add('active');
    });

    document.getElementById('familySecond-input').addEventListener('blur', function() {
        document.getElementById('familySecondButton').classList.remove('active');
    });

    document.getElementById('familyThird-input').addEventListener('focus', function() {
        document.getElementById('familyThirdButton').classList.add('active');
    });

    document.getElementById('familyThird-input').addEventListener('blur', function() {
        document.getElementById('familyThirdButton').classList.remove('active');
    });

    document.getElementById('familyFourth-input').addEventListener('focus', function() {
        document.getElementById('familyFourthButton').classList.add('active');
    });

    document.getElementById('familyFourth-input').addEventListener('blur', function() {
        document.getElementById('familyFourthButton').classList.remove('active');
    });

    document.getElementById('butNot').addEventListener('click', function() {
        app.skipPage('ethnic.html');
    });

    document.getElementById('familyBackButton').addEventListener('click', function() {
        app.loadPreviousPage('housed.html');
    });

    document.getElementById('familyNextButton').addEventListener('click', function() {
        app.session["Category1Count"] = document.getElementById('familyFirst-input').value;
        app.session["Category2Count"] = document.getElementById('familySecond-input').value;
        app.session["Category3Count"] = document.getElementById('familyThird-input').value;
        app.session["Category4Count"] = document.getElementById('familyFourth-input').value;
        app.skipPage('ethnic.html');
    });
})();