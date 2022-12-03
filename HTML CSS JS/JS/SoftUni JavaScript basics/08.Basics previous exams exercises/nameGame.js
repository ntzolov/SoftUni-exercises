function nameGame(input) {

    let winner = "";
    let winnerPoints = 0;

    let currPlayer = "";
    let currPlayerPoints = 0;

    let i = 0;
    let namePlayer = input[i];
    i++;
    currPlayer = namePlayer;
    while (namePlayer !== "Stop") {

        for (let j = 0; j < currPlayer.length; j++) {
            guessTheNumber = Number(input[i]);
            i++;

            if (guessTheNumber === currPlayer.charCodeAt(j)) {
                currPlayerPoints += 10;
            } else {
                currPlayerPoints += 2;
            }

        }

        if (currPlayerPoints >= winnerPoints) {
            winnerPoints = currPlayerPoints;
            winner = currPlayer;
        }

        namePlayer = input[i];
        i++; 
        currPlayer = namePlayer;
        currPlayerPoints = 0;

    }

    console.log(`The winner is ${winner} with ${winnerPoints} points!`);

}

nameGame([
    "Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop",
])