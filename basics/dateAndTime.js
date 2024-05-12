
const date = new Date()

// console.log(typeof date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());

// let myCreatedDate = new Date(2024, 0, 25)  // 0 based indexing for month
// let myCreatedDate = new Date("2024-01-25")
let myCreatedDate = new Date("06-13-2024")  // we generally use MM-DD-YYYY formate
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);       // to get current time in ms
// console.log(myCreatedDate.getTime());  // to convert date into ms
// console.log(Math.floor(Date.now()/1000));  // converting time to sec

let newDate = new Date()
// console.log(newDate.getMonth());  // indexing starts from 0
// console.log(newDate.getDay());

// we can customize the date using below method
console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));