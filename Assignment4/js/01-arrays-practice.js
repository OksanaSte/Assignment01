/*eslint-env browser*/
//STEP 1
/*var movies = ["Snatch", "Friends", "Back to the Future", "Startrack", "Oceans 11"];
console.log(movies[1]);*/

//STEP 2
/*var movies2 = new Array(5);
movies2[0] = "Snatch";
movies2[1] = "Friends";
movies2[2] = "Back to the Future";
movies2[3] = "Startrack";
movies2[4] = "Oceans 11";
console.log(movies2[0]);*/

//STEP 3
/*var movies3 = new Array(5);
movies3[0] = "Snatch";
movies3[1] = "Friends";
movies3[2] = "Back to the Future";
movies3[3] = "Startrack";
movies3[4] = "Oceans 11";
movies3 = movies3.push("Terminator");
console.log(movies3);*/

//STEP 4
/*var movies4 = [];
movies4[0] = "Snatch";
movies4[1] = "Friends";
movies4[2] = "Back to the Future";
movies4[3] = "Startrack";
movies4[4] = "Oceans 11";
delete movies4[0];
console.log(movies4);*/

//STEP 5
/*var index;
var movies5 = [];
movies5[0] = "Snatch";
movies5[1] = "Friends";
movies5[2] = "Back to the Future";
movies5[3] = "Startrack";
movies5[4] = "Oceans 11";
movies5[5] = "Terminator";
movies5[6] = "Scary movie";
for (index in movies5) {
    console.log(movies5[index]);
}*/
//STEP 6
/*var i;
var movies6 = [];
movies6[0] = "Snatch";
movies6[1] = "Friends";
movies6[2] = "Back to the Future";
movies6[3] = "Startrack";
movies6[4] = "Oceans 11";
movies6[5] = "Terminator";
movies6[6] = "Scary movie";
for (i = 0; i < movies6.length; i += 1) {
    console.log(movies6[i]);
}*/
//STEP 7
/*var movies7 = [];
movies7[0] = "Snatch";
movies7[1] = "Friends";
movies7[2] = "Back to the Future";
movies7[3] = "Startrack";
movies7[4] = "Oceans 11";
movies7[5] = "Terminator";
movies7[6] = "Scary movie";
for (i = 0; i < movies7.length; i += 1) {
    console.log(movies7.sort());
}*/
//should it display 7 times?
//STEP 8
/*var index;
var movies8 = [];
movies8[0] = "Snatch";
movies8[1] = "Friends";
movies8[2] = "Back to the Future";
movies8[3] = "Startrack";
movies8[4] = "Oceans 11";
movies8[5] = "Terminator";
movies8[6] = "Scary movie";
var leastFavMovies = [];
leastFavMovies[0] = "American Pie";
leastFavMovies[1] = "Mummy";
leastFavMovies[2] = "Kill Bill";
console.log("Movies I like:");
for (index in movies8) {
console.log(movies8[index]);
}
console.log("\nMovies I regret watching:");
for (index in leastFavMovies) {
console.log(leastFavMovies[index]);
}*/
//STEP 9
/*
var movies9 = [];
movies9[0] = "Snatch";
movies9[1] = "Friends";
movies9[2] = "Back to the Future";
movies9[3] = "Startrack";
movies9[4] = "Oceans 11";
movies9[5] = "Terminator";
movies9[6] = "Scary movie";
var leastFavMovies1 = [];
leastFavMovies1[0] = "American Pie";
leastFavMovies1[1] = "Mummy";
leastFavMovies1[2] = "Kill Bill";
var allMovies = [];
allMovies = movies9.concat(leastFavMovies1);
console.log(allMovies.sort().reverse());
*/

//STEP 10
/*
var movies10 = [];
movies10[0] = "Snatch";
movies10[1] = "Friends";
movies10[2] = "Back to the Future";
movies10[3] = "Startrack";
movies10[4] = "Oceans 11";
movies10[5] = "Terminator";
movies10[6] = "Scary movie";
var leastFavMovies2 = [];
leastFavMovies2[0] = "American Pie";
leastFavMovies2[1] = "Mummy";
leastFavMovies2[2] = "Kill Bill";
var allMovies2 = [];
allMovies2 = movies10.concat(leastFavMovies2);
console.log(allMovies2.sort().reverse().pop());
*/

//STEP 11

/*
var movies11 = [];
movies11[0] = "Snatch";
movies11[1] = "Friends";
movies11[2] = "Back to the Future";
movies11[3] = "Startrack";
movies11[4] = "Oceans 11";
movies11[5] = "Terminator";
movies11[6] = "Scary movie";
var leastFavMovies3 = [];
leastFavMovies3[0] = "American Pie";
leastFavMovies3[1] = "Mummy";
leastFavMovies3[2] = "Kill Bill";
var allMovies3 = [];
allMovies3 = movies11.concat(leastFavMovies3);
console.log(allMovies3.shift());
*/

//STEP 12
/*var movies11 = [];
movies11[0] = "Snatch";
movies11[1] = "Friends";
movies11[2] = "Back to the Future";
movies11[3] = "Startrack";
movies11[4] = "Oceans 11";
movies11[5] = "Terminator";
movies11[6] = "Scary movie";
var leastFavMovies3 = [];
leastFavMovies3[0] = "American Pie";
leastFavMovies3[1] = "Mummy";
leastFavMovies3[2] = "Kill Bill";
var allMovies3 = [];
allMovies3 = movies11.concat(leastFavMovies3);
console.log(allMovies3.indexOf("American Pie") + " " + allMovies3.indexOf("Mummy") + " " +allMovies3.indexOf("Kill Bill"));
allMovies3.splice(7, 3, "N", "P", "O");
console.log(allMovies3);*/

//STEP 13
/*var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["id"] = 4236;
employee2["name"] = "Oksana Stetsenko";
employee2["title"] = "QA";
employee2["department"] = "Assurance";
employee2["isCurrent"] = true;
var employees = [employee1, employee2];
console.log(employees[1].name);*/

//STEP 14
/*var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["id"] = 4236;
employee2["name"] = "Oksana Stetsenko";
employee2["title"] = "QA";
employee2["department"] = "Assurance";
employee2["isCurrent"] = true;
var employees = [employee1, employee2];
var i;
for (i = 0; i < employees.length; i += 1) {
    window.console.log(employees[i].name);
}*/
//STEP 15
/*var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["id"] = 4236;
employee2["name"] = "Oksana Stetsenko";
employee2["title"] = "QA";
employee2["department"] = "Assurance";
employee2["isCurrent"] = true;
var employee3 = [];
employee3["id"] = 4237;
employee3["name"] = "Ellina Lapina";
employee3["title"] = "Designer";
employee3["department"] = "Marketing";
employee3["isCurrent"] = false;
var employees = [employee1, employee2, employee3];
var i;
for (i = 0; i < employees.length; i += 1) {
    if (employees[i].isCurrent == true) {
    window.console.log(employees[i].name);
        }
}*/
//STEP 16
/*var movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
movies.forEach(function (movies) {
    "use strict"; 
var movieName = movies.filter(function (item) {
    return typeof item === "string";
});
    window.console.log(movieName);
    });*/
    
//STEP 17

//STEP 18

//STEP 19

//STEP 20