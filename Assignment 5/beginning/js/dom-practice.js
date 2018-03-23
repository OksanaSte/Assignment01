/*eslint-env browser*/
var $ = function (id) {
    return document.getElementById(id);
}


//STEP 1
function writeMessage() {
    "use stcrict";
    window.alert("I have been clicked.");
};
//STEP 2
var myElement = document.getElementById("secondButton");
myElement.onclick = function() {
    "use stcrict";
    window.alert("I have been clicked.");
};
//STEP 3
document.getElementById("thirdButton").addEventListener("click", writeMessage);
function writeMessage() {
    "use stcrict";
    window.alert("I have been clicked.");
};
//STEP 4
document.getElementById("fourthButton").addEventListener("click", function () {
    "use stcrict";
    window.alert("I have been clicked.");
});

//STEP 5
window.addEventListener("load", init);
function init() {
    "use stcrict";
    document.getElementById("fifthButton").addEventListener("click", function () {
    window.alert("I have been clicked.");
    });
};
//STEP 6
var redirect = document.getElementById("redirect");
redirect.addEventListener("click", function (x) {
    "use stcrict";
    x.preventDefault();
});
//STEP 7
var text = document.getElementById("text");
var submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    "use strict";
    submit.disabled = true;
    window.alert(text.value); 
});
//STEP 8
document.getElementById("newPage").addEventListener("click", function () {
    "use stcrict";
    window.open("newpage.html", "newpage", "width=300,height=300");
});
//STEP 9
var myInt;
$("startInt").addEventListener("click", function () {
  "use strict";
  myInt = setInterval(function(){console.log("Learning JavaScript is fun!")}, 2000);
});
$("stopInt").addEventListener("click", function () {
  "use strict";
  clearInterval(myInt);
});
//STEP 10
$("dropdownSelect").addEventListener("click", function () {
    "use strict";
    var dropdown = $("dropdown");
    alert(dropdown.options[dropdown.selectedIndex].value);
});