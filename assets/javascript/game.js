// Declaring variables
var computerChoices = ["a", "e", "g", "d", "r"];
var computerDecision = null;



var totalWins = 0;
var totalLost = 0;
var guessesLeft = 9;
var currentGuesses = [];

// references to the html text
var winsText = document.getElementById("wins");
var lossText = document.getElementById("loss");
var remainingGuessesText = document.getElementById("remaining-guesses");
var guessesText = document.getElementById("guesses"); 

// Computer decision
var computerChoice = function () {
    computerDecision = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

computerChoice();
console.log(computerDecision);

document.onkeyup = function (event) {
    
    var userGuess = event.key;


    if (userGuess === computerDecision) {
        totalWins++;
        guessesLeft = 9;
        currentGuesses.length = 0;
        console.log(totalWins);
    } else if (userGuess != computerDecision) {
        guessesLeft--;
        currentGuesses.push(userGuess);
        console.log(currentGuesses);
        console.log(guessesLeft);
    }
    if (guessesLeft === 0) {
        totalLost++;
        guessesLeft = 9;
        currentGuesses.length = 0;
        console.log(totalLost);
    }

/* Every time I've put this code in, an Error popped up in the conosole and won't allow my results 
to pop up in my HTML 

winsText.textContent = "Wins: " + totalWins;
lossText.textContent = "Losses: " + totalLost;
guessesText.textContent = "Your guesses so far: " + currentGuesses.join("");
remainingGuessesText.textContent = "Guesses Left: " + guessesLeft;
console.log(winsText);
console.log(lossText);
console.log(guessesText); 

*/

};
  





