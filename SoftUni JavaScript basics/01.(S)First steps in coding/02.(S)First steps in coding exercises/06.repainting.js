function moneyExpenses(input) {
    let nylonPrice = 1.50;
    let paint = 14.50;
    let thinner = 5.00;

    let countNylon = Number(input[0]) + 2;
    let countPaint = Number(input[1]) * 1.1;
    let countThinner = Number(input[2]);
    let hoursToWork = Number(input[3]);

    let allPrice = nylonPrice * countNylon + paint * countPaint + thinner * countThinner + 0.40;
    let allPriceWithWork = allPrice * 0.3 * hoursToWork + allPrice
    console.log(allPriceWithWork);


}

moneyExpenses(["10", "11", "4", "8"])