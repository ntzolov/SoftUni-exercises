function lunchBreak(input) {

    let movieName = input[0];
    let movieLength = Number(input[1]);
    let restTime = Number(input[2]);

    let lunch = restTime / 8;
    let littleRest = restTime / 4;
    let freeTime = restTime - lunch - littleRest;

    if (freeTime >= movieLength) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(freeTime - movieLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(movieLength - freeTime)} more minutes.`)
    }

}

lunchBreak(["Teen Wolf",
"48",
"60"])
