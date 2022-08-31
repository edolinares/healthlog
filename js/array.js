let inputOpt = ["Log","General","Mind","Body","Reads","Doctor Visit"]; // ARRAY OF TYPES OF ENTRIES
let inputOptPress = ''; // USED TO KNOW WHAT BUTTON /FORM IS REQUIRED
let mylog = []; // MY TEMPORAL DATABASE
let localStg = "HealthForm" // USED TO IN CASE I WANT TO CHANGE THE NAME OF THE LOCAL STORAGE 
let deleteMePress = ''; // USED TO KNOW WHAT ROW IS REQUIRED TO DELETE OF THE LOG
const url = '../js/db.json';