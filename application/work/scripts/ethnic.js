(function() {
    'use strict'

    var ethnicGroup = "";

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    //Selections
    document.getElementById('shl').addEventListener('click', function() {
        ethnicGroup = "shl";
    });

    document.getElementById('aian').addEventListener('click', function() {
        ethnicGroup = "aian";
    });

    document.getElementById('aaa').addEventListener('click', function() {
        ethnicGroup = "aaa";
    });

    document.getElementById('bao').addEventListener('click', function() {
        ethnicGroup = "bao";
    });

    document.getElementById('nhpi').addEventListener('click', function() {
        ethnicGroup = "nhpi";
    });

    document.getElementById('wc').addEventListener('click', function() {
        ethnicGroup = "wc";
    });

    document.getElementById('ethnic-input').addEventListener('focus', function() {
        document.getElementById('o').classList.add("active");
    });

    document.getElementById('ethnic-input').addEventListener('blur', function() {
        document.getElementById('o').classList.remove("active");
    });

    document.getElementById('butNot').addEventListener('click', function() {
        app.skipPage('gender.html');
    });

    //Navigation
    document.getElementById('ethnicBack').addEventListener('click', function() {
        app.loadPreviousPage('family.html');
    });

    document.getElementById('ethnicNext').addEventListener('click', function() {
        var input = document.getElementById('ethnic-input').value;
        if (input.length > 0) {
            ethnicGroup = input;
        }
        app.loadNextPage('Race', ethnicGroup, 'gender.html');
    });
})();