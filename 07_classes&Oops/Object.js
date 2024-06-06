function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2  // we can use fn as an object also

// console.log(multiplyBy5(5));  // 23
// console.log(multiplyBy5.power);  // 2
// console.log(multiplyBy5.prototype);  // empty object {}


function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function (){
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

// const user1 = createUser("vaibhav", 5)  // this wont work without 'new' keyword
const user1 = new createUser("vaibhav", 5)
console.log(user1.printMe());



/*

Here what happens behind the scenes when the new keyword is used:-

A new Object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to the properties and methods defined on the constructor prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicot retrun value is specified from the constructor. JavaScript assums this, newly created object, to be the intended retrun value.


The new object is returned: After the constructor function has been called, if it does not retrun a non-primitive value(object, array, function, etc), the newly created object is returned.

*/