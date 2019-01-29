'use strict'

// var
// ---
// output wird durch die Funktion mit 'Python' ersetzt
var V1 = 'Java'

if (true) {
    var V1 = 'Python'
}

console.log ('Fesult is ' +V1)

// _____________________________________________________

// let   (ab es6)
// ---
// scoping  -->  Ouput bleibt 'Inhalt 1'
let V2 = 'Inhalt 1'

if(true) {
    let V2 = 'neuer Inhalt 2'
}

console.log ('Fesult2 is ' +V2)