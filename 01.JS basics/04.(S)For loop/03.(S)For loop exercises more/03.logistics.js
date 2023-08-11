function logistics(input) {

    let cargoMicrobus = 0;
    let cargoTruck = 0;
    let cargoTrain = 0;
    let numberCargos = Number(input[0]);
    let i = 1;

    for (let j = 0; j < numberCargos; j++) {
        let currCargo = Number(input[i]);
        i++;

        if (currCargo <= 3) {
            cargoMicrobus += currCargo;
        } else if (currCargo >= 4 && currCargo <= 11) {
            cargoTruck += currCargo;
        } else if (currCargo >= 12) {
            cargoTrain += currCargo;
        }
    }

    let allPrice = (cargoMicrobus * 200) + (cargoTruck * 175) + (cargoTrain * 120);
    let averagePrice = allPrice / (cargoTrain + cargoTruck + cargoMicrobus);
    let cargoTotal = cargoMicrobus + cargoTruck + cargoTrain;

    console.log(`${averagePrice.toFixed(2)}`);
    console.log(`${(cargoMicrobus / cargoTotal * 100).toFixed(2)}%`);
    console.log(`${(cargoTruck / cargoTotal * 100).toFixed(2)}%`);
    console.log(`${(cargoTrain / cargoTotal * 100).toFixed(2)}%`);

}

logistics([
    "4",
    "1",
    "5",
    "16",
    "3",
])