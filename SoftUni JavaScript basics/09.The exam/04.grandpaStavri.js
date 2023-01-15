function grandpaStavri(input) {

    let i = 0;
    let days = Number(input[i]);
    i++;
    let allRakiaLitres = 0;
    let sumDegreesForLitre = 0;

    for (let j = 0; j < days; j++) {
        let quantityRakia = Number(input[i]);
        i++;
        let degreesRakia = Number(input[i]);
        i++;
        allRakiaLitres += quantityRakia;
        sumDegreesForLitre += quantityRakia * degreesRakia;
        
    }

    let averageDegrees = sumDegreesForLitre / allRakiaLitres
    console.log(`Liter: ${allRakiaLitres.toFixed(2)}`);
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);
    if (averageDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if (averageDegrees < 42) {
        console.log("Super!");
    } else if (averageDegrees > 42) {
        console.log("Dilution with distilled water!");
    }
}

grandpaStavri([
    "3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36",
])

