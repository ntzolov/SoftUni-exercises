function bitcoinMining(array) {
    let currBitcoins = 0;
    let bitcoins = 0;
    let dayFirstBuy = '';
    let money = 0;
    let day = 0;
    let index = 0;
    let priceOfBitcoin = 11949.16;
    for (let i = 1; i <= array.length; i++) {
        day += 1;
        let goldFromShift = Number(array[index]);
        index++;
        if (i % 3 === 0) {
            goldFromShift *= 0.70;
        }
        money += goldFromShift * 67.51;
        if (money > priceOfBitcoin) {
            currBitcoins += Math.floor(money / priceOfBitcoin);
            money -= currBitcoins * priceOfBitcoin;
            if (bitcoins === 0) {
                dayFirstBuy = `Day of the first purchased bitcoin: ${day}`
            }
            bitcoins += currBitcoins;
            currBitcoins = 0;
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(dayFirstBuy);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300])