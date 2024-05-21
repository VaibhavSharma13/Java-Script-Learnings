let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const previousGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");

const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let playGame = true;

const p = document.createElement('p');

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
    if (numberOfGuesses === 3) {
      resetFields(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      resetFields(guess);
      matchInput(guess);
    }
  }
}

function matchInput(guess) {
  if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too high`);
  } else {
    displayMessage(`Great! you guessed the number`);
    endGame();
  }
}

function resetFields(guess) {
  userInput.value = "";
  previousGuesses.innerHTML += `${guess}  `;
  numberOfGuesses++;
  remainingGuesses.innerHTML = `${4 - numberOfGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
  //   lowOrHigh.innerHTML = `${message}`
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");

  p.classList.add("button");
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();

  // it will over ride the event listener function
  // submit.setAttribute("value", "start new game");
  // submit.addEventListener("click", function (event) {
  //   newGame();
  // });
}

function newGame() {
  // console.log(`new Game`);
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    previousGuesses.innerHTML = "";
    numberOfGuesses = 1;
    remainingGuesses.innerHTML = `${4 - numberOfGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    randomNumber = parseInt(Math.random() * 100 + 1);
    playGame = true;
    displayMessage(``)
  });

  // submit.setAttribute("value", "Submit guess");
}
