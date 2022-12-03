function tennisRanklist(input) {

    let countTours = Number(input[0]);
    let startingPoints = Number(input[1]);

    let w = 0;
    let pointsFromTours = 0;

    for (let i = 0; i < input.length - 2; i++) {
        
        let result = input[i + 2];

        if (result === "W") {
            pointsFromTours += 2000;
            w += 1;
        } else if (result === "F") {
            pointsFromTours += 1200;
        } else if (result === "SF") {
            pointsFromTours += 720;
        }
    }

    console.log(`Final points: ${startingPoints + pointsFromTours}`);
    console.log(`Average points: ${Math.floor(pointsFromTours / countTours)}`);
    console.log(`${(w / countTours * 100).toFixed(2)}%`);

}

tennisRanklist([
    "5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF",
])
