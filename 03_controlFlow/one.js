// if else statement

// falsy values: false, 0, negative numbers, BigInt, "", null, undefined, NAN
// all other values are true values to enter into if statement


// Nulish Coalescing Operator (??): null undefined
let value
value = 5 ?? 10   // output: 5
value = null ?? 25  // output: 25
value = undefined ?? 50  // output: 50
// console.log(value);


// Terniary Operator - condition ? true : false
const price = 100
price <= 80 ? console.log(`less then 80`) : console.log(`more than 80`);



// switch
const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("default case");
        break;
}

