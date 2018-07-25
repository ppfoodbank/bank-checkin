(function() {
    'use strict';

    var zipcode = -1;

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    document.getElementById('zipcodeBackButton').addEventListener('click', function() {
        app.loadPreviousPage('checkin.html');
    });

    document.getElementById('zipcodeFirst').addEventListener('click', function(){
        zipcode = 98101;
    });

    document.getElementById('zipcodeSecond').addEventListener('click', function(){
        zipcode = 98121;
    });

    document.getElementById('zipcodeThird').addEventListener('click', function(){
        zipcode = 98104;
    });

    document.getElementById('zipcodeNextButton').addEventListener('click', function(){
        app.loadNextPage("zipcode", zipcode, "age.html");
    });
})();