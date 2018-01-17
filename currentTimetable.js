function getCurrentTimetable() {

    var TimetableChangeDate = new Date("11/19/2017");
    var todaysDate = new Date();
    TimetableChangeDate.setHours(0,0,0,0);
    todaysDate.setHours(0,0,0,0);
    // Check if today is past the timetable change date
    if(todaysDate < TimetableChangeDate){
        return "timetabledata002.js";
    } else {
        return "timetabledata_10012018.js";
    }

};