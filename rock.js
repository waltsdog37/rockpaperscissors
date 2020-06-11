function game() {
  //Start the game, play 5 rounds and keep score
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Please choose rock, paper, or scissors: ").toLowerCase();
    
    console.log(playRound(playerSelection, computerSelection));
    console.log("You chose: " + playerSelection + " and the computer chose: " + computerSelection);
    if (message === "You win!") {
      playerScore++;
    } else if (message === "Computer wins!") {
      computerScore++;
    }
    console.log("SCORE - You: " + playerScore + ", Computer: " + computerScore);
  }

  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lost the game!");
  } else {
    console.log("It's a tie game!  Please try again!");
  }
}



function computerPlay() {
  //Random generate rock, paper, scissors for the computer

  let num = Math.floor(Math.random() * 4);
  let computer;

  if (num === 1) {
    computer = "rock";
  } else if (num === 2) {
    computer = "paper";
  } else {
    computer = "scissors";
  }
  return computer;
}


function playRound(playerSelection, computerSelection) {
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

game();
