function income(input) {
    let priceKgVegetables = input[0];
    let priceKgFruits = input[1];
    let KgVegetables = input[2];
    let KgFruits = input[3];

    let price = (priceKgVegetables * KgVegetables) + (priceKgFruits * KgFruits);
    let allPrice = price / 1.94;
    console.log(allPrice.toFixed(2));
}

income([0.194,19.4,10,10])