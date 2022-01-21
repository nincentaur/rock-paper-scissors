//declare variables
let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

//randomize computer plays using array already declared
function computerPlay () {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  return computerSelection;
}

//single round game; userinput is made lowercase
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    alert("That's not a valid choice. Try again, my dude.");
  };
  if (playerSelection === computerSelection) {
    alert("It's a tie ~")
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ){
    playerScore++;
    alert("You won!")
  }
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ){
    computerScore++;
    alert("You lost :/")
  }
};

//uses previous function, plays 5 games & keeps score
function game () {
  while (playerScore < 5 && computerScore < 5) {
    let playerSelection = window.prompt("Rock, paper, or scissors?");
    let computerSelection = computerPlay ();
    playRound(playerSelection, computerSelection);
      let score = `Netizen: ${playerScore}, Computer: ${computerScore}`;
      alert(score);
  }
  while (playerScore == 5) {
    alert("You've won the match!")
  }
  while (computerScore == 5) {
    alert("You lost the match. But no worries ~ refresh to try again.")
  }
}

game();