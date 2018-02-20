/* eslint-env browser */
var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {console.log("Heads <br>"); }
else {console.log("Tails <br>");}
}
while (coinFlip === 1);