function happyCatParking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);
    let currPrice = 0;
    let price = 0;

    for (let i = 1; i <= days; i++) {
        for (let j = 1; j <= hours; j++) {
            if (i % 2 === 1) {
                if (j % 2 === 0) {
                    currPrice += 1.25;
                } else {
                    currPrice += 1;
                }
            } else if (i % 2 === 0) {
                if(j % 2 === 1) {
                    currPrice += 2.50;
                } else {
                    currPrice += 1;
                }
            }
        }
        console.log(`Day: ${i} - ${currPrice.toFixed(2)} leva`);
        price += currPrice;
        currPrice = 0;
    }

    console.log(`Total: ${price.toFixed(2)} leva`);

}

happyCatParking([
    "2",
    "5",
])