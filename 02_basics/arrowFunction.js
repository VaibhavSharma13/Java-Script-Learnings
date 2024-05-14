const user = {
    username: "vaibhav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);  
    }
}

// user.welcomeMessage()
// user.username = "Bittu"
// user.welcomeMessage()


// console.log(this); // in node env this keyword refers to the empty object

 
function demo(){
    console.log(this);
}
// demo()


// this keyword won't work inside function to access its parameters
function demo(){
    const name = "vaibhav"
    console.log(this.name);   // undefined
}
// demo()


const arrowfn = (n1, n2) => {
    return n1+n2
}
// console.log(arrowfn(3, 4));


// implicit return - both are correct
// const fun = () => n1+n2
const fun = () => (n1+n2)  // important in React

// if we are using curly brackets then we have to use return keyword


// to return object
const myObj = () => ({username: "vaibhav"})  // important for React
console.log(myObj());


