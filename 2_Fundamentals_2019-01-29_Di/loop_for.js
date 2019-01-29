'use strict'

let num = 2

// Bedingung "i <= 10" im for-Statement
console.log('Bedingung im for-Statement')

for (let i = 1; i <= 10; i++) {
    console.log(num * i)
}

//_______________________________________

// Bedingung "i <= 10" innerhalb Body
console.log('')
console.log('')
console.log('Bedingung innerhalb Body')

num = 10

for (let i = 1; ; i++) {
    if (i >= 10) 
       break
    console.log(num * i)
}

//_______________________________________

// ohne Deklaration im for-Statement
console.log('')
console.log('')
console.log('keine Angaben im for-statement')

num = 100
let i = 0

for (;;) {
    i++
    if (i > 10) 
       break
    console.log(num * i)
}