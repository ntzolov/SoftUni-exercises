function gameOfIntervals(input) {

    let score = 0;
    let i = 0;
    let moves = Number(input[i]);
    i++;
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;

    for (let j = 0; j < moves; j++) {
        let theNumber = Number(input[i]);
        i++;

        if (theNumber < 0) {
            score /= 2;
            six += 1;
        } else if (theNumber <= 9) {
            score += theNumber * 0.20;
            one += 1;
        } else if (theNumber <= 19) {
            score += theNumber * 0.30;
            two += 1;
        } else if (theNumber <= 29) {
            score += theNumber * 0.40;
            three += 1;
        } else if (theNumber <= 39) {
            score += 50;
            four += 1;
        } else if (theNumber <= 50) {
            score += 100;
            five += 1;
        } else {
            score /= 2;
            six += 1;
        }
    }

    console.log(`${score.toFixed(2)}`);
    console.log(`From 0 to 9: ${(one / moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(two / moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(three / moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(four / moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(five / moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(six / moves * 100).toFixed(2)}%`);

}

gameOfIntervals([
    "10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20",
])