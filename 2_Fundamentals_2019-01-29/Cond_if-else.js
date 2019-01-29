'use strict'

let punkte = 38

if (punkte >= 40) {
    console.log('Erreichte Punkte: '+punkte)
    if (punkte >= 90) {
        console.log('Note = A')
    } else if ( (punkte < 90) && (punkte >= 70)) {
        console.log('Note = B')
    } else if (punkte >= 50) {
        console.log('Note = C')
    } else if (punkte >= 40) {
        console.log('Note = D')
    }
} else {
        console.log('nicht bestanden da Punkte kleiner 40: ' +punkte)
    }