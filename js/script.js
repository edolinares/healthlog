//VARIABLES
let inputOptPress = '';
let mylog = [];

//FUNCTIONS
function loadHero(){
    let left = document.querySelector('#left');
    left.appendChild(domItem('img','','onclick','moveH("left",-50)','src','./img/hero.svg'));
    let right = document.querySelector('#right');
    document.querySelector('#right').style.backgroundColor = "var(--darkcolor)";
    right.appendChild(domItem('h1','Welcome','id','welcome','onclick','moveH("left",50)'));
    let back = document.querySelector('#back');
    inputOpt.forEach( element =>{
        button = domItem('input','','type','button','value',element);
        button.setAttribute('id',"inputOpt");
        back.appendChild(button);
    });
        //LISTENERS
    let inputOptbtns = document.querySelectorAll('#inputOpt');
    inputOptbtns.forEach(function (i) { i.addEventListener('click', function() {    
        inputOptPress = i.value;  
        document.getElementById("left").style.zIndex = "-1";
        populateForm();
    });});





}

function populateForm(){
    const toreset = document.getElementById('log');
    toreset.innerHTML = '';
    //document.getElementById('back').style.zIndex = "5";
    let index = 0;
    for (let i = 0; i < inputOpt.length; i++) { index = inputOpt[i] == inputOptPress ? i : index; }
    moveH('back',50);
    if (index > 0){
        let log = document.querySelector('#log');
        let mainbox = domItem('div','','class','vertical ','id','');
        let title = domItem('h2',inputOpt[index],'class','','id','');
        mainbox.appendChild(title);
        inputForm[index].forEach (element =>{
            mainbox.appendChild(domItem('h3',element.field,'class','','id',''));
            if (element.type == 'select'){
                select =  domItem('select','','id','dropbox','name',element.field);
                element.options.forEach(element2 =>{ select.appendChild(domItem('option',element2,'id','','class',''))});
                mainbox.appendChild(select);
            }
            else {
                items = domItem('input','','type',element.type,'id',element.field);
                mainbox.appendChild(items);
            }
        });
        let button = domItem('input','','type','button','value','Save');
        button.setAttribute('onclick','save('+index+')');
        mainbox.appendChild(button);
        log.appendChild(mainbox);
    }
    else showLog();
}

function save(index){
    let formError = false;
    let formData = [];
        formData.push(inputOpt[index]);
        inputForm[index].forEach(element =>{
            if (element.type == 'select'){
                let select = document.getElementById('dropbox');
                formData.push(select.options[select.selectedIndex].value);
            }
            else{
                let formInput = document.getElementById(element.field);
                if (formInput.value !== ''){
                    formData.push(formInput.value);
                } else {
                    formError = true;
                    notification('error','fill the form properly');
                }
            }
        });
    formError ? 0 : mylog.push(formData);
}

function showLog(){
    moveH("left",50);
    const toreset = document.getElementById('log');
    toreset.innerHTML = '';
    let log = document.querySelector('#log');
    let mainbox = domItem('div','','class','vertical myLog','id','');
    for (let i = 1; i < inputOpt.length; i++) {
        let title = domItem('h2',inputOpt[i],'class','','id','');
        let table = domItem('table','','class','','id','');
        let current = inputOpt[i];
        mainbox.appendChild(title);
        let headers = domItem('tr','','class','','id','');
        inputForm[i].forEach( element => headers.appendChild(domItem('th',element.field,'class','','id','')));
        headers.appendChild(domItem('th','DeleteMe','class','','id',''));
        table.appendChild(headers); 
        let k = 0;
        mylog.forEach( element => {
            k++;
            if (element[0] == current){
                let row = domItem('tr','','class','','id',k);
                for (let j = 1; j < element.length; j++) {
                    row.appendChild(domItem('td',element[j],'class','','id',k));
                }
                let rowX = (domItem('td','','class','','id',k));
                let icon = domItem('i','','class','uil uil-trash','id','');
                rowX.appendChild(icon);
                row.appendChild(rowX);
                table.appendChild(row);
            }
        });
        mainbox.appendChild(table);
    }
    log.appendChild(mainbox);
}