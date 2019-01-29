'use strict'

let punkte = 38

if (punkte >= 40) {
    console.log('Erreichte Punkte: '+punkte)
    if (punkte >= 90) {
        console.log('Note = A')
    } else if ( (punkte < 90) && (punkte >= 70)) {      // Bedingung mit Boolean  mit &&
        console.log('Note = B')
    } else if (punkte >= 50) {                          // Bedingung ohne Boolean
        console.log('Note = C')
    } else if (punkte >= 40) {
        console.log('Note = D')
    }
} else {
        console.log('nicht bestanden da Punkte kleiner 40: ' +punkte)
    }