function tournamentForChristmas(input) {

    let i = 0;
    let numberDays = Number(input[i]);
    i++;
    let totalMoney = 0;
    let winsForTheDay = 0;
    let losesForTheDay = 0;
    let winsForTheTour = 0;
    let losesForTheTour = 0;
    let daysCount = 0;
    let = moneyForTheDay = 0;

    while (true) {

        if (daysCount === numberDays) {
            break;
        }

        let sport = input[i];
        i++;

        if (sport === "Finish") {
            if (winsForTheDay > losesForTheDay) {
                winsForTheTour += 1;
                moneyForTheDay *= 1.10;
                totalMoney += moneyForTheDay;
                moneyForTheDay = 0;
            } else if (winsForTheDay < losesForTheDay) {
                losesForTheTour += 1;
                totalMoney += moneyForTheDay;
                moneyForTheDay = 0;
            } else if (winsForTheDay = losesForTheDay) {
                totalMoney += moneyForTheDay;
                moneyForTheDay = 0;
            }
            
            winsForTheDay = 0;
            losesForTheDay = 0;
            daysCount += 1;
            continue;
        }

        let result = input[i];
        i++;

        if (result === "win") {
            winsForTheDay += 1;
            moneyForTheDay += 20;
        } else if (result === "lose") {
            losesForTheDay += 1;
        }

    }

    if (winsForTheTour > losesForTheTour) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }



}

tournamentForChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish",
])