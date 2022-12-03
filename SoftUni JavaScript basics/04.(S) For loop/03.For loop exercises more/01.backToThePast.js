function backToThePast(input) {

    let budget = Number(input[0]);
    let yearToLive = Number(input[1]);
    let ivanchoAge = 18;

    for (let i = 1800; i <= yearToLive; i++) {
        if (i % 2 === 0) {
            budget -= 12000;
        } else {
            budget -= 12000 + (50 * ivanchoAge);
        }
        ivanchoAge += 1;
    }

    if (budget >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${budget.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(budget).toFixed(2)} dollars to survive.`);
    }
}

backToThePast([
    "50000",
    "1802",
])
