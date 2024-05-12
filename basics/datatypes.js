// types of data types - 2 
// primitive data types and reference data types

// primitive data types - 7  - store in STACK MEMORY
// String, Number, Boolean, null, undefined, BigInt, Symbol

let myName = "vaibhav" // string
// console.log(typeof myName); // output: String


let temperature = null
// console.log(typeof temperature); // output: object


// even we provie same values to the symbol but it will return unique id's
let id = Symbol('123')
let anotherId = Symbol('123')
// console.log(id == anotherId); // output: false


// Reference data types - store in HEAP MEMORY
// array, object and function

let subjects = ['maths', 'physics', 'chemistry']
// console.log(subjects);
// console.log(typeof subjects); // output: object

// object stores key value pairs
let info = {
    name: 'vaibhav',
    age: 24
}
console.log(info);
console.log(typeof info);

// we can store function in variables
let myFun = function(){
    console.log("Hello World");
}
console.log(myFun);
console.log(typeof myFun);