const score = 100;
// console.log(score);

const balance = new Number(100)  // assigning number by object method so we can also use functions
// console.log(balance);
// console.log(balance.toString().length);

const price = new Number(10.28923243)
// console.log(price.toFixed(2));  // it will show 2 values after decimal

// console.log(price.toPrecision(3)); // it counts from start and round off the value


const priceTwo = 10000000
// console.log(priceTwo.toLocaleString());  // it add comas"," between zeros 
// console.log(priceTwo.toLocaleString('en-IN')); // it add comas in indian way


// ********** MATH ************

console.log(Math);
// console.log(Math.abs(-5));  // it gives only values 
// console.log(Math.round(4.5)); 
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));


// console.log(Math.random());  // it gives random values between 0 and 1

// if we want random values between any range then use the below formula
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // 

