
// let str = "33"

// console.log(typeof str)
// console.log(typeof (str))  // both ways are right

// let num = Number(str)
// console.log(typeof num);


// what if their is combination of numbers and characters

let anotherString = "33abc"
let num = Number(anotherString)
console.log(typeof num);    // output: number
console.log(num)    // output: NaN

// "33" - number
// "33abc" - NaN but type is number 


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// for any positive or negative number it converts to true and for 0 it converts to false
// "" - false
// "vaibhav" - true

