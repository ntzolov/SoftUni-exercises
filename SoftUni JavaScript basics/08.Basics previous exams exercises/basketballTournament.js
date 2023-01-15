function basketballTournament(input) {

    let i = 0;
    let nameTour = input[i];
    i++;
    let winsHome = 0;
    let totalGames = 0;
    
    while (true) {

        if (nameTour === "End of tournaments") {
            break;
        }

        let gamesPerTour = Number(input[i]);
        i++;

        for (let j = 1; j <= gamesPerTour; j++) {
            totalGames += 1;
            let pointsHome = Number(input[i]);
            i++;
            let pointsAway = Number(input[i]);
            i++;
            if (pointsHome > pointsAway) {
                winsHome += 1;
                console.log(`Game ${j} of tournament ${nameTour}: win with ${pointsHome - pointsAway} points.`);
                pointsHome = 0;
                pointsAway = 0;
            } else {
                console.log(`Game ${j} of tournament ${nameTour}: lost with ${pointsAway - pointsHome} points.`);
                pointsHome = 0;
                pointsAway = 0;
            }

        }

        nameTour = input[i];
        i++;
        
    }

    console.log(`${(winsHome / totalGames * 100).toFixed(2)}% matches win`);
    console.log(`${((100 - (winsHome / totalGames * 100)).toFixed(2))}% matches lost`);

}

basketballTournament([
    "Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments",
])