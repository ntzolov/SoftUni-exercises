function floweShop(input) {

    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let priceGift = Number(input[4]);

    let allIncome = (magnolias * 3.25) + (hyacinths * 4) + (roses * 3.50) + (cactuses * 8);
    let allIncomeAfterTaxex = allIncome * 0.95;

    if (allIncomeAfterTaxex >= priceGift) {
        console.log(`She is left with ${Math.floor(allIncomeAfterTaxex - priceGift)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(priceGift - allIncomeAfterTaxex)} leva.`);
    }

}

floweShop([
    "2",
    "3",
    "5",
    "1",
    "50",
])