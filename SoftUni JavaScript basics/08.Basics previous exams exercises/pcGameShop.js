function pcGameShop(input) {

    let i = 0;
    let countSoldGames = Number(input[i]);
    i++;

    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;


    for (let j = 0; j < countSoldGames; j++) {
        let gameName = input[i];
        i++;

        if (gameName === "Hearthstone") {
            hearthstone += 1;
        } else if (gameName === "Fornite") {
            fornite += 1;
        } else if (gameName === "Overwatch") {
            overwatch += 1;
        } else {
            others += 1;
        }

    }

    console.log(`Hearthstone - ${(hearthstone / countSoldGames * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(fornite / countSoldGames * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatch / countSoldGames * 100).toFixed(2)}%`);
    console.log(`Others - ${(others / countSoldGames * 100).toFixed(2)}%`);

}

pcGameShop([
    "4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike",
])

// "Hearthstone - {процент продажби на Hearthstone}%"
// 	"Fornite - {процент продажби на Fornite}%"
// 	"Overwatch - {процент продажби на Overwatch}%"
