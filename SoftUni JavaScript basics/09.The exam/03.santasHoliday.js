function santasHoliday(input) {

    let days = Number(input[0]);
    let nights = days - 1;
    let typeRoom = input[1];
    let feedback = input[2];
    let price = 0;

    if (typeRoom === "room for one person") {
        price += 18;

        if (days < 10) {
        } else if (days <= 15) {
        } else if (days > 15) {
        }
    } else if (typeRoom === "apartment") {
        price += 25;
        if (days < 10) {
            price *= 0.70;
        } else if (days <= 15) {
            price *= 0.65;
        } else if (days > 15) {
            price *= 0.50;
        }
    } else if (typeRoom === "president apartment") {
        price += 35;
        if (days < 10) {
            price *= 0.90;
        } else if (days <= 15) {
            price *= 0.85;
        } else if (days > 15) {
            price *= 0.80;
        }
    }

    if (feedback === "positive") {
        price *= 1.25;
    } else {
        price *= 0.90;
    }

    let finalPrice = nights * price;
    console.log(finalPrice.toFixed(2));
}

santasHoliday([
    "14",
    "apartment",
    "positive",
])
