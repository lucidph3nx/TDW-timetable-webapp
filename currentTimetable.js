
/**
 * decides which timetable file to use on load
 * @return {string} timetable file name
 */
function getCurrentTimetable() {
  const oldTimetable = 'timetabledata_15072018.js';
  const newTimetable = 'timetabledata_24022019.js';
  const timetableChangeDate = new Date('02/24/2019'); // needs to go in the format MM/DD/YYYY stupid americans
  const todaysDate = new Date();
  timetableChangeDate.setHours(0, 0, 0, 0);
  todaysDate.setHours(0, 0, 0, 0);
  // Check if today is past the timetable change date
  if (todaysDate < timetableChangeDate) {
    return oldTimetable;
  } else {
    return newTimetable;
  }
};
