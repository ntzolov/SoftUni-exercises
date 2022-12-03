function series(input) {

    let i = 0;
    let budget = Number(input[i]);
    i++;
    let numberSeries = Number(input[i]);
    i++;

    let totalCost = 0;

    for (let j = 0; j < numberSeries; j++) {
        let nameSeries = input[i];
        i++;
        let priceSeries = Number(input[i]);
        i++;

        if (nameSeries === "Thrones") {
            totalCost += priceSeries * 0.50;
        } else if (nameSeries === "Lucifer") {
            totalCost += priceSeries * 0.60;
        } else if (nameSeries === "Protector") {
            totalCost += priceSeries * 0.70;
        } else if (nameSeries === "TotalDrama") {
            totalCost += priceSeries * 0.80;
        } else if (nameSeries === "Area") {
            totalCost += priceSeries * 0.90;
        } else {
            totalCost += priceSeries;
        }
    }

    if (budget >= totalCost) {
        console.log(`You bought all the series and left with ${(budget - totalCost).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(totalCost - budget).toFixed(2)} lv. more to buy the series!`);
    }

}

series([
    "10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2",
])