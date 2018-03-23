/*eslint-env browser*/


// Utils
var $ = function(id) {
    return document.getElementById(id);
};

// Global Vars
var emp1 = []
emp1['name'] = 'Bob Celso';
emp1['title'] = 'COM';
emp1['extension'] = 'x1';

var emp2 = []
emp2['name'] = 'Jay Z';
emp2['title'] = 'Rapper';
emp2['extension'] = 'x2';

var emp3 = []
emp3['name'] = 'Beyoncee';
emp3['title'] = 'Singer';
emp3['extension'] = 'x3';

var emp4 = []
emp4['name'] = 'Mario';
emp4['title'] = 'CEO';
emp4['extension'] = 'x4';

var emp5 = []
emp5['name'] = 'Christian Ronaldo';
emp5['title'] = 'Soccer Player';
emp5['extension'] = 'x5';

var employees = [emp1, emp2, emp3, emp4, emp5];

function clearForm() {
    var empTable = document.getElementById('listOfEmployees').getElementsByTagName('tbody')[0];

    var aName = document.getElementById("addName");
    var aTitle = document.getElementById("addTitle");
    var aExtension = document.getElementById("addExtension");

    aName.value = '';
    aTitle.value = '';
    aExtension.value = '';
}

document.getElementById("addEmployeeBtn").addEventListener("click", function(event) {
    event.preventDefault();

    var empTable = $('listOfEmployees').getElementsByTagName('tbody')[0];

    var aName = $("addName");
    var aTitle = $("addTitle");
    var aExtension = $("addExtension");

    if ( !(aName.value && aTitle.value && aExtension.value) ) {
        if ( !aName.value ) {
            alert('Please fill Name field');
            return aName.focus();
        } else if ( !aTitle.value ) {
            alert('Please fill Title field');
            return aTitle.focus();
        } else if ( !aExtension.value ) {
            alert('Please fill Extension field');
            return aExtension.focus();
        }
    }

    var newEmployee = []
    newEmployee['name'] = aName.value;
    newEmployee['title'] = aTitle.value;
    newEmployee['extension'] = aExtension.value;

    addEmployee(newEmployee);
    updateEmployeesCount('add');
    clearForm();
});

function deleteRow(rowId) {
    var empTable = $('listOfEmployees').getElementsByTagName('tbody')[0];
    var remtr = $(rowId);

    while((remtr.nodeName.toLowerCase()) != 'tr') {
        remtr = remtr.parentNode;
    }

    remtr.parentNode.removeChild(remtr);
    updateEmployeesCount('delete');
}

function addEmployee (emp) {
    var empTable = $('listOfEmployees').getElementsByTagName('tbody')[0];

    var tr = document.createElement("tr");
    tr.align = "center";
    var button = document.createElement("button");
    tr.id = "row" + emp['extension'];
    button.id = emp['extension'];
    button.onclick = function (el) { deleteRow('row' + el.target.id); };
    button.innerText = "Delete";
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.appendChild(document.createTextNode(emp['name']));
    td2.appendChild(document.createTextNode(emp['title']));
    td3.appendChild(document.createTextNode(emp['extension']));
    td4.appendChild(button)

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    empTable.appendChild(tr);
}

function updateEmployeesCount(method) {
    if (method == 'add') {
        $('numbersOfEmployees').innerText = parseInt($('numbersOfEmployees').innerText) + 1;
    } else if (method == 'delete') {
        $('numbersOfEmployees').innerText = parseInt($('numbersOfEmployees').innerText) - 1;
    }
}

function init() {
    $('numbersOfEmployees').innerText = employees.length;
    for(var i=0; i<employees.length; i++) {
        addEmployee(employees[i]);
    }
}

// start
init();
