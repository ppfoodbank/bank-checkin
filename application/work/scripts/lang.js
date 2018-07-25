(function() {
    'use strict'

    var preferredLang = null;

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    //Selections
    document.getElementById('spanish').addEventListener('click', function() {
        preferredLang = "spanish";
    });

    document.getElementById('korean').addEventListener('click', function() {
        preferredLang = "korean";
    });

    document.getElementById('cantonese').addEventListener('click', function() {
        preferredLang = "cantonese";
    });

    document.getElementById('german').addEventListener('click', function() {
        preferredLang = "german";
    });

    document.getElementById('mandrin').addEventListener('click', function() {
        preferredLang = "mandrin";
    });

    document.getElementById('arabic').addEventListener('click', function() {
        preferredLang = "arabic";
    });

    document.getElementById('filipinoD').addEventListener('click', function() {
        preferredLang = "filipino dialect";
    });

    document.getElementById('russian').addEventListener('click', function() {
        preferredLang = "russian";
    });

    document.getElementById('vietnamese').addEventListener('click', function() {
        preferredLang = "vietnamese";
    });

    document.getElementById('japanese').addEventListener('click', function() {
        preferredLang = "japanese";
    });

    document.getElementById('other').addEventListener('click', function() {
        preferredLang = document.getElementById('other-input').nodeValue;
    });

    //Navigation
    document.getElementById('langBack').addEventListener('click', function() {
        app.loadPreviousPage('gender.html');
    });

    // TODO change this to save the actual values instead of id
    document.getElementById('langNext').addEventListener('click', function() {
        app.loadNextPage('preferredLang', preferredLang, 'confirm.html');
    });
})();