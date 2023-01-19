function cleverLilly(input) {

    let ageLilly = Number(input[0]);
    let washerMachinePrice = Number(input[1]);
    let priceOfAToy = Number(input[2]);

    let countToys = 0;
    let countMoney = 0;
    let moneyToGet = 10;

    for (let i = 1; i <= ageLilly; i++) {

        if (i % 2 === 0) {
            countMoney += moneyToGet - 1;
            moneyToGet += 10;
        } else if (i % 2 === 1) {
            countToys++
        }
    }

    countMoney += (countToys * priceOfAToy);

    if (countMoney >= washerMachinePrice) {
        console.log(`Yes! ${(countMoney - washerMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerMachinePrice - countMoney).toFixed(2)}`);
    }
}

cleverLilly(["21", "1570.98", "3"])