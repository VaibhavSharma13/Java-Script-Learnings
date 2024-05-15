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
// for each - 


// for of loop
const arr = [1, 2, 3 ,4 , 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
        // console.log(`Each char is ${greet}`);
}

