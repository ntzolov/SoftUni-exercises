function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let stop = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let result = 0;
    let isFound = false;

    for (let i = start; i <= stop; i++) {
        for (let j = start; j <= stop; j++) {
            result = i + j;
            counter += 1;
            if (result === magicNumber) {
                isFound = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                break;
            }
        }

        if (isFound) {
            break;
        }
    }

    if (!isFound) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}

sumOfTwoNumbers([
    "1",
    "10",
    "5",
])