let message;
let computerSelection = computerPlay();
let playerSelection = prompt("Please choose (r)ock, (p)aper, or (s)cissors: ");

function computerPlay() {
    //Random generate r, p, s for the computer

  let num = Math.floor(Math.random() * 4);

  if (num === 1){
      comp = "r";
  } else if (num === 2){
      comp = "p";
  } else {
      comp = "s";
  }
  return comp;
  }


function playRound() {
    //compare player and computer, output winner and results
    
  if (playerSelection === "r") {
    if (computerSelection === "r") {
      message = "It's a tie";
    } else if (computerSelection === "p") {
      message = "Computer wins!";
    } else if (computerSelection === "s") {
      message = "You win!";
    }
    return message;
}
  else if (playerSelection === "p") {
    if (computerSelection === "r") {
      message = "You win!";
    } else if (computerSelection === "p") {
      message = "It's a tie!";
    } else if (computerSelection === "s") {
      message = "Computer wins!";
    }
    return message;
}
  else if (playerSelection === "s") {
    if (computerSelection === "r") {
      message = "Computer wins!";
    } else if (computerSelection === "p") {
      message = "You win!";
    } else if (computerSelection === "s") {
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
