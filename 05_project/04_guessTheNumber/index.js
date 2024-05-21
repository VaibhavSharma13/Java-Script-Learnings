const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const previousGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");

const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let playGame = true;

// let previousGuessesArray = [];
let numberOfGuesses = 1;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const guess = parseInt(userInput.value);

    validInput(guess);
  });
}

function validInput(guess) {
  if (isNaN(guess)) {
    displayMessage(`Please enter a valid number`);
  } else if (guess < 1 || guess > 100) {
    displayMessage(`Please enter a number between 1 and 100`);
  } else {
    // previousGuessesArray.push = guess;
    if(numberOfGuesses > 10){
        resetFields(guess)
        displayMessage(`Game Over, Random number was ${randomNumber}`)
        endGame()
    } else {
        resetFields(guess)
        matchInput(guess)
    }
  }
}

function matchInput(guess) {
    if(guess < randomNumber){
        displayMessage(`Number is Too low`)
    } else if (guess > randomNumber){
        displayMessage(`Number is Too high`)
    } else{
        displayMessage(`Great! you guessed the number`)
        endGame()
    }
}

function resetFields(guess){
    userInput.value = '';
    previousGuesses.innerHTML += `${guess}  `;
    numberOfGuesses++;
    remainingGuesses.innerHTML =  `${11 - numberOfGuesses}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
//   lowOrHigh.innerHTML = `${message}`
}

function endGame(){
    // const button = document.createElement('button')
    lowOrHigh.innerHTML = `<h2 id=button >Start New Game</h2>`
    
}
