let playerScore = 0;
let computerScore = 0;

// get computer selection randomly
function computerChoice() {
    let number = Math.floor(Math.random() * 3);
    let computer;
    console.log(number);
    if (number === 0) {
        computer = "Rock";
    } else if (number === 1) {
        computer = "Paper";
    } else if (number === 2) {
        computer = "Scissors";
    };
    console.log(computer);
    return computer;
};

// get player selection from button click
function playerChoice() {
    
}