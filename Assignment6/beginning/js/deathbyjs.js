/*eslint-env browser*/

//STEP 1

//STEP 2

//STEP 3

//STEP 4
var alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890';
var lengthOfHash = 8;
var hash = '';
for (var i = 0; i < lengthOfHash; i++) { 
    var randomIndex = Math.floor(Math.random() * alphabet.length); 
    var randomLetter = alphabet[randomIndex]; 
    if (Math.floor(Math.random() * 2)) {
        randomLetter = randomLetter.toUpperCase();
    }
    hash += randomLetter;
}

//STEP 5
function findLargeCountry() {
    // ask user Countries
    var countries = prompt("Enter several country names separated by coma and we count the largest one!");
    countries = countries.split(',');
    
    // ask again if we have invalid input
    if (!countries.length) {
        return findLargeCountry();
    }

    var theLargestCountry = countries[0];

    for (var i=0; i<countries.length; i++) {
        if (countries[i].length > theLargestCountry.length) {
            theLargestCountry = countries[i];
        }
    }
    console.log('the largest country is --', theLargestCountry)
}
findLargeCountry();
