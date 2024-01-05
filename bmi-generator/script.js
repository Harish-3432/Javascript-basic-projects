
const body = document.querySelector("body");

const form = document.querySelector("form");
form.addEventListener("submit" , function(e){
    e.preventDefault();
    const name = document.querySelector('#name').value
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector('#results')

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`;
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid height ${weight}`;
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<h1> Name : ${name}</h1><br> <h1> bmi :${bmi}</h1>`;
    }
})