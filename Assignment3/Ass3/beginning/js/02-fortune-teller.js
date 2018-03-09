/*eslint-env browser*/

function tellFortune(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    document.write("You will be a " +  jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.<br/>");   
}

var options = [
    {'numberOfChildren': 2, 'partnerName': 'John', 'geographicLocation': 'Ohio', 'jobTitle': 'Manager'},
    {'numberOfChildren': 3, 'partnerName': 'Robert', 'geographicLocation': 'LA', 'jobTitle': 'CEO'}, 
    {'numberOfChildren': 1, 'partnerName': 'David', 'geographicLocation': 'Miami', 'jobTitle': 'Janitor'}
];
for (var i in options) {
    tellFortune(options[i].numberOfChildren, options[i].partnerName, options[i].geographicLocation, options[i].jobTitle);
}
