function fuelTankTwo(input) {

    let fuelType = input[0];
    let fuelLiters = Number(input[1]);
    let clubCard = input[2];
    let price = 0;

    if (fuelType === "Diesel") {
        price += fuelLiters * 2.33;
        if (clubCard === "Yes") {
            price -= fuelLiters * 0.12;
        }
    } else if (fuelType === "Gas") {
        price += fuelLiters * 0.93;
        if (clubCard === "Yes") {
            price -= fuelLiters * 0.08;
        }
    } else if (fuelType === "Gasoline") {
        price += fuelLiters * 2.22;
        if (clubCard === "Yes") {
            price -= fuelLiters * 0.18;
        }
    }

    if (fuelLiters >= 20 && fuelLiters <= 25) {
        price *= 0.92;
    } else if (fuelLiters > 25) {
        price *= 0.90;
    }

    console.log(`${price.toFixed(2)} lv.`);
}

fuelTankTwo([
    "Gas",
    "30",
    "Yes",
])