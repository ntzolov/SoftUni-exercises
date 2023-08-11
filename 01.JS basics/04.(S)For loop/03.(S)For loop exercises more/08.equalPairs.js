function equalPairs(input) {

    let numPairs = Number(input[0]);
    let i = 1;
    let isEqual = true;
    let maxDiff = 0;
    let result = 0;


    let num1 = Number(input[i]);
    i++;
    let num2 = Number(input[i]);
    i++;
    let previousResult = num1 + num2;

    for (let j = 1; j < numPairs; j++) {
        let num1 = Number(input[i]);
        i++;
        let num2 = Number(input[i]);
        i++;

        result = num1 + num2;
        if (result === previousResult) {
        } else {
            isEqual = false;

            if (Math.abs(result - previousResult) > maxDiff) {
                maxDiff = Math.abs(result - previousResult)
            }
        }
        previousResult = result;
    }

    if (numPairs === 1) {
        console.log(`Yes, value=${previousResult}`);
    } else if (isEqual === true) {
        console.log(`Yes, value=${result}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }

}

equalPairs([
    "1",
    "5",
    "5",
])