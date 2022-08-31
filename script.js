let playerScore = 0
let opponentScore = 0
let computerSelection = getComputerChoice()
game()
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
// Gets player choice through prompt
function getPlayerChoice(str) {
    var str = prompt("Type rock paper or scissors.")
    var str = str.toLowerCase()   
        if (str === "rock" || str === "paper" || str === "scissors"){
            return str;
        } else{
            alert("You have not chosen rock paper or scissors");
            return getPlayerChoice();
        }
}
// Finds result of round and updates variables
function playRound(playerSelection, computerSelection){
    var playerSelection = getPlayerChoice()
    var computerSelection = getComputerChoice()
        if (playerSelection === computerSelection) {
            console.log("It was a draw! Your opponent chose " + computerSelection)
            
        } else if (playerSelection === "rock" && computerSelection === "paper"){
            console.log("You Lose! Paper beats Rock")
            opponentScore += 1
        } else if (playerSelection === "rock" && computerSelection === "scissors"){
            console.log("You Win! Rock beats Scissors")
            playerScore += 1

        } else if (playerSelection === "scissors" && computerSelection === "paper"){
            console.log("You Win! Scissors beat Paper")
            playerScore += 1
        } else if (playerSelection === "scissors" && computerSelection === "rock"){
            console.log("You Lose! Rock beats Scissors")
            opponentScore += 1

        } else if (playerSelection === "paper" && computerSelection === "rock"){
            console.log("You Win! Paper beats Rock")
            playerScore += 1
        } else if (playerSelection === "paper" && computerSelection === "scissors"){
            console.log("You Lose! Scissors beats Paper")
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