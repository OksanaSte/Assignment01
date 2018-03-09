/*eslint-env browser*/
// 1=rock 2=paper 3=scissors

function play() {
   "use strict";
   var userChoice = prompt("Welcome to the Rock, Paper, Scissors Game! Please enter your choice.");
   if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
       alert("You've entered a wrong value. Please try again.");
       return play();
   }
else {
    var compChoice = Math.floor(Math.random() * 3);
    if (userChoice === "rock") { 
        if (compChoice === 1) {
            alert("It's a tie! We've both chosen rock!")
        } 
        else if (compChoice === 2) {
            alert("You lost! Paper covers rock!")
        } 
        else {
            alert("You won! Rock destroys scissors.")
        }
    }
    else if (userChoice === "paper") {
        if (compChoice === 1) {
            alert("You won! Paper covers rock!")
        } 
        else if (compChoice === 2) {
            alert("It's a tie! We've both chosen paper!")
        } 
        else {
            alert("You lost! Scissors cut paper.")
        }
    }
    else {
        if (compChoice === 1) {
            alert("You lost! Rock destroys scissors.")
        } 
        else if (compChoice === 2) {
            alert(" You won! Scissors cut paper.")
        } 
        else {
            alert("It's a tie! We've both chosen scissors!")
        }
        }
    }
}
play();

