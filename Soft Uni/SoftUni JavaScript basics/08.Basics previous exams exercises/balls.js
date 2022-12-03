function balls(input) {

    let numBalls = Number(input[0]);
    let i = 1;
    let points = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherBalls = 0;

    for (let j = 0; j < numBalls; j++) {
        let whatColor = input[i];
        i++;
        
        if (whatColor === "red") {
            points +=5;
            redBalls += 1;
        } else if (whatColor === "orange") {
            points += 10;
            orangeBalls += 1;
        } else if (whatColor === "yellow") {
            points += 15;
            yellowBalls += 1;
        } else if (whatColor === "white") {
            points += 20;
            whiteBalls += 1;
        } else if (whatColor === "black") {
            points = Math.floor(points / 2);
            blackBalls += 1;
        } else {
            otherBalls += 1;
        }

    }

    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);


}

balls([
    "3",
    "white",
    "black",
    "pink",
])
