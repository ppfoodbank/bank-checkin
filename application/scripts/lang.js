(function() {
    'use strict'

    var spokenLang = "";

    document.getElementById('butCancel').addEventListener('click', function() {
        app.cancelCheckin();
    });

    //Selections
    document.getElementById('spanish').addEventListener('click', function() {
        spokenLang = "spanish";
    });

    document.getElementById('korean').addEventListener('click', function() {
        spokenLang = "korean";
    });

    document.getElementById('cantonese').addEventListener('click', function() {
        spokenLang = "cantonese";
    });

    document.getElementById('german').addEventListener('click', function() {
        spokenLang = "german";
    });

    document.getElementById('mandarin').addEventListener('click', function() {
        spokenLang = "mandarin";
    });

    document.getElementById('arabic').addEventListener('click', function() {
        spokenLang = "arabic";
    });

    document.getElementById('filipinoD').addEventListener('click', function() {
        spokenLang = "filipino dialect";
    });

    document.getElementById('russian').addEventListener('click', function() {
        spokenLang = "russian";
    });

    document.getElementById('vietnamese').addEventListener('click', function() {
        spokenLang = "vietnamese";
    });

    document.getElementById('japanese').addEventListener('click', function() {
        spokenLang = "japanese";
    });

    document.getElementById('butNot').addEventListener('click', function() {
        app.skipPage('confirm.html');
    });

    document.getElementById('lang-input').addEventListener('focus', function() {
        document.getElementById('other').classList.add("active");
    });

    document.getElementById('lang-input').addEventListener('blur', function() {
        document.getElementById('other').classList.remove("active");
    });

    //Navigation
    document.getElementById('langBack').addEventListener('click', function() {
        app.loadPreviousPage('gender.html');
    });

    document.getElementById('langNext').addEventListener('click', function() {
        var input = document.getElementById('lang-input').value;
        if (input.length > 0) {
            spokenLang = input;
        }

        app.loadNextPage('spokenLanguage', spokenLang, 'confirm.html');
    });
})();