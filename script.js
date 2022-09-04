let playerScore = 0
let opponentScore = 0
let computerSelection = getComputerChoice()
// Gets computer choice through RNG
function getComputerChoice(num) {
    num = Math.floor(Math.random()*3);
        if (num === 0) {
            return num = "rock"
        }
        else if (num === 1) {
            return num = "paper"
        }
        else if (num === 2) {
            return num = "scissors"
        }
}
// Gets player choice through button
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
// Define Score
let score = document.getElementById("score")
score.innerHTML = "Your Score: " + playerScore + " Opponent Score: " + opponentScore
// Add DOM events to buttons
    rock.addEventListener("click", function() {chooseRock()})
    scissors.addEventListener("click", function() {choosePaper()})
    paper.addEventListener("click", function() {chooseScissors()})
// Display and update score in HTML
function updateScore() {
    if (playerScore === 5) {
        score.innerHTML = "You Win, Final Score: " + playerScore + " : " + opponentScore
    }
    else if (opponentScore === 5) {
        score.innerHTML = "You Lose, Final Score: " + playerScore + " : " + opponentScore
    }
    else {
        score.innerHTML = "Your Score: " + playerScore + " Opponent Score: " + opponentScore
    }
}
// Add functions to 
function chooseRock() {
    if (playerScore < 5 && !(opponentScore === 5) || opponentScore < 5 && !(playerScore === 5)) {
        playRound("rock", computerSelection)
        updateScore()
    }
}
function choosePaper() {
    if (playerScore < 5 && !(opponentScore === 5) || opponentScore < 5 && !(playerScore === 5)){
        playRound("paper", computerSelection)
        updateScore()
    }
}
function chooseScissors() {
    if (playerScore < 5 && !(opponentScore === 5) || opponentScore < 5 && !(playerScore === 5)) {
        playRound("scissors", computerSelection)
        updateScore()
    }
}

// Finds result of round and updates variables
function playRound(playerSelection, computerSelection){
let result = document.getElementById("result")
    var computerSelection = getComputerChoice()
        if (playerSelection === computerSelection) {
            result.innerHTML = ("It was a draw! Your opponent chose " + computerSelection)
            
        } else if (playerSelection === "rock" && computerSelection === "paper"){
            result.innerHTML = ("You Lose! Paper beats Rock")
            opponentScore += 1
        } else if (playerSelection === "rock" && computerSelection === "scissors"){
            result.innerHTML = ("You Win! Rock beats Scissors")
            playerScore += 1

        } else if (playerSelection === "scissors" && computerSelection === "paper"){
            result.innerHTML = ("You Win! Scissors beat Paper")
            playerScore += 1
        } else if (playerSelection === "scissors" && computerSelection === "rock"){
            result.innerHTML = ("You Lose! Rock beats Scissors")
            opponentScore += 1

        } else if (playerSelection === "paper" && computerSelection === "rock"){
            result.innerHTML = ("You Win! Paper beats Rock")
            playerScore += 1
        } else if (playerSelection === "paper" && computerSelection === "scissors"){
            result.innerHTML = ("You Lose! Scissors beats Paper")
            opponentScore += 1
        }
}