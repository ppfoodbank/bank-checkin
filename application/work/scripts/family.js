(function() {
    'use strict'

    var familyCat1 = 0;
    var familyCat2 = 0;
    var familyCat3 = 0;
    var familyCat4 = 0;

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });
    
    document.getElementById('familyBackButton').addEventListener('click', function() {
        app.loadPreviousPage('housed.html');
    });

    document.getElementById('familyNextButton').addEventListener('click', function() {
        app.loadNextPage('familySize', {}, 'ethnic.html');
    });

    document.getElementById('familyNextButton').addEventListener('click', function() {
        familyCat1 = document.getElementById('familyFirst-input').value;
        familyCat2 = document.getElementById('familySecond-input').value;
        familyCat3 = document.getElementById('familyThird-input').value;
        familyCat4 = document.getElementById('familyFourth-input').value;
        app.loadNextPage('FamilySizeCategory1Count', familyCat1, 'ethnic.html');
    });
})();
