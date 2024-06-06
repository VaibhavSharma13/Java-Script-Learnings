class User{
    constructor(username) {
        this.username = username;
    }

    printUser() {
        console.log(`User: ${this.username}`);
    }
}

class teacher extends User{
    constructor(username, email, password) {
        super(username)  // to access the parent class constructor
        this.email = email
        this.password = password
    }
}

const newUser = new teacher("vaibhav", "teacher@gmail.com", 25);

console.log(newUser);