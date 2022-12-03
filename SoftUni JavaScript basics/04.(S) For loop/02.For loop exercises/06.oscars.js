function oscars(input) {

    let nameActor = input[0];
    pointsFromAcademy = Number(input[1]);
    let countJury = Number(input[2]);
    currPoints = 0;
    let isNominee = false

    for (let i = 0; i < countJury * 2; i += 2) {

        let nameJury = input[i + 3];
        let pointsJury = Number(input[i + 4]);

        currPoints = nameJury.length * pointsJury / 2
        pointsFromAcademy += currPoints

        if (pointsFromAcademy > 1250.50) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`);
            isNominee = true
            break;
        }
        
    }

    if (pointsFromAcademy <= 1250.50) {
        console.log(`Sorry, ${nameActor} you need ${(1250.50 - pointsFromAcademy).toFixed(1)} more!`);
    }

}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

