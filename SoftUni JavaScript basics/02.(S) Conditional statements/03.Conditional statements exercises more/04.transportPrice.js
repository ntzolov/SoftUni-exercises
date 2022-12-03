function transport(input) {

    let kilometers = Number(input[0]);
    let dayOrNight = input[1];
    let price = 0;

    if (kilometers < 20) {
        price += 0.70;
        switch (dayOrNight) {
            case "day":
                price += kilometers * 0.79;
                break;
            case "night":
                price += kilometers * 0.90;
                break;
        }
    } else if (kilometers < 100) {
        price += kilometers * 0.09;
    } else if (kilometers >= 100) {
        price += kilometers * 0.06;
    }

    console.log(price.toFixed(2));

}

transport([
    "5",
    "day",
])