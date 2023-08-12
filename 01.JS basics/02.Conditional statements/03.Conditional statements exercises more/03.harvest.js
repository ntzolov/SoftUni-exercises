function harvest(input) {

    let vineyardSqMet = Number(input[0]);
    let grapesPerSqMet = Number(input[1]);
    let neededLitersVine = Number(input[2]);
    let numWorkers = Number(input[3]);

    let kilogramsGrapes = (vineyardSqMet * 0.4) * grapesPerSqMet;
    let litersVine = kilogramsGrapes / 2.5;
    let diff = Math.abs(litersVine - neededLitersVine)

    if (litersVine < neededLitersVine) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(litersVine)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(diff / numWorkers)} liters per person.`);
    }

}

harvest([
    "650",
    "2",
    "175",
    "3",
])