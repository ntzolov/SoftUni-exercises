function easterCompetition(input) {

    let i = 0;
    let numberOfEasterBreads = Number(input[i]);
    i++;

    let currNameChef = "";
    let currPointsChef = 0;

    let winnerChef = "";
    let winnerPoints = 0;

    for (let j = 0; j < numberOfEasterBreads; j++) {

        let nameChef = input[i];
        i++;
        currNameChef = nameChef
        currPointsChef = 0;

        while (true) {

            nameChef = input[i];
            i++;

            if (nameChef === "Stop") {
                console.log(`${currNameChef} has ${currPointsChef} points.`);
                if (currPointsChef > winnerPoints) {
                    winnerChef = currNameChef;
                    winnerPoints = currPointsChef;
                    console.log(`${currNameChef} is the new number 1!`);
                }

                break;
            }

            currPointsChef += Number(nameChef);

        }
    }
    console.log(`${winnerChef} won competition with ${winnerPoints} points!`);
}

easterCompetition([
    "3",
    "Chef Manchev",
    "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop",
])