function careOfPuppy(input) {

    let i = 0;
    let boughtPuppyFoodInGrams = Number(input[0]) * 1000;
    i++;

    let command = input[i];
    i++;

    while (command !== "Adopted") {
        boughtPuppyFoodInGrams -= Number(command);

        command = input[i];
        i++;

    }

    if (boughtPuppyFoodInGrams >= 0) {
        console.log(`Food is enough! Leftovers: ${boughtPuppyFoodInGrams} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(boughtPuppyFoodInGrams)} grams more.`);
    }

}

careOfPuppy([
    "4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted",
])