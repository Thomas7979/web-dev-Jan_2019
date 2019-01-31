function calculate() {
    let strInp1 = document.getElementById('Input-1').value
    console.log(strInp1)
    let numInp1 = parseInt(strInp1-0)
    let strInp2 = document.getElementById('Input-2').value
    let numInp2 = parseInt(strInp2-0)
    console.log(`you clicked the button`)
    let result=0
    result = numInp1 + numInp2
    
    document.getElementById('Resultfield').value=result
    
    console.log(result)
   return result;
}