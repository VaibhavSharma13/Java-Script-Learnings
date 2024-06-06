
// this keyword :---
const user = {
    username: "vaibhav",
    loginCount: 1,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details");
        // console.log(`username: ${usrname}`);  // ReferenceError: usrname is not defined
        console.log(`username: ${this.username}`);
        // console.log(this); // current context
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // empty object {} in node


// constructor function :---
// new keyword -> to create a copy of the object literal

// const promiseOne = new Promise();
// const date = new Date();

function User (username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.hello = function () {
        console.log(`Hello ${this.username}`);
    }

    return this  // implicitly return so no need write this line
}

// const userOne = User("Bittu", 2, true)
// const userTwo = User("vaibhav", 3, true)  // it will overwrite the existing values of userOne values

const userOne = new User("Bittu", 2, true)
const userTwo = new User("vaibhav", 3, true)

// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);  // constructor property - reference to it's own


// work flow fo new keyword ---
// when we use new keyword then an empty object is created
// a constructor function called with the new keyword which pack all the arguments in this empty object
// then all arguments injected into this keyword
// then we can use it

