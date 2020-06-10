let message;
let computerSelection = computerPlay();
let playerSelection = prompt("Please choose rock, paper, or scissors: ").toLowerCase();

function computerPlay() {
    //Random generate rock, paper, scissors for the computer

  let num = Math.floor(Math.random() * 4);

  if (num === 1){
      comp = "rock";
  } else if (num === 2){
      comp = "paper";
  } else {
      comp = "scissors";
  }
  return comp;
  }


function playRound() {
    //compare player and computer, output winner and results
    
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      message = "It's a tie";
    } else if (computerSelection === "paper") {
      message = "Computer wins!";
    } else if (computerSelection === "scissors") {
      message = "You win!";
    }
    return message;
}
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      message = "You win!";
    } else if (computerSelection === "paper") {
      message = "It's a tie!";
    } else if (computerSelection === "scissors") {
      message = "Computer wins!";
    }
    return message;
}
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      message = "Computer wins!";
    } else if (computerSelection === "paper") {
      message = "You win!";
    } else if (computerSelection === "scissors") {
      message = "It's a tie!";
    }
    return message;
}
  else {
      return message = "Incorrect input";
  }
}

console.log(playRound(playerSelection, computerSelection));
console.log("You chose: " + playerSelection + " and the computer chose: " + computerSelection);
