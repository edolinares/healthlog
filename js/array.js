let inputOpt = ["Log","General","Mind","Body","Reads","Doctor Visit"];
let inputForm = [
                [],
                [                 
                    {field: "Title",  
                    type: "text"},
                    {field: "Date",
                    type: "date"},
                    {field: "Description",
                    type: "text"}
                ],
                [                 
                    {field: "How do you feel?",  
                    type: "text"},
                    {field: "Date",
                    type: "date"},
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
                    {field: "Medic",  
                    type: "text"},
                    {field: "Date",  
                    type: "date"},
                    {field: "Symptoms",
                    type: "text"},
                    {field: "Diagnostic",
                    type: "text"},
                    {field: "Medicines",
                    type: "text"}
                ],
                ];
let inputOptPress = '';
let mylog = ["Log"];
let localStg = "HealthForm"
let deleteMePress = '';