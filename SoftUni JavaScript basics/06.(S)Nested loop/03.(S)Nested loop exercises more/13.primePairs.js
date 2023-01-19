function primePairs(input) {

    let start = Number(input[0]);
    let stop = Number(input[1]);
    let startTo = Number(input[2]);
    let stopTo = Number(input[3]);
    let isFirstPrime = true;
    let isSecondPrime = true;

    for (let firstPair = start; firstPair <= start + startTo; firstPair++) {
        for (let secondPair = stop; secondPair <= stop + stopTo; secondPair++) {
            for (let k = 2; k < firstPair; k++) {
                if (firstPair % k === 0) {
                    isFirstPrime = false;
                }
            }
            for (let l = 2; l < secondPair; l++) {
                if (secondPair % l === 0) {
                    isSecondPrime = false;
                }
            }
            if (isFirstPrime && isSecondPrime) {
                console.log(`${firstPair}${secondPair}`);
            }
            isFirstPrime = true;
            isSecondPrime = true;
        }
    }

}

primePairs([
    "10",
    "20",
    "5",
    "5",
])