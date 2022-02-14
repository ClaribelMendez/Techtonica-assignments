let guessesLeft = document.querySelector('.guessesLeft');
let enterNumber = document.querySelector(".enterNumber")
let guessMax = 5;
let randomNumber = 0;
let twenty = document.getElementById("20");
let fourty = document.getElementById("40");
let sixty = document.getElementById("60")



twenty.addEventListener('click', chooseRange1);
fourty.addEventListener('click', chooseRange2);
sixty.addEventListener('click', chooseRange3);

function chooseRange1() {
  randomNumber = Math.floor(Math.random() * (20 - 1) + 1);
  fourty.style.display = "none"
  sixty.style.display = "none"
}

function chooseRange2() {

  randomNumber = Math.floor(Math.random() * (34 - 25) + 25);
  twenty.style.display = "none"
  sixty.style.display = "none"
}

function chooseRange3() {
  randomNumber = Math.floor(Math.random() * (60 - 40) + 40);
  fourty.style.display = "none"
  twenty.style.display = "none"
}







const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");


let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value) // current value entered inside text field.Number is used to verify it's definitely a number
  if (guessMax === 5) {
    guesses.textContent = 'Previous guesses: ';
  }
  guessesLeft.textContent = 'Guesses left: ' + guessMax;
  guesses.textContent += userGuess + ' '; // puts consecutive guesses togehter and adds a space in between
  // guessesLeft.textContent + guessMax;

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();

  } else if (guessMax === 0) {
    lastResult.textContent = 'GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = "Incorrect!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Guess higher!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Guess lower!'
    }
  }


  guessMax--;

  guessField.value = ''; // empties the value of text field to guess again
  guessField.focus(); // will highlight the border 
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  // guessField.disabled = true;
  // guessSubmit.disabled = true;
  twenty.style.display = "none";
  fourty.style.display = "none";
  sixty.style.display = "none";
  guessField.style.display = "none";
  guessSubmit.style.display = "none";
  guessesLeft.style.display ="none";
  guesses.style.display = "none";
  enterNumber.style.display = "none";
  
  resetButton = document.createElement('button');
  resetButton.setAttribute("id", "resetButton");
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
 
  
}

function resetGame() {
  guessMax = 5; // resets nunber of guesses back to 5
  const resultTexts = document.querySelectorAll('.resultText p'); // selects all paragraph tags inside form class 'resultText'.
  for (const values of resultTexts) { // loops through each one
    values.textContent = ''; // resets all textContent to an empty string

  }
  twenty.style.display = "inline-block"
  fourty.style.display = "inline-block"
  sixty.style.display = "inline-block"
  guessField.style.display = "inline-block";
  guessSubmit.style.display = "inline-block";
  guessesLeft.style.display ="block";
  guesses.style.display = "block";
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';

  // randomNumber = Math.floor(Math.random()) * 100 + 1; // generates new random number
  resetButton.parentNode.removeChild(resetButton); // removes reset button from code

}

