class User{
    constructor(username, age){
        this.username = username;
        this.age = age;
    }

    updateUsername() {
        console.log(`new username: ${this.username.toUpperCase()}`);
    }
}

const user1 = new User("vaibhav", 25)
console.log(user1.updateUsername());


// Behind the scene - when classed were nnot available (before ES6)

// function User(username, age) {
//     this.username = username;
//     this.age = age;
// }

// User.prototype.updateUsername = function() {
//     console.log(`updated username: ${this.username.toUpperCase()}`);
// }

// const newUser = new User("Bittu", 25)
// console.log(newUser.updateUsername());