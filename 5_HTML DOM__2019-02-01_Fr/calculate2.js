// Example with Event in HTLM  and  Handler in JS by parameters
function sum(num1, num2, numResult) {
    numResult.innerHTML = `<b>${parseInt(num1) + parseInt(num2)}</b)`
}


//___________________________________________________________________________________
// Example with Event in HTLM  and  Handler in JS by declaration (without parameters)
function sub() {
    let inpNum1 = document.getElementById('num1')
    let inpNum2 = document.getElementById('num2')
    let inpResult = document.getElementById('numResult')

    inpResult.innerHTML = `<b>${parseInt(inpNum1.value) - parseInt(inpNum2.value)}</b)`
}


//___________________________________________________________________________________
// Examples with Event and Handler in JS
//    multiplication
let muliplicationButton = document.getElementById('mulBtn')

muliplicationButton.onclick = function () {
    let inpNum1 = document.getElementById('num1')
    let inpNum2 = document.getElementById('num2')
    let inpResult = document.getElementById('numResult')
    
    inpResult.innerHTML = `<b>${parseInt(inpNum1.value) * parseInt(inpNum2.value)}</b)`
}

//    division
let divisionButton = document.getElementById('divBtn')

divisionButton.onclick = function () {
    let inpNum1 = document.getElementById('num1')
    let inpNum2 = document.getElementById('num2')
    let inpResult = document.getElementById('numResult')
    
    inpResult.innerHTML = `<b>${parseInt(inpNum1.value) / parseInt(inpNum2.value)}</b)`
}