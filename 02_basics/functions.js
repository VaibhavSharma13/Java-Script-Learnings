// function - to do the repeatative work

function addition(n1, n2){
    console.log(n1 + n2);
}

// addition  - it gives the function reference
// addition(5, 3)


// output: undefined just logged in
// function userLoginMessage(userName){
//     return `${userName} just logged in`
// }
// console.log(userLoginMessage());


function userLoginMessage(userName = "vaibhav"){
    // if(userName === undefined){
    //     console.log("please enter userName");
    //     return
    // }

    if(!userName){
        console.log("please enter userName");
        return
    }
    return `${userName} just logged in`
}
console.log(userLoginMessage("bittu"));