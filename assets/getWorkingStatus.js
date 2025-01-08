// array of public holidays 
// to be updated on or before the last public holiday listed
// Assume that the office always closes on Sat and Sun, so
// only non-weekend holidays need to be put here
const ph = [
    new Date("2022-12-26 0:0:0:0").getTime(),
    new Date("2022-12-27 0:0:0:0").getTime(),
    new Date("2023-01-02 0:0:0:0").getTime(),
    new Date("2023-01-26 0:0:0:0").getTime()
]

const DAY = [
    "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
];

const hrOpen = 9, hrClose = 17; // working hours: hrOpen:00 - hrClose:00

// check whether a date is holiday
// return true if it is a holiday (including Sat, Sun and public holidays)
// false otherwise
function isHoliday(d) {
    const dayOfWeek = d.getDay();
    const dateOnly = new Date(d);
    dateOnly.setHours(0, 0, 0, 0);
    return (dayOfWeek == 0 || dayOfWeek == 6 || ph.includes(dateOnly.getTime()))
}

// return the next working day of a given date d
function getNextWorkingDate(d) {
    let nd = new Date(d);
    do {
        nd.setDate(nd.getDate() + 1); // set to the next date
    } while (isHoliday(nd))
    return nd;
}

function getWorkingStatus() {
    const currDt = new Date();
    const hours = currDt.getHours();
    const closeMsg = "(closed - will open at " + hrOpen + "am Sydney time ";

    if (hours >= hrOpen && hours < hrClose && //within working hours
        !isHoliday(currDt)) {
        document.getElementById("working-status").innerHTML =
            "(open - will close at " + (hrClose - 12) + "pm Sydney time)";
    }
    else if (!isHoliday(currDt) && hours < hrOpen) { // close but will be open this morning
        document.getElementById("working-status").innerHTML =
            `${closeMsg}this morning)`;
    } else { // closed but open tomorrow or next working day
        const nwd = getNextWorkingDate(currDt);
        let nd = new Date(currDt);
        nd.setDate(nd.getDate() + 1); // set to the next date
        if (nd.getDate() == nwd.getDate()) { // next working day is tomorrow
            document.getElementById("working-status").innerHTML =
                `${closeMsg}tomorrow)`;
        } else {
            const doW = currDt.getDay();
            const doW_nwd = nwd.getDay();
            if (doW_nwd > doW) {
                document.getElementById("working-status").innerHTML =
                    `${closeMsg}this ${DAY[doW_nwd]})`;
            } else {
                document.getElementById("working-status").innerHTML =
                    `${closeMsg}next ${DAY[doW_nwd]})`;
            }
        }
    }
}
