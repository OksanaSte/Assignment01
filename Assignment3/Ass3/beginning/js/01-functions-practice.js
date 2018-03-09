/*eslint-env browser*/
//STEP 1
/*var number;
number = parseInt(prompt("Enter a number"), 10);
function halfNumber(number) {
    "use strict";
    return number / 2;   
} 
console.log("Half of " + number + " is " + halfNumber(number) + ".");

//STEP 2
var number2;
number2 = parseInt(prompt("Enter a number"), 10);
function squareNumber(number2) {
    "use strict";
    return number2 * number2;   
} 
console.log("The result of squaring the number " + number2 + " is " + squareNumber(number2) + ".");

//STEP 3
var firstNumber, secondNumber;
firstNumber = parseInt(prompt("Enter a number"), 10);
secondNumber = parseInt(prompt("Enter the second number"), 10);
function percentOf(firstNumber, secondNumber) {
    "use strict";
    return firstNumber / secondNumber * 100;   
} 
console.log(firstNumber + " is " + percentOf(firstNumber, secondNumber) + "% of " + secondNumber + ".");

//STEP 4

var first, second;
first = parseInt(prompt("Enter a number"), 10);
second = parseInt(prompt("Enter the second number"), 10);
function findModulus(first, second) {
    "use strict";
    return first % second;
} 
console.log(findModulus(first, second) + " is the modulus of " + first + " and " + second + ".");*/

//STEP 5

var addendum = prompt("Enter numbers, separated by comma");

function countSum (addendum){
    "use strict";
    var numbers = addendum.split(',');
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }
    return sum;
}
alert("The sum of the entered numbers is " + countSum(addendum) + " .");

