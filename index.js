// Rock Paper Scissors Program

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const decider = document.getElementById("decider");
const playerScoreLabel = document.getElementById("playerScore");
const computerScoreLabel = document.getElementById("computerScore");

let playerHighScore = 0;
let computerHighScore = 0; 
const randomChoice = ["rock", "paper", "scissors"];

function getRandomChoice(randomChoice) {
    // finding the random index from the random choice array for
    // computer choices
    const randomIndex = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomIndex];
}


function setUserChoice(input) {
    const computerChoices = getRandomChoice(randomChoice);
    playerChoice.textContent = "Player: " + input;
    computerChoice.textContent = " Computer: " + computerChoices;

    if (input == 'rock'){

        if (computerChoices == input) {
            decider.textContent = "Its a tie";
        }
        else if (computerChoices == "paper") {
            decider.textContent = "Paper beats rock";
            computerHighScore += 1;

        }
        else if (computerChoices == "scissors") {
            decider.textContent = "Rock beats scissors";
            playerHighScore += 1;
        }
    }
    if (input == 'paper') {
        if (computerChoices == input) {
            decider.textContent = "Its a tie";
        }
        else if (computerChoices == "rock") {
            decider.textContent = "Paper beats rock";
            playerHighScore += 1;

        }
        else if (computerChoices == "scissors") {
            decider.textContent = "Scissors beats rock";
            computerHighScore += 1;
        }
    }
    if (input == 'scissors') {


        if (computerChoices == input) {
            decider.textContent = "Its a tie";
        }
        else if (computerChoices == "paper") {
            decider.textContent = "Scissors Beats Paper";
            playerHighScore += 1;

        }
        else if (computerChoices == "rock") {
            decider.textContent = "Rock beats scissors";
            computerHighScore += 1;
        }
    }
    playerScoreLabel.textContent = `Player Score: ${playerHighScore}`;
    computerScoreLabel.textContent = `Computer Score: ${computerHighScore}`;

}


