class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    //no one can use this fn outsdie of the class
    static createId(){
        return `123`
    }
}
const newUser = new User("vaibhav")
console.log(newUser.logMe());
// console.log(newUser.createId());


class child extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const childOne = new child("Bittu", "bittu@gmail.com")
console.log(childOne.logMe());
// console.log(childOne.createId())