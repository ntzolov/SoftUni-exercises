function newHouse(input) {

    let typeFlower = input[0];
    countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let priceRose = 5.00;
    let priceDahlia = 3.80;
    let priceTulip = 2.80;
    let priceNarciss = 3.00;
    let priceGladiol = 2.50;

    let price = 0;

    if (typeFlower === "Roses") {
        price = countFlowers * priceRose
        if (countFlowers > 80) {
            price *= 0.90
        }
    } else if (typeFlower === "Dahlias") {
        price = countFlowers * priceDahlia
        if (countFlowers > 90) {
            price *= 0.85
        }
    } else if (typeFlower === "Tulips") {
        price = countFlowers * priceTulip
        if (countFlowers > 80) {
            price *= 0.85
        }
    } else if (typeFlower === "Narcissus") {
        price = countFlowers * priceNarciss
        if (countFlowers < 120) {
            price *= 1.15
        }
    } else if (typeFlower === "Gladiolus") {
        price = countFlowers * priceGladiol
        if (countFlowers < 80) {
            price *= 1.20
        }
    } 

    let diff = Math.abs(price - budget)

    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlower} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
    

}

newHouse(["Roses", "55", "250"])

// "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"