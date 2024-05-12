const name = "vaibhav"
const place = "vidisha"

// not recommended - old way to concate strings
// console.log(name + " from " + place +" and my age is " + 25);


// better way 
// console.log(`my name is ${name} and i'm from ${place}`);


// another and better way to create string
const myString = new String('Ready to go')  // this method create string as an object with indexes and characters as key-value pairs
// console.log(myString);
console.log(myString.__proto__);  // it return an object that we can see in browser console

// console.log(myString.toUpperCase());
// console.log(myString.charAt(4));
// console.log(myString.indexOf('y'));

// console.log(myString.substring(0, 4));  // 0 index include and 4th index value won't include
// console.log(myString.slice(-7, -4));


const userName = "   vaibhav  "
// console.log(userName.trim()); // wroks on white spaces and line terminators

const url = "https://google.com/vaibhav20%sharma"
// console.log(url.replace('20%', '-'));
// console.log(url.includes('vaibhav'));


const newString = "just-do-it"
const newStringArray = newString.split('-')  // split method converts string into array based on seperator
console.log(newStringArray);
console.log(Array.from(newString));   // this method converts string into array of characters 
