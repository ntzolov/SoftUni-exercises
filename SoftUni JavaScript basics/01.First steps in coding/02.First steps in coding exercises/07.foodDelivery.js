function price(input) {
    let chickenPrice = 10.35;
    let menuWithFish = 12.40;
    let vegeterianMenu = 8.15;

    let countChicken = Number(input[0]);
    let countMenuWithFish = Number(input[1]);
    let countVegeterianMenu = Number(input[2]);

    let price = countChicken * chickenPrice + countMenuWithFish * menuWithFish + countVegeterianMenu * vegeterianMenu;
    let desert = price * 0.20;
    let delivery = 2.50;
    let allPrice = price + desert + delivery;

    console.log(allPrice);
}

price(["2", "4", "3"])