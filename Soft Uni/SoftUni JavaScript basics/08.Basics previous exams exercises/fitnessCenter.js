function fitnessCenter(input) {

    let i = 0;
    let countVisitors = Number(input[i]);
    i++;

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    for (let j = 0; j < countVisitors; j++) {

        let activity = input[i];
        i++;

        if (activity === "Back") {
            back += 1;
        } else if (activity === "Chest") {
            chest += 1;
        } else if (activity === "Legs") {
            legs += 1;
        } else if (activity === "Abs") {
            abs += 1;
        } else if (activity === "Protein shake") {
            proteinShake += 1;
        } else if (activity === "Protein bar") {                    
            proteinBar += 1;
        } 
    }

    let workingOut = back + chest + legs + abs;
    let proteinBuy = proteinBar + proteinShake;

    console.log(`${back} - back\
    \n${chest} - chest\
    \n${legs} - legs\
    \n${abs} - abs\
    \n${proteinShake} - protein shake\
    \n${proteinBar} - protein bar\
    \n${(workingOut / countVisitors * 100).toFixed(2)}% - work out\
    \n${(proteinBuy / countVisitors * 100).toFixed(2)}% - protein`)

}

fitnessCenter([
    "10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs",
])
