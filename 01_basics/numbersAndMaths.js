const score = 100;
// console.log(score);

const balance = new Number(100)  // assigning number by object method so we can also use prototype functions
// console.log(balance);
// console.log(balance.toString().length);

/* 
Key Differences:
Type: balance is an object of type Number, while score is a primitive number.
Usage: When using balance, you may need to use methods or properties specific to the Number object (though these can also be accessed through the primitive score using automatic boxing and unboxing in JavaScript).
Performance: Using score is generally more efficient in terms of memory and performance.
In most cases, you should prefer the second approach (const score = 100;) unless you have a specific reason to use the Number object wrapper.
*/

const price = new Number(10.28923243)
// console.log(price.toFixed(2));  // it will show 2 values after decimal

// console.log(price.toPrecision(3)); // output: 10.3 - it counts from start and round off the value


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

