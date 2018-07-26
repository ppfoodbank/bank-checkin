(function() {
    'use strict';

    var zipcode = -1;
    var otherButtonSelected = false;


    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    document.getElementById('zipcodeBackButton').addEventListener('click', function() {
        app.loadPreviousPage('index.html');
    });

    document.getElementById('zipcodeFirst').addEventListener('click', function(e) {
        zipcode = 98101;
        otherButtonSelected = false;
    });

    document.getElementById('zipcodeSecond').addEventListener('click', function(e) {
        zipcode = 98121;
        otherButtonSelected = false;
    });

    document.getElementById('zipcodeThird').addEventListener('click', function(e) {
        zipcode = 98104;
        otherButtonSelected = false;
    });

    document.getElementById('zipcodeOther').addEventListener('click', function(e) {
        otherButtonSelected = true;
    });

    document.getElementById('zipcodeOther-input').addEventListener('focus', function() {
        document.getElementById('zipcodeOther').classList.add('active');
    });

    document.getElementById('zipcodeOther-input').addEventListener('blur', function() {
        document.getElementById('zipcodeOther').classList.remove('active');
    });

    document.getElementById('zipcodeNextButton').addEventListener('click', function() {
        if (otherButtonSelected) {
            zipcode = document.getElementById('zipcodeOther-input').value;
        }
        if (zipcode != -1 && zipcode != "") app.loadNextPage('zipCode', zipcode, 'age.html');
    });
})();