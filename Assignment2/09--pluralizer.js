/* eslint-env browser */
var noun = window.prompt("Who lives on a farm?");
var number = parseInt(window.prompt("How many of them are there?"), 10);
if (number === 1) {
    document.write("There is 1" + noun + " on the farm.") 
}
else if (number <= 0) {
     document.write("Please enter a valid number.")    
}
else if (number > 0 && noun === "mouse"){
     document.write("There are " + number + " mice on the farm.")
         }
else if (number > 0 && noun === "goose"){
     document.write("There are " + number + " geese on the farm.")
         }        
else if (number > 0 && noun === "deer"){
     document.write("There are " + number + " " + noun + " on the farm.")
         }   
else {
     document.write("There are " + number + noun + "s on the farm.")
}