let inputOpt = ["Log","General","Mind","Body","Reads","Doctor Visit"]; // ARRAY OF TYPES OF ENTRIES
let inputForm = [ // ARRAY OF ELEMENTS, FIELDS, AND TYPES OF EACH INPUT 
                [],
                [                 
                    {field: "Date",
                    type: "date"},
                    {field: "Title",  
                    type: "text"},
                    {field: "Description",
                    type: "text"}
                ],
                [                 
                    {field: "Date",
                    type: "date"},
                    {field: "How do you feel?",  
                    type: "text"},
                    {field: "Why?",
                    type: "text"}
                ],
                [                 
                    {field: "Date",
                    type: "date"},
                    {field: "Weigth",  
                    type: "number"},
                    {field: "Heigth",  
                    type: "number"},
                    {field: "IMC",
                    type: "number"}
                ],
                [   
                    {field: "Date",
                    type: "date"},            
                    {field: "Select",  
                    type: "select",
                    options : ['temperature','blood pressure','Oxigenation','Heart Rate','Breat Frequency']},
                    {field: "Read",
                    type: "number"}
                ],
                [                 
                    {field: "Date",  
                    type: "date"},
                    {field: "Medic",  
                    type: "text"},
                    {field: "Symptoms",
                    type: "text"},
                    {field: "Diagnostic",
                    type: "text"},
                    {field: "Medicines",
                    type: "text"}
                ],
                ];
let inputOptPress = ''; // USED TO KNOW WHAT BUTTON /FORM IS REQUIRED
let mylog = []; // MY TEMPORAL DATABASE
let localStg = "HealthForm" // USED TO IN CASE I WANT TO CHANGE THE NAME OF THE LOCAL STORAGE 
let deleteMePress = ''; // USED TO KNOW WHAT ROW IS REQUIRED TO DELETE OF THE LOG