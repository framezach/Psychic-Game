// An array of letters, or choices, that our players will be drawing from.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Our scoreboard variables.

var wins = 0;
var losses = 0;
var guesses = 10;
var remainingGuesses = 10;
var guessedLetters = [];
var letterToGuess = null;


// Computer guesses a random letter
var computerLetter = letters[Math.floor(Math.random() * letters.length)];

// Set the guess allowance
var updateRemainingGuesses = function () {
  document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + remainingGuesses;
};

// Comes up with a new letter to guess
var updateLetterToGuess = function () {
  this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)]
};

// Display letters tries so far
var updateGuessesSoFar = function () {
  document.querySelector("#let").innerHTML = "Guesses so far: " + guessedLetters.join(', ');
};

// Our reset function
var reset = function () {
  guesses = 10;
  remainingGuesses = 10;
  guessedLetters = [];

  updateLetterToGuess();
  updateRemainingGuesses();
  updateGuessesSoFar();
}

// Calls functions
updateLetterToGuess();
updateRemainingGuesses();

// Upon key press the user's selection is decided.
document.onkeyup = function(event) {
  remainingGuesses--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateRemainingGuesses();
  updateGuessesSoFar();

  if (remainingGuesses > 0) {
    if (userGuess == letterToGuess) {
      wins++;
      document.querySelector("#wins").innerHTML = "Wins: " + wins;
      alert("How did you guess that?!");
      reset();
    }

  } else if (remainingGuesses == 0) {
    losses++;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    alert("Try again :(");
    reset();
  }



}