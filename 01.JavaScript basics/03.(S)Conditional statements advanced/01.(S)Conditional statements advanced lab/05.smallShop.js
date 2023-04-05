function price(input) {

    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let priceOfProduct = 0

    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee": priceOfProduct = 0.50; break;
                case "water": priceOfProduct = 0.80; break;
                case "beer": priceOfProduct = 1.20; break;
                case "sweets": priceOfProduct = 1.45; break;
                case "peanuts": priceOfProduct = 1.60; break;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee": priceOfProduct = 0.40; break;
                case "water": priceOfProduct = 0.70; break;
                case "beer": priceOfProduct = 1.15; break;
                case "sweets": priceOfProduct = 1.30; break;
                case "peanuts": priceOfProduct = 1.50; break;
                default: break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee": priceOfProduct = 0.45; break;
                case "water": priceOfProduct = 0.70; break;
                case "beer": priceOfProduct = 1.10; break;
                case "sweets": priceOfProduct = 1.35; break;
                case "peanuts": priceOfProduct = 1.55; break;
                default: break;
            }
            break;
        }

    let price = priceOfProduct * quantity
    console.log(price);

}

price(["peanuts",
"Plovdiv",
"1"])
