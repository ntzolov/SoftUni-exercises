function shopping(input) {

    let budget = Number(input[0]);
    let countVideoCard = Number(input[1]);
    let countProcessors = Number(input[2]);
    let countRam = Number(input[3]);

    let priceVideoCard = 250;
    let priceProcessor = (priceVideoCard * countVideoCard) * 0.35;
    let priceRam = (priceVideoCard * countVideoCard) * 0.10;

    let price = countVideoCard * priceVideoCard + countProcessors * priceProcessor + countRam * priceRam;

    if (countVideoCard > countProcessors) {
        price *= 0.85;
    }

    if (price <= budget) {
        console.log(`You have ${(budget - price).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva more!`)
    }

}

shopping(["900", "2", "1", "3"])