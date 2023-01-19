function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let people = Number(input[2]);

    let price = 0;

    if (season === "Spring") {
        price = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        price = 4200
    } else if (season === "Winter") {
        price = 2600
    }

    if (people <= 6) {
        price *= 0.90
    } else if (people >= 7 && people <= 11) {
        price *= 0.85
    } else if (people >= 12) {
        price *= 0.75
    }

    if ((season === "Spring" || season === "Summer" || season === "Winter") && people % 2 === 0) {
        price *= 0.95
    }

    let diff = Math.abs(price - budget)

    if (price <= budget) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}

fishingBoat(["3000", "Summer", "11"])