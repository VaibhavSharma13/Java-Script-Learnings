// Array in js - resizable, can contain elements of diff datatypes

const myArr = [2, 3, 5, 8, "vaibhav"]
// console.log(typeof myArr);
// console.log(myArr);

const newArray = new Array(4, 6, 7, 9, 1)
// console.log(newArray);
// console.log(newArray.length);

// to add/delete value from end
// newArray.push(8)
// newArray.pop()

// to add/remove value from start
// newArray.unshift(20)
// newArray.shift()

// console.log(newArray.includes(7));
// console.log(newArray.indexOf(7));

const arr = newArray.join()  // convert array to string
// console.log(newArray);
// console.log(arr);
// console.log(typeof arr);


// slice, splice

console.log("A ", newArray);

const myn1 = newArray.slice(1, 3)  // array not change
console.log(myn1);
console.log("B ", newArray);

const myn2 = newArray.splice(1, 3)  // it changes the array
console.log(myn2);
console.log("C ", newArray);