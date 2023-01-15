function pets(input) {

    let days = Number(input[0]);
    let leftFood = Number(input[1]);
    let dailyFoodDog = Number(input[2]);
    let dailyFoodCat = Number(input[3]);
    let dailyFoodTurtle = Number(input[4] / 1000);

    let allEatenFood = (days * dailyFoodDog) + (days * dailyFoodCat) + (days * dailyFoodTurtle);

    let diff = Math.abs(leftFood - allEatenFood);

    if (allEatenFood <= leftFood) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }

}

pets([
    "2",
    "10",
    "1",
    "1",
    "1200",
])