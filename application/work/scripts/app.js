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

var app = {
    isLoading: true,
    spinner: document.querySelector('.loader'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container'),
    cacheName: 'pmfb-checkin-data-v1',
    session: {
        "key": uuidv4,
        "zipcode": "",
        "age": "",
        "firstVisit": "",
        "housingStatus":"N/A",
        "familySize":
        {
            "0to2": "N/A",
            "3to18": "N/A",
            "19to54": "N/A",
            "55Plus": "N/A"
        },
        "ethnicGroups": [],
        "gender": "N/A",
        "preferredLang": "N/A"
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
app.commit() = function(){

}