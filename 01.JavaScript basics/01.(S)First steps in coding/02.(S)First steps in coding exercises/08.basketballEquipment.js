function neededMoney(input) {
    let yearlyTax = Number(input[0]);

    let snickers = yearlyTax * 0.60;
    let equip = snickers * 0.80;
    let ball = equip / 4;
    let accesories = ball / 5;

    let allPrice = yearlyTax + snickers + equip + ball + accesories;
    console.log(allPrice);
}

neededMoney(["365"])