// let and const have the block scope 
// var - global scope

if (true) {
    let a = 10
    const b = 20
    var c = 30

    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// console.log(a);  // reference error
// console.log(b);  // reference error
// console.log(c);


// same rules for funtion scope


// interesting example

console.log(addOne(4));
function addOne(num){
    return num+1
}


console.log(addTwo(7)); // ReferenceError: Cannot access 'addTwo' before initialization
// function expresion
const addTwo = function(num){
    return num+2
}
