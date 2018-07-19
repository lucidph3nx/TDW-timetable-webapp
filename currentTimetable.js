function getCurrentTimetable() {
    //I dont know why but this needs to go in the format MM/DD/YYYY stupid americans
    var TimetableChangeDate = new Date("07/15/2018");
    var todaysDate = new Date();
    TimetableChangeDate.setHours(0,0,0,0);
    todaysDate.setHours(0,0,0,0);
    // Check if today is past the timetable change date
    if(todaysDate < TimetableChangeDate){
        return "timetabledata_10032018.js";
    } else {
        return "timetabledata_15072018.js";
    }

};