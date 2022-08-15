function loadHero(){ // RUNS ON LOADING PAGE / CORRE AL CARGAR PAGINA
    const str = localStorage.getItem(localStg); // WE GET THE INFO OF LOCAL STORAGE / OBTENEMOS LOS DATOS DEL LOCAL STORAGE
    mylog = str ? JSON.parse(str) : mylog;
    let left = document.querySelector('#left');  // DEFINE THE LEFT BOX AND ADD IMAGE / SE DEFINEN EL HERO
    left.appendChild(domItem('img','','onclick','moveH("left",-50)','src','./img/hero.svg'));
    let right = document.querySelector('#right'); // DEFINE THE WELCOME MESSAGE
    right.setAttribute('onclick','moveH("left",50)');
    document.querySelector('#right').style.backgroundColor = "var(--darkcolor)";
    right.appendChild(domItem('h1','Welcome','id','welcome','onclick','moveH("left",50)'));
    let icon = domItem('i','','class','uil uil-angle-right-b','id','Go');
    right.appendChild(icon);
    let back = document.querySelector('#back');  // POPULATE THE BUTTONS FOR EACH TYPE OF ENTRIES (HIDDEN AT THE BEGGINING) / SE POBLAN BOTONES AUNQUE NO SE VEAN AUN
    inputOpt.forEach( element =>{
        button = domItem('input','','type','button','value',element);
        button.setAttribute('id',"inputOpt");
        back.appendChild(button);
    });
        //LISTENERS FOR EACH BUTTON OF ENTRY TYPE /  ESCUCHADORES DE BOTONES
    let inputOptbtns = document.querySelectorAll('#inputOpt');
    inputOptbtns.forEach(function (i) { i.addEventListener('click', function() {    
        inputOptPress = i.value;  
        document.getElementById("left").style.zIndex = "-1";
        populateForm();
    });});
}

function populateForm(){ // CALLED TO FILL THE FORM DEPENDING THE SELECTED ENTRY / SE LLAMA PARA POBLAR EL FORMULARIO SELECCIONADO
    let log = document.querySelector('#log');
  log.innerHTML = ''; // CLEARS THE CURRENT CONTENT / BORRA CONTENIDO ACTUAL
    let index = 0;
    for (let i = 0; i < inputOpt.length; i++) { index = inputOpt[i] == inputOptPress ? i : index; } // IDENTIFY THE ENTRY REQUIRED / IDENTIFICA EL FORMULARIO
    moveH('back',50); 
    if (index > 0){ 
        let mainbox = domItem('div','','class','vertical ','id','');
        let title = domItem('h2',inputOpt[index],'class','','id','');
        mainbox.appendChild(title);  // ADD THE TITLE OF THE ENTRY / AGREGA UN TITULO
        inputForm[index].forEach (element =>{ // ADD THE TITLE OF EACH FIELD / AGREGA UN SUBTITULO DE PREGUNTA
            mainbox.appendChild(domItem('h3',element.field,'class','','id',''));
            if (element.type == 'select'){ //IN CASE IS A SELECT WE ADD THE OPTIONS / PARA DROPBOX SE TRATA DISTINTO
                select =  domItem('select','','id','dropbox','name',element.field);
                element.options.forEach(element2 =>{ select.appendChild(domItem('option',element2,'id','','class',''))});
                mainbox.appendChild(select);
            }
            else { // IF IS NOT A SELECT WE SIPLY ADD THE INPUT AND DEFINE THE TYPE TO REDUCE ERRORS 
                items = domItem('input','','type',element.type,'id',element.field);
                mainbox.appendChild(items);
            }
        }); 
        let button = domItem('input','','type','button','value','Save');
        button.setAttribute('onclick','save('+index+')'); // NOW WE ADD THE DELETEME OPTION TO EACH ROW / AGREGAMOS EL BOTON BORRAR
        mainbox.appendChild(button);
        log.appendChild(mainbox);
    }
    else showLog(); 
}

