// first step
function validateForm() {
    "use strict";
    var inputs = document.getElementsByTagName('input');
    for (var index = 0; index < inputs.length; ++index) {
        var inputEl = inputs[index];
        if (inputEl.style.display === 'none' || inputEl.dataset.cc) {
            continue;
        }
        if (inputEl.value == "" && inputEl.name !== "aptNumber") {
            alert(inputEl.name + " must be filled out.");
            inputEl.focus();
            return false;
        }
        if(inputEl.dataset.type === 'text' && !(/^[a-zA-Z\s]+$/.test(inputEl.value))) {
            // validate number
            alert(inputEl.name + " must have alphabets only.");
            inputEl.focus();
            return false;
        }
        if(inputEl.dataset.type === 'number' && isNaN(inputEl.value)) {
            // validate number
            alert(inputEl.name + " must have numbers only.");
            inputEl.focus();
            return false;
        }
        if(inputEl.dataset.type === 'number' && parseInt(inputEl.value) <= 0) {
            // validate number
            alert(inputEl.name + " must be positive.");
            inputEl.focus();
            return false;
        }
        if(inputEl.dataset.type === "email" && !(/\S+@\S+\.\S+/.test(inputEl.value))) {
            // validate number
            alert(inputEl.name + " is not valid.");
            inputEl.focus();
            return false;
        }
        if(inputEl.dataset.limit && inputEl.value.length !== parseInt(inputEl.dataset.limit)) {
            alert(inputEl.name + " must have " + inputEl.dataset.limit + " symbols.");
            inputEl.focus();
            return false;
        }
    }
    
    // validate select
    if(!document.getElementById('typeOfAddress').selectedIndex) {
        console.log('otherType', document.getElementById('otherType').selectedIndex)
        alert("Please select type of address.");
        inputEl.focus();
        return false;
    }
    
    // validate CC only if we show it
    if (validateCC) {
        return validateCCInfo();
    }
    
    // default state
    return false;

}
document.getElementById('typeOfAddress').onchange = function(event) {
    console.log('typeOfAddress', event, event.target.selectedIndex);
    // Other
    var otherInput = document.getElementById('otherType');
    if (event.target.selectedIndex === 7) {
        otherInput.style.display = 'block';
    } else if ( otherInput.style.display === 'block' ) {
        otherInput.style.display = 'none';
    }
}


// second step
var step2 = [
    [
        {name: 'Small', price: '9.99'},
        {name: 'Medium', price: '12.99'},
        {name: 'Large', price: '14.99'}
    ],
    [
        {name: 'Medium', price: '11.99'},
        {name: 'Large', price: '13.99'}
    ],
    [
        {name: 'Large', price: '16.99'},
        {name: 'Extra Large', price: '19.99'}
    ],
    [
        {name: 'Small', price: '10.99'}
    ]
];
//var isAcivated = false;
var radioButtons = document.myForm.optionsRadios;
for(var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].onclick = function(event) {
        var currentStep = step2[event.target.value];
        var selectDiv = document.getElementById('pizzaChoice');
        var selectEl = document.createElement( 'select' );
        selectEl.id = 'pizzaChoiceSelect';

        // default value
        var option = document.createElement("option");
        option.text = 'Choose the size...';
        option.value = 0;
        selectEl.appendChild(option);
        
        for (var i = 0; i < currentStep.length; i++ ) {
            var option = document.createElement("option");
            option.text = currentStep[i].name + " $" + currentStep[i].price ;
            option.value = currentStep[i].price;
            selectEl.appendChild(option);   
        }
        selectDiv.innerHTML = '';
        selectDiv.appendChild(selectEl);

        selectEl.onchange = function (event) {
            activateNextSteps(event);
            calculateTotal();
        };

//        selectEl.onchange = function(event) {
//            console.log('change', event.target.value);
//            // activate next
//            calculateTotal();
//        }

//        // activate next
//        if (!isAcivated && !selectEl.selectedIndex) {
//            activateNextSteps();
//            isAcivated = true;
//        }
    };
}

// validate steps
function activateNextSteps(event) {
    var status = !parseInt(event.target.selectedIndex);
    document.getElementById('cheese').disabled = status;
    document.getElementById('sauce').disabled = status;
    var toppings = document.myForm.elements["toppings"];
    for (var i=0; i < toppings.length; i++) {
        toppings[i].disabled = status;
        toppings[i].onchange = calculateTotal;
    }
}

// calculate total
function calculateTotal() {
    var currentTotal = 0;

    var pizza = document.getElementById('pizzaChoiceSelect');
    if (pizza) {
        currentTotal += parseFloat(pizza.value);
    }
    
    var cheese = document.getElementById('cheese');
    if (!cheese.disabled) {
        currentTotal += parseFloat(cheese.value);
    }
    
    var sauce = document.getElementById('sauce');
    if (!sauce.disabled) {
        currentTotal += parseFloat(sauce.value);
    }

    var toppings = document.myForm.elements["toppings"];
    for (var i=0; i < toppings.length; i++) {
        if (toppings[i].checked) {
             currentTotal += parseFloat(sauce.value);    
        }
    }
    
    var totalElement = document.getElementById('your-total');
    totalElement.innerHTML = currentTotal.toFixed(2);
    
    console.log('calculateTotal', currentTotal);
}

// confirmation box
var validateCC = false;
function confirmationBox() {
    var r = confirm("Finished Building Pizza");
    if (r == true) {
        txt = "You pressed OK!";
        document.getElementById('paymentInfo').style.display = 'block';
        validateCC = true;
    }
}

function copyAddress(el) {
    var copyFields = ['name', 'address', 'aptNumber', 'city', 'state', 'zip'];
    var currentFields;
    // copy fields' values from first form
    for (var i=0; i < copyFields.length; i++) {
        currentFields = document.myForm.elements[copyFields[i]];
        currentFields[1].value = el.checked && currentFields[0].value || '';
    }    
}

function validateCCInfo() {
    var ccFields = ['cc', 'cvc'];
    var inputEl;
    for (var i=0; i < ccFields.length; i++) {
        inputEl = document.myForm.elements[ccFields[i]];

        if(inputEl.dataset.type === 'number' && isNaN(inputEl.value)) {
            // validate number
            alert(inputEl.name + " must have numbers only.");
            inputEl.focus();
            return false;
        }
        if(inputEl.dataset.limit && inputEl.value.length !== parseInt(inputEl.dataset.limit)) {
            alert(inputEl.name + " must have " + inputEl.dataset.limit + " symbols.");
            inputEl.focus();
            return false;
        }
        if (inputEl.name == 'cc' && !inputEl.value.length)  {
            alert('Please enter your card number');
            inputEl.focus();
            return false;
        }
        if (inputEl.name == 'cc' && !luhnCheck(parseInt(inputEl.value))) {
            alert('Your card number is not valid');
            return false;
        }
    }
    
    // validate date
    var d = new Date();
    var expirationMonth = document.getElementById('expirationMonth');
    var expirationYear = document.getElementById('expirationYear');
    
    if (!expirationMonth.selectedIndex) {
        alert('Please choose expiration month');
        expirationMonth.focus();
        return false;
    }
    if (!expirationYear.selectedIndex) {
        alert('Please choose expiration year');
        expirationYear.focus();
        return false;
    }
    if ( parseInt(expirationYear.value) == d.getFullYear() && parseInt(expirationMonth.value) < d.getMonth() ) {
        alert('Please select valid expiration month');
        expirationMonth.focus();
        return false;
    }
    
    alert('YOU ARE THE BOSS!');
    return false;
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
