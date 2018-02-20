/* eslint-env browser */
var x = parseInt(window.prompt("From what number do you wanna start a countdown?"), 10);
do {document.write(x + "<br>");
    x -=1;}
while (x >= 0);