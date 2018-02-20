/* eslint-env browser */
var first = parseInt(window.prompt("Please enter the first number."), 10);
var second = parseInt(window.prompt("Please enter the second number."), 10);
if (first === second) {
    window.document.write("The numbers you've entered are equal.");
}
else if (first > second) {
    window.document.write(first + " is the larger of the 2 numbers.");
}
else {
    window.document.write(second + " is the larger of the 2 numbers.");
}