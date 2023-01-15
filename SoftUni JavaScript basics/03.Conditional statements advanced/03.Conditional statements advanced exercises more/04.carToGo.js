function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let type = "";
    let carType = "";
    let price = 0;

    if (budget <= 100) {
        type = "Economy class";
        if (season === "Summer") {
            carType = "Cabrio";
            price = budget * 0.35;
        } else if (season === "Winter") {
            carType = "Jeep";
            price = budget * 0.65;
        }
    } else if (budget <= 500) {
        type = "Compact class";
        if (season === "Summer") {
            carType = "Cabrio";
            price = budget * 0.45;
        } else if (season === "Winter") {
            carType = "Jeep";
            price = budget * 0.80;
        }
    } else if (budget > 500) {
        type = "Luxury class";
        carType = "Jeep";
        price = budget * 0.90;
    }

    console.log(`${type}`);
    console.log(`${carType} - ${price.toFixed(2)}`);

}

carToGo([
    "450",
    "Summer",
])