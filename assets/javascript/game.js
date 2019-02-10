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
var computerChoice = function(){
    computerDecision = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};
computerChoice();
// console.log(computerDecision);

 document.onkeyup = function(){
    



};




