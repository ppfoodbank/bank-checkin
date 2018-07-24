
(function() {
    'use strict';

    function uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
      }
      
      console.log(uuidv4());
    var app = {
        isLoading: true,
        spinner: document.querySelector('.loader'),
        container: document.querySelector('.main'),
        addDialog: document.querySelector('.dialog-container'),
        cacheName: 'pmfb-checkin-data-v1',
        session: {},
    };

    document.getElementById('startCheckin').addEventListener('click', function() {
        app.startCheckinProcess();
    });

    app.startCheckinProcess = function() {
        var checkinId = uuidv4();
        app.session.id = checkinId;

        window.location = 'question1.html';
    };
})();