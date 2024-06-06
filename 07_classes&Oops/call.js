function setUsername(username) {
    this.username = username;
    console.log("setUsername called");
}

function createUser(username, email, password){
    // setUsername(username); // once the fn executed then its EC will be deleted so it won't set the username
    setUsername.call(this, username);  // call method send the current context and hold the reference

    this.email = email;
    this.password = password;
}

const user = new createUser("vaibhav", "vabhav@gmail.com", "123abc")
console.log(user);