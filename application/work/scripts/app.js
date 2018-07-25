
(function() {
     var checkinInfo = 
     {"sessionList" : []};

    checkinInfo["sessionList"].push(
        {
        "zipCode": "",
        "ageBracket": "",
        "isDuplicated": false,
        "isHoused": false,
        "Category1Count": "N/A",
        "Category2Count": "N/A",
        "Category3Count": "N/A",
        "Category4Count": "N/A",
        "Race": "N/A",
        "Gender": "N/A",
        "SpokenLanguage": "N/A"
        }
    );   

    window.app = {
        cookieName: 'sessionData',
        container: document.querySelector('.main'),
        addDialog: document.querySelector('.dialog-container'),
        dbUrl: "https://pmfbapi.azurewebsites.net/api/Customer/adduser/",
        apiKey: "hE6U7t7PcEZviH17SJAh",
        userId: undefined,
        session: checkinInfo,
        numCheckin: 0
    };

    app.writeCookie = function() {
        Cookies.set(app.cookieName, app.session);
    }

    app.clearCookie = function() {
        Cookies.remove(app.cookieName);
    }

    app.loadCookie = function() {
        app.session = Cookies.getJSON(app.cookieName);
        if (app.session === undefined) {
            app.session = sessionData;
        }
    }

    app.loadPreviousPage = function(page) {
        window.location = page;
    }

    // Assign session key, write cookie, and advance
    app.loadNextPage = function(key, value, page) {
        app.session[key] = value;
        app.writeCookie();
        window.location = page;
    }

    // Clear session and return to checkin
    app.cancelCheckin = function() {
        app.clearCookie();
        window.location = 'index.html';
    }


//Save session data to storage and send to DB
app.commit = function(){
    //TODO: Test and if needed, change design to first store then try to send to DB
    var jsonDataList =  JSON.stringify(app.session);

    var request = new XMLHttpRequest();

    request.open("POST", window.app.dbUrl);
    //Add headers 
    request.setRequestHeader("apiKey", app.apiKey);
    request.setRequestHeader("correlationId", ""); 
    request.setRequestHeader("Content-Type", "application/json");
    //request.setRequestHeader("Content-Type", "text/plain");

    request.send(jsonDataList);
}

window.addEventListener('load', function() {
    console.log('Loading the cookie...');
    app.loadCookie();
});

})();