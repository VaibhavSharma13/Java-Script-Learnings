// singleton object - constractor method to create singleton objects
// const myUser = Object.create(anotherObject) - it take another object as parameter and inherites properties and methods 

// object literals

const userInfo = {
    name: "vaibhav",
    "full name": "vaibhav sharma",
    homeTown: "vidisha",
    age: 24,
    email: "vaibhav13@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "wednesday"]
}

// console.log(userInfo.name);
// console.log(userInfo["full name"]); // if key is string or symbol then we can access values by this way


const mySymbol = Symbol("key1")

const user = {
    name: "Bittu",
    [mySymbol]: "mykey1",
    email: "bittusharma@gmail.com",
    age: 24
}

// console.log(typeof user[mySymbol]);

// user.email = "bittusharma@amazon.com"
// console.log(user);
// Object.freeze(user)  // now we can't change any values of object
// user.email = "bittusharma@gmail.com"
// console.log(user);


user.greeting = function(){
    console.log("hello JS user");
}
// console.log(user);
// console.log(user.greeting());


user.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}
// console.log(user.greetingTwo());

user.obj = {
    height: 10,
    length: 20
}
console.log(typeof user.obj);