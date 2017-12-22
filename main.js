var game = require("./game.js");
var wordCons = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randoWord = game.randoWord;
var letterGuessed;
exports.letter;

console.log("Welcome to The Futama Hangman: The Game\n      _\n     ( )\n      H\n      H\n     _H\n  .-'-.-'-.\n /         \\\n|           |\n|   .-------'._\n|  / /  '.' '. \\\n|  \\ \\ @   @ / /\n|   '---------' \n|    _______| \n|  .'-+-+-+| \n|  '.-+-+-+|\n|    \"\"\"\"\"\" |\n'-.__   __.-'\n     \"\"\"\nThe Category is Main Characters ")

var myWord = new wordCons.wordCons(game.randoWord);
var maxGuesses = 15;

function startGame(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('You are all out of guesses.');
	return; 
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Guess a letter:',
		validate: function(str){
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){ 
				var letter = letterInput.letter; 
				myWord.findLetter(letter); 
					if(myWord.isComplete()){ 
					console.log('Correct, the answer was: ' + myWord.toString() + '!');
					return; 
					}
				console.log('-------------------\n'); 
				console.log('Be careful only ' + (maxGuesses - myWord.guessesMade.length) + ' guesses remain.')
				startGame(); 
				}
  );
}

startGame(); 