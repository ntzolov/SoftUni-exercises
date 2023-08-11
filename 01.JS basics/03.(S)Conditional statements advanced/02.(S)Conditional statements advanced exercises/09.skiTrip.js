function skiTrip(input) {

    let days = Number(input[0]);
    let type = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let price = 0;
    

    if (type === "room for one person") {
        price = 18.00

    } else if (type === "apartment") {
        price = 25.00

        if (days < 10) {
            price *= 0.70
        } else if (days <= 15) {
            price *= 0.65
        } else if (days > 15) {
            price *= 0.50
        }
    } else if (type === "president apartment") {
        price = 35.00

        if (days < 10) {
            price *= 0.90
        } else if (days <= 15) {
            price *= 0.85
        } else if (days > 15) {
            price *= 0.80
        }
    }

    if (feedback === "positive") {
        price *= 1.25
    } else if (feedback === "negative") {
        price *= 0.90
    }

    let allPrice = nights * price
    console.log(`${allPrice.toFixed(2)}`);

}

skiTrip(["14", "apartment", "positive"])