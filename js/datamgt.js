class datamgt{
    start(){
        fetch(url)
        .then(response => response.json())
        .then(result =>{
            inputForm = result.inputForm;
        })
    }
}