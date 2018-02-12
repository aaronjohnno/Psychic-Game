// Define letters in array that computer can pick from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Set defined variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
// guessesAlreadyMade is an array that will hold all the user's guesses in each round
var guessesAlreadyMade = [];
// userGuess is what the user picks by pressing a key
var userGuess = null;
// Have computer pick a letter and store it in letterSolution
var letterSolution = letters[Math.floor(Math.random() * letters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " guessesRemaining: " + guessesRemaining + " Guesses so far: " + guessesAlreadyMade + " Computer picked: " + letterSolution);

// start listening for events
document.onkeyup = function(event) {

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	/* 	Add the user's guess to guessesAlreadyMade array but 
	   	only if it wasn't already previously picked by the user
	   	also make sure that the character user picks is within
	   	the alphabet, and not any non-usable character */
	if (guessesAlreadyMade.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
		guessesAlreadyMade[guessesAlreadyMade.length]=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesRemaining--;
	}

	/*  if letterSolution is same as userGuess then record it as a win
		and then reset guessesRemaining to 9, and empty the guessesAlreadyMade array
		also have the computer make a new random pick */
	if (letterSolution == userGuess) {
		wins++;
		console.log("You won!");
		guessesRemaining = 9;
		guessesAlreadyMade = [];
		letterSolution = letters[Math.floor(Math.random() * letters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " guessesRemaining: " + guessesRemaining + " Guesses so far: " + guessesAlreadyMade + " Computer picked: " + letterSolution);
	}

	/*	if guessesRemaining gets to 0 then record it as a loss
		and then reset guessesRemaining to 9, and empty the guessesAlreadyMade array
		also have the computer make a new random pick */
	if (guessesRemaining == 0) {
		losses++;
		console.log("You lost!");
		guessesRemaining = 9;
		guessesAlreadyMade = [];
		letterSolution = letters[Math.floor(Math.random() * letters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " guessesRemaining: " + guessesRemaining + " Guesses so far: " + guessesAlreadyMade + " Computer picked: " + letterSolution);
	}

	// Displaying progress to HTML
	var html = "<p><h1>PSYCHIC GAME</h1></p>" + "<p><h4>Guess what letter I'm thinking of ...</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Remaining: " + guessesRemaining + "</h4></p>" + "<p><h4>Guesses made so far: " + guessesAlreadyMade + "</h4></p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;

}