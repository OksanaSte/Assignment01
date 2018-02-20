/* eslint-env browser */
function getStudentStats(name) {
    var points = parseInt(prompt("Please enter " + name + "'s points."), 10);
    if (points < 0 || points > 100 || isNaN(points)) {
        alert("Please enter a valid value for " + name + ".");
        return getStudentStats(name);
    }
    else if (points >= 90) {
        grade = "A";
    }
    else if (points >= 80) {
        grade = "B";
    }
    else if (points >= 70) {
        grade = "C";
    }
    else if (points >= 60){
        grade = "D";
    }   
    else {
        grade = "F";
    }
    
    return {'name': name, 'points': points, 'grade': grade};
}

var Ursula = getStudentStats('Ursula'),
    Paul = getStudentStats('Paul'),
    Henry = getStudentStats('Henry'),
    Tabitha = getStudentStats('Tabitha'),
    Lucy = getStudentStats('Lucy');

var Average = (Ursula.points + Paul.points + Henry.points + Tabitha.points + Lucy.points ) / 5;
console.log("Student(s)        Grade \r\n" + 
            "----------------------------------------\r\n" +
            Ursula.name + "            " + Ursula.grade + "\r\n" +
            Paul.name + "              " + Paul.grade + "\r\n" +
            Henry.name + "             " + Henry.grade + "\r\n" +
            Tabitha.name + "           " + Tabitha.grade + "\r\n" +
            Lucy.name + "              " + Lucy.grade + "\r\n" +
            "----------------------------------------\r\n" +
            "Average points:   " + Average);