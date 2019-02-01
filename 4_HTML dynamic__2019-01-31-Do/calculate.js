// addition
function addition() {
    console.log(`you clicked the button addition`)
    let strInpAdd1 = document.getElementById('inputAdd-1').value
    let numInpAdd1 = parseInt(strInpAdd1-0)
    let strInpAdd2 = document.getElementById('inputAdd-2').value
    let numInpAdd2 = parseInt(strInpAdd2-0)
    
    let resultAdd=0
    resultAdd = numInpAdd1 + numInpAdd2
    
    document.getElementById('resultAdd').value=resultAdd
}

// substraction
function substraction() {
    console.log(`you clicked the button substraction`)
    let strInpSub1 = document.getElementById('inputSub-1').value
    let numInpSub1 = parseInt(strInpSub1-0)
    let strInpSub2 = document.getElementById('inputSub-2').value
    let numInpSub2 = parseInt(strInpSub2-0)

    let resultSub=0
    resultSub = numInpSub1 - numInpSub2
    
    document.getElementById('resultSub').value=resultSub
}


// multiplication
function multiplication() {
    console.log(`you clicked the button multiplication`)
    let strInpMul1 = document.getElementById('inputMul-1').value
    let numInpMul1 = parseInt(strInpMul1-0)
    let strInpMul2 = document.getElementById('inputMul-2').value
    let numInpMul2 = parseInt(strInpMul2-0)
    
    let resultMul=0
    resultMul = numInpMul1 * numInpMul2
    
    document.getElementById('resultMul').value=resultMul
}

// division
function division() {
    console.log(`you clicked the button division`)
    let strInpDiv1 = document.getElementById('inputDiv-1').value
    let numInpDiv1 = parseInt(strInpDiv1-0)
    let strInpDiv2 = document.getElementById('inputDiv-2').value
    let numInpDiv2 = parseInt(strInpDiv2-0)
    
    let resultDiv=0
    resultDiv = numInpDiv1 / numInpDiv2
    
    document.getElementById('resultDiv').value=resultDiv
}