// computer choice function with choices array
function computerPlay () {
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  return computerSelection;
}

// comp makes a choice
const computerSelection = computerPlay ()
//console.log(computerSelection);
// works.

// user makes a choice - text input
const userInput = window.prompt("Rock, paper, or scissors?");

//user's choice character modification
const playerSelection = userInput.toLowerCase();

//give error when player writes something other than choices
if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
  alert("That's not a valid choice. Refresh and try again, my dude.");
};
//console.log(playerSelection);
//works.

// single round of RPS
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

// program evaluates user's choice against computer's choice
console.log(playRound(playerSelection, computerSelection));

//console.log(playerSelection);
//console.log(computerSelection);
//used to check function; works.

