'use strict'

var num = 1
let fibonum = 0

for (let i = 1; i <= 10 ; i++) {
    
    console.log('num = ' +num)
    console.log('fibonum = ' +fibonum)

     if (num = 1) {
        fibonum = num
        console.log(fibonum)
    } else {
        fibonum += num
        console.log(fibonum)
    }
    
    if (num = 1) {
       num = 2
    } else {
        num = fibonum
    }
    
}