// singleton object - constractor method(using new keyword) to create singleton objects
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
// console.log(typeof user.obj);


//********** Singleton or constructor object *******

const newUser = new Object()

newUser.id = "456xyz"
newUser.password = "agaffg"
newUser.isLoggedIn = false

// console.log(newUser);

// console.log(newUser.hasOwnProperty('id'));
// console.log(Object.keys(newUser));  // it return array of keys


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        firstName: "vaibhav",
        lastName: "Sharma"
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName.firstName);


const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'a',
    4: 'b'
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)  // first parameter is target so provided an empty object

const obj3 = {...obj1, ...obj2}  // recommended to use - spread method
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "vaibhav@gmail.com"
    },
    {
        name: "bittu"
    },
    {
        age: 24
    }
]
// console.log(users[0].email);



// ****** destructuring of object and JSON intro ****

const course = {
    courseName: "JS live",
    price: 999,
    courseInstructor: "vaibhav"
}

// course.courseInstructor


// destructuring of object
const {courseInstructor} = course
const {courseInstructor: instructor} = course  // if we want to use same key with short and diff name
console.log(courseInstructor);
console.log(instructor);


// in React we use destructuring like this
// const navbar = ({company}) => {

// }
// navbar(company = "sharma")


// JSON - both key and value in string
// {
//     "name": "vaibhav",
//     "age": 24,
//     "email": "vaibhav@gmail.com"
// }







