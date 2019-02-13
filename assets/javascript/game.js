// Declaring variables
var computerChoices = ["a", "e", "g", "d", "r"];
var computerDecision = null;



var totalWins = 0;
var totalLost = 0;
var guessesLeft = 9;
var currentGuesses = [];

// Computer decision
var computerChoice = function () {
    computerDecision = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

computerChoice();
console.log(computerDecision);

// reset function
var reset = function () {
    guessesLeft = 9;
    currentGuesses.length = 0;
    computerChoice();
    console.log(computerDecision);
};
document.onkeyup = function (event) {

    var winsText = document.getElementById("wins");
    var lossText = document.getElementById("loss");
    var remainingGuessesText = document.getElementById("remaining-guesses");
    var guessesText = document.getElementById("guesses"); 

    var userGuess = event.key;


    if (userGuess === computerDecision) {
        totalWins++;
        /*guessesLeft = 9;
        currentGuesses.length = 0;*/
        reset();
        console.log(totalWins);
    } else if (userGuess != computerDecision) {
        guessesLeft--;
        currentGuesses.push(userGuess);
        console.log(currentGuesses);
        console.log(guessesLeft);
    } 
    if (guessesLeft === 0) {
        totalLost++;
        reset();
        /*guessesLeft = 9;
        currentGuesses.length = 0;
        console.log(totalLost);*/
    }

winsText.innerHTML = "Wins: " + totalWins;
lossText.innerHTML = "Losses: " + totalLost;
guessesText.innerHTML = "Your guesses so far: " + currentGuesses.join("");
remainingGuessesText.innerHTML = "Guesses Left: " + guessesLeft;
/*console.log(winsText);
console.log(lossText);
console.log(guessesText); */
};