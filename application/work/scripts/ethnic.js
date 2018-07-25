(function() {
    'use strict'

    var ethnicGroup = null;

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    //Selections
    document.getElementById('shl').addEventListener('click', function() {
        this.classList.toggle('active');
        ethnicGroup = null;
    });

    document.getElementById('ian').addEventListener('click', function() {
        this.classList.toggle('active');
        ethnicGroup = null;
    });

    document.getElementById('aaa').addEventListener('click', function() {
        this.classList.toggle('active');
        ethnicGroup = null;
    });

    document.getElementById('bao').addEventListener('click', function() {
        this.classList.toggle('active');
        ethnicGroup = null;
    });

    document.getElementById('nhpi').addEventListener('click', function() {
        this.classList.toggle('active');
        ethnicGroup = null;
    });

    document.getElementById('wc').addEventListener('click', function() {
        this.classList.toggle('active');
        ethnicGroup = null;
    });

    //Other Text Field
    document.getElementById('o').addEventListener('click', function() {
        this.classList.toggle('active');
    });

    document.getElementById('ethnic-input').addEventListener('oninput', function() {
        document.getElementById('o').classList.toggle('active');
    });

    //Navigation
    document.getElementById('ethnicBack').addEventListener('click', function() {
        app.loadPreviousPage('family.html');
    });

    document.getElementById('ethnicNext').addEventListener('click', function() {
        if ((document.getElementById('ethnic-input').nodeValue).length > 0) {
            ethnicGroup
        }
        app.loadNextPage('ethnicGroups', ethnicGroup, 'gender.html');
    });
})();