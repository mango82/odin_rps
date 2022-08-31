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
            alert("You have not chosen rock paper or scissors")
        }
}
console.log(getPlayerChoice())


// Make function playRound()
// Use parameters playerSelection and computer Selection
// Define game rules R<P<S<R

// Make function game()
// Call playRound() inside funcion
// Use loops to keep score until 5 and declares winner
