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

    rock.addEventListener("click", function() {
        playRound("rock", computerSelection)
    })
    scissors.addEventListener("click", function() {
        playRound("paper", computerSelection)
    })
    paper.addEventListener("click", function() {
        playRound("scissors", computerSelection)
    })

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
// Use loops to keep score until 5 rounds and declares winner
function game() {
    for (let i = 1; i<=5; i++) {
        console.log("Round " + i)
        playRound()  
    }
    if (playerScore === opponentScore) {
        console.log("Its a draw! The score is: " + playerScore + "-" + opponentScore)
    } else if (playerScore > opponentScore) {
        console.log("You Win! The score is: " + playerScore + "-" + opponentScore)
    } else if (playerScore < opponentScore) {
        console.log("You Lose! The score is: " + playerScore + "-" + opponentScore)
    }
}