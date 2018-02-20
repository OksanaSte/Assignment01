/* eslint-env browser */
var coinFlip = Math.round(Math.random());
var choice = prompt("Do you choose Heads or Tails?");
if (coinFlip == false && choice === "Heads") {
    document.write("The flip was heads and you chose heads...you win!");
}
else if (coinFlip == false && choice === "Tails") {
    document.write("The flip was heads but you chose tails...you lose!");
}
else if (coinFlip == true && choice === "Heads") {
    document.write("The flip was tails but you chose heads...you lose!");
    }
else {document.write("The flip was tails and you chose tails...you win!")}
    