//const computerPlay = choices[Math.floor(Math.random() * choices.length)];
//this works, it's a great solution, but computerPlay is not a function here. ugh.

// computer choice function
// include array in fuction to make as simple as possible
function computerPlay () {
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  return computerSelection;
}

// comp makes a choice
const computerSelection = computerPlay ()
//console.log(computerSelection);
// works.

// user makes a choice - input
const userInput = window.prompt("Rock, paper, or scissors?");

//user's choice is modifed so all letters get transformed to match array choices
const playerSelection = userInput.toLowerCase();

//give error when player writes something other than choices in array
if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
  alert("That's not a valid choice. Refresh and try again, my dude.");
};
//console.log(playerSelection);
//works.

//for RPS, there are 4 possible outcomes:
// 1. tie, 2. rock crushes scissors, 3. paper covers rock, 4. scissors cut paper

// single round of RPS - playRound
// two parameters: playerSelection, computerSelection
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie ~")
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ){
    console.log("You won!")
  }
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ){
    console.log("You lost :/")
  }
};


//console.log(playerSelection);
//console.log(computerSelection);
//used to check function; works.

// program evaluates user's choice against computer's choice
console.log(playRound(playerSelection, computerSelection));

