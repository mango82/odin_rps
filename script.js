// Make function getComputerChoice()
function getComputerChoice(num) {
// Function RNG 0-2 
    num = Math.floor(Math.random()*3);
// convert to strings rock paper scissors return value
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
// Variable computerSelection =  getComputerChoice
let computerSelection = getComputerChoice()

// Make function playerSelection()
function getPlayerChoice(str) {
// ask for user to type rock paper or scissors
    var str = prompt("Type rock paper or scissors.")
// convert string to all lowercase letters   
    var str = str.toLowerCase()   
// return converted string if user types rock paper or scissors
        if (str === "rock" || str === "paper" || str === "scissors"){
            return str;

        } else{
            alert("You have not chosen rock paper or scissors");
            return getPlayerChoice();
        }
}

// Make function playRound()
function playRound(playerSelection, computerSelection){
// Use parameters playerSelection and computer Selection
    var playerSelection = getPlayerChoice()
    var computerSelection = getComputerChoice()
// Define game rules R<P<S<R
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

// Define score variables
let playerScore = 0
let opponentScore = 0



  
// Make function game()
function game() {
// Use loops to keep score until 5 rounds and declares winner
    for (let i = 1; i<=5; i++) {
        console.log("Round " + i)
// Call playRound() inside funcion  
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
game()
