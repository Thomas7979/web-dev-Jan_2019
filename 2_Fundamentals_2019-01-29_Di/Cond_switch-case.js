'use strict'

let tag = 2

console.log('Eingegebener Tag ist:  ' +tag)

switch(tag) {
    case 1 :
        console.log('Montag')        
        break
    case 2 :
        console.log('Dienstag')
        break
    case 3 :
        console.log('Mittwoch')
        break
    case 4 :
        console.log('Donnerstag')
        break
    case 5 :
        console.log('Freitag')
        break
    case 6 :
        console.log('Samstag')
        break
    case 7 :
        console.log('Sonntag')
        break
    default :
        console.log('ungültiger Tag')
        break
}