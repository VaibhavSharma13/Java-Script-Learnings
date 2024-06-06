console.log(Math.PI);

Math.PI = 5  // this won't work because its writable property is false
// console.log(Math.PI);

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));


const user = {
    userName: "vaibhav",
    password: "abc123xyz",

    setUsername: function(){
        console.log("username set to Bittu");
    }
}
// console.log(Object.getOwnPropertyDescriptor(user, "password"));


Object.defineProperty(user, "password", {
    writable: false,
    enumerable: false  // now we can't iterate on this property
})
console.log(Object.getOwnPropertyDescriptor(user, "password"));

// forof loop to iterate on objects
for (let [key, value] of Object.entries(user)) {
    if(typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}
