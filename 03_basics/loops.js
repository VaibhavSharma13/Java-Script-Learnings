// for loop

for (let i = 0; i < 5; i++) {
    const element = i;
    // console.log(element);
}


// nested loops
for (let i = 0; i < 5; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 0; j < 5; j++) {
        // console.log(`inner loop ${j}`);
    }
}


// break and continue keywords - example not needed


// while and do while loops

let score = 0
while(score < 5){
    // console.log(`my score is ${score}`);
    score ++
}


let value = 10
do {
    // console.log(` value is ${value}`);
    value++
} while (value < 5);



// ******* other loops ******

// for of - not works for objects, but works array and map
// for in - not works for maps, but works for objects and array
// for each - high oreder function defined for array (in prototype)


// for of loop
const arr = [1, 2, 3 ,4 , 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
        // console.log(`Each char is ${greet}`);
}


// forEach loop
const myArray = [23, 45, 90]

myArray.forEach((value) => {
    // console.log(`value inside array : ${value}`);
})

myArray.forEach((value, index, myArray) => {
    // console.log(value, index, myArray);
})


const coding = [
    {
        languageName: "JavaSript",
        fileName: "js"
    },
    {
        languageName: "Phython",
        fileName: "py"
    },
    {
        languageName: "C++",
        fileName: "cpp"
    }
]

coding.forEach( (item) => {
    // console.log(item.languageName);
} )


// forEach - not return anything
const returnItems = coding.forEach( (item) => {
    // console.log(item.languageName);
} )

// console.log(returnItems);  // undefined


// ******* if we don't want to use values for now and store values of array 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const myNums = nums.filter( (item) => item>4 )
// console.log(myNums);


// if we still want to use still use forEach then we can use like below
const newNums = []
nums.forEach( (item) => {
    if(item > 5) newNums.push(item)
} )
// console.log(newNums);


// reduce function in array
// its takes call back function as a parameter and this call back fn
// takes two parameters - accumulator and current value
const itemValue = [10, 20, 30]

const total = itemValue.reduce( function(acc, curr) {
    return acc + curr
}, 100)  // this 100 will be the initial value of accumulator
// console.log(total);

// using arrow fn
const myTotal = itemValue.reduce( (acc, curr) => acc + curr, 100 )
console.log(myTotal);

