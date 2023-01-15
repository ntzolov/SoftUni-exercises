function flowers(input) {

    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];
    let price = 0;

    if (season === "Spring" || season === "Summer") {
        price += (chrysanthemums * 2) + (roses * 4.10) + (tulips * 2.50);
    } else if (season === "Autumn" || season === "Winter") {
        price += (chrysanthemums * 3.75) + (roses * 4.50) + (tulips * 4.15);
    }

    if (isHoliday === "Y") {
        price *= 1.15;
    }

    if (season === "Spring" && tulips > 7) {
        price *= 0.95;
    }

    if (season === "Winter" && roses >= 10) {
        price *= 0.90;
    }

    if (chrysanthemums + roses + tulips > 20) {
        price *= 0.80;
    }

    price += 2;

    console.log(price.toFixed(2));

}

flowers([
    "2",
    "4",
    "8",
    "Spring",
    "Y",
])