function maidenParty(input) {

    
    let priceParty = Number(input[0]);
    let countLoveText = Number(input[1]);
    let countRose = Number(input[2]);
    let countKeyChain = Number(input[3]);
    let countCaricature = Number(input[4]);
    let countLuckSurprise = Number(input[5]);

    let price = (countLoveText * 0.60) + (countRose * 7.20) + (countKeyChain * 3.60) + (countCaricature * 18.20) + (countLuckSurprise * 22.00);
    if (countLoveText + countRose + countKeyChain + countCaricature + countLuckSurprise >= 25) {
        price *= 0.65;
    }
    price *= 0.90;
    
    let diff = Math.abs(price - priceParty);
    if(price >= priceParty) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
    


}

maidenParty([
    "40.8",
    "20",
    "25",
    "30",
    "50",
    "10",
])
