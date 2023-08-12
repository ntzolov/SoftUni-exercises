function sumTime(input) {
    let secOne = Number(input[0]);
    let secTwo = Number(input[1]);
    let secThree = Number(input[2]);

    let secSum = secOne + secTwo + secThree

    let minutes = Math.floor(secSum / 60);
    let seconds = secSum % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}

sumTime(["35", "45", "44"])