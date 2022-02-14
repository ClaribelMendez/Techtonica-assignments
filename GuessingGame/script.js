let userRange = 0
let randomNumber;
let twenty = document.getElementById("20");
let fourty = document.getElementById("40")
let max = 0;
let min = 0;

let clickRange = document.getElementById("range")
clickRange.addEventListener("click", function(){
  if(twenty){
    randomNumber = 10
  }else if (fourty) {
      randomNumber = 20
  }
})

// twenty.addEventListener('click', chooseRange);
// fourty.addEventListener('click', chooseRange);
// // 60.addEventListener('click', chooseRange);

// function chooseRange(){
 
//   generateNumber(40,20)
// }



// function generateNumber(max,min){
//     randomNumber =  Math.floor(Math.random() * (max - min) + 1);
// }





const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value) // current value entered inside text field.Number is used to verify it's definitely a number
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' '; // puts consecutive guesses togehter and adds a space in between

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount > 20) {
    lastResult.textContent = '!!!GAME OVER!!!';
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

guessCount++; 
guessField.value = ''; // empties the value of text field to guess again
guessField.focus(); // will highlight the border 
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1; // resets nunber of guesses back to 1
  const resetParas = document.querySelectorAll('.resultText p'); // selects all paragraph tags inside form class 'resultText'.
  for (const resetPara of resetParas) { // loops through each one
     resetPara.textContent = ''; // resets all textContent to an empty string
  
  }
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random()) * 100 + 1; // generates new random number
  resetButton.parentNode.removeChild(resetButton); // removes reset button from code
  



}