function toyShop(input) {

    let priceTravel = Number(input[0]);
    let countPuzzles = Number(input[1]);
    let countTalkDoll = Number(input[2]);
    let countTeddyBear = Number(input[3]);
    let countMinions = Number(input[4]);
    let countTrucks = Number(input[5]);

    let pricePuzzle = 2.60;
    let priceTalkDoll = 3.00;
    let priceTeddyBear = 4.10;
    let priceMinions = 8.20;
    let priceTrucks = 2.00;

    let price = countPuzzles * pricePuzzle + countTalkDoll * priceTalkDoll + countTeddyBear * priceTeddyBear +
        countMinions * priceMinions + countTrucks * priceTrucks;

    if ((countMinions + countPuzzles + countTalkDoll + countTeddyBear + countTrucks) >= 50) {
        price *= 0.75;
    }

    price *= 0.90;

    let diff = Math.abs(price - priceTravel);

    if (price >= priceTravel) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }


}

toyShop(["40.8", "20", "25", "30", "50", "10"])