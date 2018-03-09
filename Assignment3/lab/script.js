/*eslint-env browser*/

var monthlyRate, months, futureValue, monthlyInterest, yearlyRate, investment, years, i, output, calculate, rate;

investment = document.getElementById("investment");
rate = document.getElementById("interest");
years = document.getElementById("years");
output = document.getElementById("futureValue");
calculate = document.getElementById("calculate");

function calculateInvestment(investment, rate, years) {
    "use strict";
    monthlyRate = rate / 12 / 100;
    months = years * 12;
    futureValue = investment;
    
    for (i = 1; i < months; i += 1) {
        monthlyInterest = futureValue * monthlyRate;
        futureValue += monthlyInterest;
    }
    return futureValue.toFixed(2);
}

calculate.addEventListener("click", function () {
                "use strict";
                investment = parseFloat(investment.value);
                rate = parseFloat(rate.value);
                years = parseFloat(years.value, 10);
                futureValue = calculateInvestment(investment, rate, years);
                output.innerHTML = "Future value: $" + futureValue;
});

                           