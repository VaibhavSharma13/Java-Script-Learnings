// promise is an object
// promise has 3 states: pending, resolved, rejected

// generally we consume the promise

// creating promises : ---

// before promises there were libraries like Q, blurbird which provides these functionalities
// then these were added in the core nodejs modules so no need to add seperately

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network calls, etc

  setTimeout(() => {
    // console.log('Async task completed successfully');
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  // console.log('promise consumed');
});

// we can do like this also
new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log('async task 2 completed successfully');
    resolve();
  }, 1000);
}).then(function () {
  // console.log('async task 2 resolved successfully');
});

// we can pass the parameters from resolve to then fn
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "vaibhav", age: 24 });
  }, 1000);
});
promiseThree.then(function (user) {
  // console.log(user);
});

// when to use reject and chaining
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "vaibhav", password: "123" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});
// arrange like this for more readability
promiseFour
  .then(function (user) {
    // console.log(user.username);
    // console.log(user);
    return user.username;
    name;
  })
  .then(function (username) {
    // console.log(username);
  })
  .catch((err) => {
    // console.log(err);
  })
  .finally(function () {
    // console.log("finally called");
  });

// Promise can be handled via Async Await

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const reponse = await promiseFive;
    // console.log(reponse);
  } catch (error) {
    // console.log(error);
  }
}
consumePromiseFive();

// response.json takes time so we need to use await
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("ERROR");
  }
}
// getAllUsers();


// above code can be run  in this way also
fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});