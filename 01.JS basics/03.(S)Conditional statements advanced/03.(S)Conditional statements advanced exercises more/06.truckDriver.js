function truckDriver(input) {
    let season = input[0];
    let kilometersMonthly = Number(input[1]);
    let incomeKilometer = 0;

    if (kilometersMonthly <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                incomeKilometer += 0.75;
                break;
            case "Summer":
                incomeKilometer += 0.90;
                break;
            case "Winter":
                incomeKilometer += 1.05;
                break;    
        }
    } else if (kilometersMonthly <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                incomeKilometer += 0.95;
                break;
            case "Summer":
                incomeKilometer += 1.10;
                break;
            case "Winter":
                incomeKilometer += 1.25;
                break;    
        }
    } else if (kilometersMonthly <= 20000) {
        incomeKilometer += 1.45;
    }

    let allIncome = incomeKilometer * kilometersMonthly * 4 * 0.90

    console.log(allIncome.toFixed(2));

}
truckDriver([
    "Summer",
    "3455",
])