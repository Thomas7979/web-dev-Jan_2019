'use strict'

console.log('loop while')
console.log('==========')

let num = 1

while (num <=20) {
    console.log(num)
    num = num * 2    // Zähler für While-Bedinung
}

//________________________________________________

console.log('')
console.log('')
console.log('loop do-while')
console.log('=============')

num = 1

do {
    console.log(num)
    //  num++           // Zöhler für while-Bedingung
    num = num * 2
} while (num <=20)