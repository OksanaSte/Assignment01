/*eslint-env browser*/


function calculate() {
    "use strict";
    var number1 = parseInt(prompt("Welcome to the Basic Calculator! Please enter the first number."));
    var number2 = parseInt(prompt("Please enter the second number."));
    var operation = prompt("What type of operation do you want to do with those numbers?");
    var result;

    switch (operation) {
        case "*":
            result = number1 * number2;
            break; 
        case "/":
            result = number1 / number2;
            break; 
        case "+":
            result = number1 + number2;
            break; 
         case "-":
            result = number1 - number2;
            break; 
         case "%":
            result = number1 % number2;
            break; 
         default: 
            alert("Please enter 1 of those operators: + - * / %.");
            return calculate();
    }
    return result;
}  
alert("The result is " + calculate() + " .");
