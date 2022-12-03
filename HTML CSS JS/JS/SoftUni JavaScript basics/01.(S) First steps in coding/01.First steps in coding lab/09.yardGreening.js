function yardGreening(input) {

    let oneSqMeterPrice = 7.61;
    let sqMeters = Number(input[0]);
    let allPrice = sqMeters * oneSqMeterPrice;
    let discount = allPrice * 0.18;
    let allPriceAfterDiscount = allPrice - discount;
    console.log(`The final price is: ${allPriceAfterDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["150"])