function save(index){ // FUNCTION CALLED ONCE SAVE IS CLICKED ON EACH FORM / FUNCION PARA GUARDAR EL FORMULARIO
    let formError = false; // VARIABLE USED TO KNOW IF ITS FILLED CORRECTLY 
    let formData = []; // CLEARS THE TEMPORAL ARRAY 
        formData.push(inputOpt[index]); // ADDS THE TYPE OF FORM
        inputForm[index].forEach(element =>{
            if (element.type == 'select'){  //IN CASE OF SELECT WE NEED TO FIND THE SELECTEDONE / BUSCAR EL SELECCIONADO
                let select = document.getElementById('dropbox');
                formData.push(select.options[select.selectedIndex].value);
            }
            else{ 
                let formInput = document.getElementById(element.field);
                if (formInput.value !== ''){ // WE CHECK THE INPUTS ARE NOT BLANK IN CASE OF BLANK WE ACTIVATE ERROR TO STOP THE PROCESS / BUSCAMOS QUE TENGA DATOS
                    formData.push(formInput.value); // ELSE WE ADD THE INPUT TO OUR TEMP ARRAY
                } else {
                    formError = true; // IN CASE OF ERROR WE SEND A FLOATING PAGE TO WARN / SINO TIENE MANDAMOS ERROR
                    notification('error','fill the form properly');
                }
            }
        });
        if (formError !== true){ // IF THERE WASN'T ERROR (EMPTY FIELDS) 
            mylog.push(formData); // WE UPLOAD THE DATA FROM THE TEMP ARRAY TO OUR GLOBAL ARRAY / SUBIMOS LOS DATOS A LA VARIABLE GLOBAL
            const jsonArr = JSON.stringify(mylog); 
            localStorage.setItem(localStg, jsonArr); // AND WE SEND IT TO LOCAL STORAGE / SUBIMOS LOS DATOS AL LOCAL STORAGE
            inputForm[index].forEach(element =>{
            let formInput = document.getElementById(element.field);
            if (element.type !== 'select') formInput.value = '';
            });
            notificationCorner();  //FINALLY WE SEND A CONFIRMATION
        }
}

function showLog(){ // USED TO POPULATE THE LOG / USADA PARA POBLAR EL LOG
    moveH("left",50);
    const toreset = document.getElementById('log');
    toreset.innerHTML = ''; // STARTS CLEARING THE AREA / LIMPIAMOS
    let log = document.querySelector('#log');
    let mainbox = domItem('div','','class','vertical myLog','id','');
    for (let i = 1; i < inputOpt.length; i++) { 
        let title = domItem('h2',inputOpt[i],'class','','id',''); // FOR EACH TYPE OF FORM WE NEED TO CREATE A DIV / AGREGAMOS LAS AREAS
        let table = domItem('table','','class','myTable','id',''); // ADN THE TABLE / UNA TABLA
        let current = inputOpt[i]; // WE TAKE THE ID OF THE FORM TO BE USED FO FILTER THE DATA 
        mainbox.appendChild(title);
        let headers = domItem('tr','','class','','id','');
        inputForm[i].forEach( element => headers.appendChild(domItem('th',element.field,'class','','id','')));
        headers.appendChild(domItem('th','DeleteMe','class','','id','')); // HEADERS
        table.appendChild(headers); 
        let k = 0; // THIS COUNTER HELP US TO LINK THE POSITION ON THE ARRAY AND THE ID ON THE ROW FOR LATER DELETE OPTION
        if (mylog !== null) {
            mylog.forEach( element => {
                if (element[0] == current){ //IF ITS FOR THIS FORM WE START CREATING THE ROWS OF THE TABLE / CREAMOS LA TABLA CON LOS DATOS
                    let row = domItem('tr','','class','','id',k);
                    for (let j = 1; j < element.length; j++) {
                        row.appendChild(domItem('td',element[j],'class','','id',k));
                    }
                    let rowX = (domItem('td','','class','trash','id',k)); 
                    let icon = domItem('i','','class','uil uil-trash','id',k); // HERE WE ADD THE ICON FOR DELETE "K" IS USED TO KNOW THE ID ON THE ARRAY MYLOG / AGREGAMOS EL BORRAR
                    rowX.appendChild(icon);
                    row.appendChild(rowX);
                    table.appendChild(row);
                }
                k++;
            });
        }
        mainbox.appendChild(table);
    }
    log.appendChild(mainbox);
    let deleteMe = document.querySelectorAll('.trash'); //LISTENERS FOR THOSE DELETEME 
    deleteMe.forEach(function (i) { i.addEventListener('click', function() {    
        mylog.splice(i.id,1); // ONCE FOUND WE DELETE IT FROM THE GLOBAL ARRAY
        const jsonArr = JSON.stringify(mylog); // SINCRONIZE WITH LOCAL STORAGE
        localStorage.setItem(localStg, jsonArr);
        populateForm(); // WE RELOAD ALL THE TABLES TO KEEP IT UPDATED
        });
    });
}