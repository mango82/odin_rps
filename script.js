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
            alert("It was a draw! Your opponent chose " + computerSelection)
        } else if (playerSelection === "rock" && computerSelection === "paper"){
            alert("You Lose! Paper beats Rock")
        } else if (playerSelection === "rock" && computerSelection === "scissors"){
            alert("You Win! Rock beats Scissors")

        } else if (playerSelection === "scissors" && computerSelection === "paper"){
            alert("You Win! Scissors beat Paper")
        } else if (playerSelection === "scissors" && computerSelection === "rock"){
            alert("You Lose! Rock beats Scissors")

        } else if (playerSelection === "paper" && computerSelection === "rock"){
            alert("You Win! Paper beats Rock")
        } else if (playerSelection === "paper" && computerSelection === "scissors"){
            alert("You Lose! Scissors beats Paper")
        }
}

playRound()

// Make function game()
// Call playRound() inside funcion
// Use loops to keep score until 5 and declares winner
