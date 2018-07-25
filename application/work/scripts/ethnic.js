(function() {
    'use strict'

    var ethnicGroup = null;

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    //Selections
    document.getElementById('shl').addEventListener('click', function() {
        ethnicGroup = null;
    });

    document.getElementById('ian').addEventListener('click', function() {
        ethnicGroup = null;
    });

    document.getElementById('aaa').addEventListener('click', function() {
        ethnicGroup = null;
    });

    document.getElementById('bao').addEventListener('click', function() {
        ethnicGroup = null;
    });

    document.getElementById('nhpi').addEventListener('click', function() {
        ethnicGroup = null;
    });

    document.getElementById('wc').addEventListener('click', function() {
        ethnicGroup = null;
    });

    document.getElementById('o').addEventListener('click', function() {
        ethnicGroup = null;
    });

    //Navigation
    document.getElementById('ethnicBack').addEventListener('click', function() {
        app.loadPreviousPage('family.html');
    });

    // TODO change this to save the actual values instead of id
    document.getElementById('ethnicNext').addEventListener('click', function() {
        app.loadNextPage('ethnicGroups', ethnicGroup, 'gender.html');
    });
})();