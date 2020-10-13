let playerScore = 0;
let computerScore = 0;


// get computer selection randomly
function computerChoice() {
    let number = Math.floor(Math.random() * 3);
    let computer;

    if (number === 0) {
        computer = "Rock";
    } else if (number === 1) {
        computer = "Paper";
    } else if (number === 2) {
        computer = "Scissors";
    };
    return computer;
};

// get player selection from button click
function game(element) {
    let player = element.id;
    let computer = computerChoice();

    let youResult = document.getElementById("you-result");
    youResult.textContent = "You chose " + player;

    let computerResult = document.getElementById("computer-result");
    computerResult.textContent = "Computer chose " + computer;

    compare(player, computer);
};

// compare results from game fx and decide winner of round
function compare(player, computer) {
    let winner;
    console.log("P: " + player);
    console.log("C: " + computer);
    if (player === computer) {
        console.log("it's a tie");
    } else if (player === "Rock") {
        if (computer === "Paper") {
            winner = "Computer";
        } else {
            winner = "Player";
        };
    } else if (player === "Paper") {
        if (computer === "Scissors") {
            winner = "Computer";
        } else {
            winner = "Player";
        }
    } else if (player === "Scissors") {
        if (computer === "Rock") {
            winner = "Computer";
        } else {
            winner = "Player";
        }
    }
    results(winner);
};

// increment scores and trigger game end after winner gets 5 points
function results(winner) {
    if (winner === "Player") {
        playerScore++;
        document.getElementById("player").textContent = playerScore;
        if (playerScore === 5) {
            document.getElementById("all").style.display = "none";
            document.getElementById("game-over").textContent = "Congratulations.  You win!!!";
            document.getElementById("reset").style.display = "block";

        };
    } else if (winner === "Computer") {
        computerScore++;
        document.getElementById("computer").textContent = computerScore;
        if (computerScore === 5) {
            document.getElementById("all").style.display = "none";
            document.getElementById("game-over").textContent = "Sorry, but you lose!!!";
            document.getElementById("reset").style.display = "block";
        }
    };
};

// click button reloads index.html to play again
function reset() {
    window.location = "index.html";
}