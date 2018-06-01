/*eslint-env browser*/

var $ = function (id) {
    console.log(id, document.getElementById(id));
    return document.getElementById(id);
};
$("name").addEventListener('click', function promptName() {
    "use strict";
    var name = prompt("Please provide your name.");
});
$("deposit").addEventListener('click', function promptDeposit() {
    "use strict";
    var name = prompt("How much do you want to deposit?");
});
$("withdrawal").addEventListener('click', function promptWithdrawal() {
    "use strict";
    var name = prompt("How much do you want to withdraw?");
});
var balance = 0;
balance =+ deposit =- withdrawal;
//<div>"Name: " + name + ". Balance: " + balance</div>

function displayInfo () {
    "use strict";
    
}