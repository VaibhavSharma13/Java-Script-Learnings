const accountId = 1234
let accountEmail = "vaibhav@gmail.com"
var accountPassword = "asg4g34"     // do not use var due to scope issue
accountLocation = "Pune"        // not a good way to declare variables
var accountType             // if no value assinged then by default value is - undefined 

// accountId = 4321   not allowed to reassign value to the const variable

accountEmail = "vaibhavsharma@gmail.com"
accountPassword = "jnofd3ji"
accountLocation = "Bangaluru"

console.log(accountId);

console.table([accountEmail, accountPassword, accountLocation, accountType])