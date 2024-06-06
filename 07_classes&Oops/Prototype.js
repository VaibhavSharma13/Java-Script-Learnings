let myName = "Vaibhav      "

// console.log(myName.length);

// we want to print the actual name length
// we can use trim function 
// console.log(myName.trim().length);


// how to create a fn that only prints the actual name length

String.prototype.trueLength = function(){
    console.log(`True Length is: ${this.trim().length}`);
    
}
// myName.trueLength();



// Prototypal Inheritance ---

const user = {
    username: "Vaibhavi",
    email: "Vaibhavi@gmail.com"
}

const Student = {
    present: true
}

const student2 = {
    isAssimentCompleted: false,
    __proto__: Student  // now student2 can use all properties and mentods of student
}
console.log(student2.present);

Student.__proto__ = user  // now student2 can use all properties and methods of user


// modern syntax ---
Object.setPrototypeOf(student2, Student)  // now student2 can use all properties and methods of student



