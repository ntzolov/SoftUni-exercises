function dishwasher(input) {

    let mlDetergent = Math.round(Number(input[0]) * 750);
    let countWashing = 0;

    let totalDishes = 0;
    let totalTendjeri = 0;

    let i = 1;
    while (true) {

        let countCutlery = input[i];
        i++;

        if (countCutlery === "End") {
            console.log(`Detergent was enough!`);
            console.log(`${totalDishes} dishes and ${totalTendjeri} pots were washed.`);
            console.log(`Leftover detergent ${mlDetergent} ml.`);

            break;
        }

        countWashing++;

        if (countWashing % 3 === 0) {
            mlDetergent -= Number(countCutlery) * 15
            totalTendjeri += Number(countCutlery)
        } else {
            mlDetergent -= Number(countCutlery) * 5
            totalDishes += Number(countCutlery)
        }

        if (mlDetergent < 0) {
            console.log(`Not enough detergent, ${Math.abs(mlDetergent)} ml. more necessary!`);
            break;
        }

    }

}

dishwasher([
    "0",
    "0",
    "0",
    "49",
    "12",
])