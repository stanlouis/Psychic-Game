//establlish array and variables
var charsList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var guessesSoFar = document.querySelector ('#guessesSoFar');
var guessesLeft = document.querySelector ('#guessesLeft');
// var guessesList = document.querySelector ('#guessList');
var message = document.querySelector ('#message');
var wins = document.querySelector ('#wins');
var failures = document.querySelector ('#failures');

var userChoices = [];
var userGuess;
var randomCharacterVar;
var computerChoice;
var winsCount = 0;
var failCount = 0;
var remainingGuesses = 9;

computerChoice = selectRandomChar ();
console.log (computerChoice);
function selectRandomChar () {
  return charsList[Math.floor (Math.random () * charsList.length)];
}

var displayGuestList = function () {
  guessesSoFar.textContent = userChoices.join (', ');
};

var gameReset = function () {
  computerChoice = selectRandomChar ();
  console.log (computerChoice);
  remainingGuesses = 9;
  userChoices = [];
  guessesSoFar.textContent = '';
  guessesLeft.textContent = remainingGuesses;
  setTimeout(function(){ message.textContent = ''; }, 1000);
};
document.onkeyup = function (e) {
  userGuess = event.key;
  if (!userChoices.includes (userGuess)) {
    remainingGuesses--;
    guessesLeft.textContent = remainingGuesses;
    userChoices.push (userGuess);
    displayGuestList ();
  }
  if (remainingGuesses > 0) {
    if (userGuess === computerChoice) {
      winsCount++;
      wins.textContent = winsCount;
      message.textContent = 'Congratulation you won';
      gameReset ();
    }
  } else if (remainingGuesses === 0) {
    failCount++;
    failures.textContent = failCount;
    gameReset ();
  }
};
