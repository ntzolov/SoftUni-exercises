function vacation(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let type = "";
    let place = "";
    let price = 0;

    if (budget <= 1000) {
        type = "Camp";
        if (season === "Summer") {
            place = "Alaska";
            price = budget * 0.65;
        } else if (season === "Winter") {
            place = "Morocco";
            price = budget * 0.45;
        }
    } else if (budget <= 3000) {
        type = "Hut";
        if (season === "Summer") {
            place = "Alaska";
            price = budget * 0.80;
        } else if (season === "Winter") {
            place = "Morocco";
            price = budget * 0.60;
        }
    } else if (budget > 3000) {
        type = "Hotel";
        if (season === "Summer") {
            place = "Alaska";
            price = budget * 0.90;
        } else if (season === "Winter") {
            place = "Morocco";
            price = budget * 0.90;
        }
    } 

    console.log(`${place} - ${type} - ${price.toFixed(2)}`);

}

vacation([
    "800",
    "Summer",
])