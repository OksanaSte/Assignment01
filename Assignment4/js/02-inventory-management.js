/*eslint-env browser*/

function display_menu() {
    "use strict";
    window.console.log("Welcome to the inventory management system");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all products");
    window.console.log("update - Update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function display(inventory) {
    "use strict";
    var i = 1;
    inventory.forEach(function (product) {
        window.console.log(i + ". " 
            + product['sku'] + " "
            + product['name'] + " "
            + "(" + product['quantity'] + ") "
            + product['cost']);
        i += 1;
    });
    window.console.log("");
}
function update(inventory) {
    "use strict";
    var newSKU = window.prompt("Enter the SKU you want to update");
    var isValidSku = false;
    
    inventory.forEach(function (product) {
        if (product['sku'] == newSKU) {
            product['quantity'] = window.prompt("Enter a new quantity of the products");
            isValidSku = true;
        }
    });
    
    if ( isValidSku ) {
        window.console.log(newSKU + " was updated.");
    } else {
        window.console.log(newSKU + " can't be updated because SKU is invalid.");
    }
    window.console.log("");
}
function main() {
    "use strict";

    var product1 = [];
    product1['sku'] = 2233;
    product1['name'] = "hat";
    product1['quantity'] = 12;
    product1['cost'] = '$14.99';
    var product2 = [];
    product2['sku'] = 3323;
    product2['name'] = "socks";
    product2['quantity'] = 36;
    product2['cost'] = '$9.99';
    var product3 = [];
    product3['sku'] = 4824;
    product3['name'] = "jeans";
    product3['quantity'] = 10;
    product3['cost'] = '$15.99';
    var product4 = [];
    product4['sku'] = 6343;
    product4['name'] = "shirt";
    product4['quantity'] = 22;
    product4['cost'] = '$39.99';
    var product5 = [];
    product5['sku'] = 9382;
    product5['name'] = "jacket";
    product5['quantity'] = 5;
    product5['cost'] = '$49.99';
    var inventory = [product1, product2, product3, product4, product5];
    
    var command;
    
    display_menu();
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display(inventory);
            } else if (command === "update") {
                update(inventory); 
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main(); 
    
