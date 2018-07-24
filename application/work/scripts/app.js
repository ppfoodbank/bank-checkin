
(function() {
    'use strict';

    function uuidv4() {
        if ('crypto' in window) {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            )
        }
        else {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }
      
    var app = {
        isLoading: true,
        spinner: document.querySelector('.loader'),
        container: document.querySelector('.main'),
        addDialog: document.querySelector('.dialog-container'),
        cacheName: 'pmfb-checkin-data-v1',
        session: {},
    };

    document.getElementById('startCheckin').addEventListener('click', function() {
        app.loadNextPage('id', uuidv4(), 'question1.html');
    });

    // Assign session key and advance
    app.loadNextPage = function(key, value, page) {
        app.session[key] = value;
        window.location = page;
    }

    // Clear session and return to checkin
    app.cancelCheckin = function() {
        app.session = {};
        window.location = 'checkin.html';
    }
})();