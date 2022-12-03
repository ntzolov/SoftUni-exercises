function easterEggsBattle(input) {

    let i = 0;
    let numberEggsForPlayerOne = Number(input[i]);
    i++;
    let numberEggsForPlayerTwo = Number(input[i]);
    i++;
    let isOutOfEggs = false;
  
    while (true) {
        let winner = input[i];
        i++;

        if (winner === "End") {
            break;
        } else if (winner === "one") {
            numberEggsForPlayerTwo -= 1;
        } else if (winner === "two") {
            numberEggsForPlayerOne -= 1;
        }

        if (numberEggsForPlayerOne < 1) {
            console.log(`Player one is out of eggs. Player two has ${numberEggsForPlayerTwo} eggs left.`);
            isOutOfEggs = true;
            break;
        } else if (numberEggsForPlayerTwo < 1) {
            console.log(`Player two is out of eggs. Player one has ${numberEggsForPlayerOne} eggs left.`);
            isOutOfEggs = true;
            break;
        }
    }
    if (!isOutOfEggs) {
        console.log(`Player one has ${numberEggsForPlayerOne} eggs left.\
        \nPlayer two has ${numberEggsForPlayerTwo} eggs left.`);
    }
}

easterEggsBattle([
    "2",
    "6",
    "one",
    "two",
    "End" ,   
])