function cinema(input) {

    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let pricePremiere = 12.00;
    let priceNormal = 7.50;
    let discount = 5.00;
    let people = r * c
    let price = 0

    switch(type) {
        case "Premiere": price = people * pricePremiere; break;
        case "Normal": price = people * priceNormal; break;
        case "Discount": price = people * discount; break;
    }

    console.log(`${price.toFixed(2)} leva`);

}

cinema(["Premiere", "10", "12"])