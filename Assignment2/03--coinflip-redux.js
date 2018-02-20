/* eslint-env browser */
var coinFlip;
var i;
for (i = 1; i <= 10; i += 1) {
    var coinFlip = Math.round(Math.random());
if (coinFlip === 0) {
   window.document.write("Heads <br>"); 
}
else {window.document.write("Tails <br>");}
}