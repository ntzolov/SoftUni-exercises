function record(input) {

    let currentRecord = Number(input[0]);
    let metersToSwim = Number(input[1]);
    let swimOneMeterInSec = Number(input[2]);

    let delay = Math.floor(metersToSwim / 15) * 12.50
    let time = (metersToSwim * swimOneMeterInSec) + delay
    if (time < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(time - currentRecord).toFixed(2)} seconds slower.`)
    }

}

record(["55555.67",
"3017",
"5.03"])
