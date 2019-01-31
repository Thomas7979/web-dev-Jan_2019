function inputClicked() {
    let strInput = document.getElementById('anyString')

    console.log(`you clicked the button`)
    console.log(strInput)
    console.log(strInput.value)

    let strout = document.getElementById('outputField')
    strout.innerHTML = `<b>${strInput.value.toUpperCase()}</b>`
    
    console.log(strout)
}