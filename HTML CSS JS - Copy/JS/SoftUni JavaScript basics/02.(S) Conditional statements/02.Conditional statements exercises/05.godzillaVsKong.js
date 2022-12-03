function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let countStatists = Number(input[1]);
    let priceClothesForOne = Number(input[2]);

    let priceDecor = budget * 0.10;

    if (countStatists > 150) {
        priceClothesForOne *= 0.90;
    }

    let price = priceDecor + (countStatists * priceClothesForOne);
    let diff = Math.abs(price - budget);

    if (price > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else if (price <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["20000", "120", "55.5"])