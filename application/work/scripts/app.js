//TODO: Add local logging for debugging issues
function uuidv4() {
    if ('crypto' in window) {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    } else {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

//var uuidv4 = uuidv4();

var app = {
    isLoading: true,
    spinner: document.querySelector('.loader'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container'),
    dbUrl: "https://pmfbapi.azurewebsites.net/api/Customer/adduser/",
    apiKey: "hE6U7t7PcEZviH17SJAh",
    cacheName: 'pmfb-checkin-data-v1', //TODO: REmove?
    userlKey: uuidv4,
    session: {
        "zipCode": "",
        "ageBracket": "",
        "isDuplicated": "",
        "isHoused": "N/A",
        "FamilySizeCategory1Count": "N/A", //0 to 2
        "FamilySizeCategory2Count": "N/A", // 3 to 18
        "FamilySizeCategory3Count": "N/A", // 19 to 54
        "FamilySizeCategory4Count": "N/A", // 55+
        "Race": "N/A",
        "Gender": "N/A",
        "SpokenLanguage": "N/A"
    },
    numCheckin: 0
};

app.loadPreviousPage = function(page) {
    window.location = page;
}

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

//Save session data to storage and send to DB
app.commit = function() {
    //TODO: Test and if needed, change design to first store then try to send to DB
    var jsonDataList = [JSON.stringify(app.session)];

    var request = new XMLHttpRequest();
    request.open("POST", app.dbUrl, true);

    //Add headers
    request.setRequestHeader("apiKey", app.apiKey);
    request.setRequestHeader("correlationId", app.uuidv4);

    request.send(jsonDataList);
}