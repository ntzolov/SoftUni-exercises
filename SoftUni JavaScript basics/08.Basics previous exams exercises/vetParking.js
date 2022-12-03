function vetParking(input) {

    let i = 0;
    let countDays = Number(input[i]);
    i++;
    let countHoursForADay = Number(input[i]);
    i++;

    let dailyTax = 0;
    let totalTax = 0;

    for (let j = 1; j <= countDays; j++) {
        for (let k = 1; k <= countHoursForADay; k++) {
            if (j % 2 === 0) {
                if (k % 2 === 1) {
                    dailyTax += 2.50;
                } else {
                    dailyTax += 1.00;
                }
            } else {
                if (k % 2 === 0) {
                    dailyTax += 1.25;
                } else {
                    dailyTax += 1.00;
                }
            }
        }

        console.log(`Day: ${j} - ${dailyTax.toFixed(2)} leva`);
        totalTax += dailyTax;
        dailyTax = 0;
        
    }

    console.log(`Total: ${totalTax.toFixed(2)} leva`);

}

vetParking([
    "2",
    "5",
])