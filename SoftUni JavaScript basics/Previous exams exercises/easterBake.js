function easterBake(input) {

    let i = 0;
    let numberEasterBreads = Number(input[i]);
    i++;

    let maxSugar = 0;
    let maxFlour = 0;
    let totalSugar = 0;
    let totalFlour = 0;

    for (let j = 0; j < numberEasterBreads; j++) {

        let spentSugar = Number(input[i]);
        i++;
        if (spentSugar > maxSugar) {
            maxSugar = spentSugar;
        }
        totalSugar += spentSugar

        let spentFlour = Number(input[i]);
        i++;
        if (spentFlour > maxFlour) {
            maxFlour = spentFlour;
        }
        totalFlour += spentFlour
    }

    console.log(`Sugar: ${Math.ceil(totalSugar / 950)}`);
    console.log(`Flour: ${Math.ceil(totalFlour / 750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}

easterBake([
    "3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380",
])