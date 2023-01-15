function oddEvenPosition(input) {

    let nums = Number(input[0]);
    let sumOdd = 0;
    let minOdd = Number.MAX_SAFE_INTEGER;
    let maxOdd = Number.MIN_SAFE_INTEGER;
    let sumEven = 0;
    let minEven = Number.MAX_SAFE_INTEGER;
    let maxEven = Number.MIN_SAFE_INTEGER;
    let j = 1;

    for (let i = 1; i <= nums; i++) {
        let currNum = Number(input[j]);
        j++;
        if (i % 2 === 0) {
            sumEven += currNum;
            if (currNum < minEven) {
                minEven = currNum;
            }
            if (currNum > maxEven) {
                maxEven = currNum;
            }
        } else {
            sumOdd += currNum;
            if (currNum < minOdd) {
                minOdd = currNum;
            }
            if (currNum > maxOdd) {
                maxOdd = currNum;
            }
        }
    }

    console.log(`OddSum=${sumOdd.toFixed(2)},`);

    if (minOdd === Number.MAX_SAFE_INTEGER) {
        console.log("OddMin=No,");
    } else {
        console.log(`OddMin=${minOdd.toFixed(2)},`);
    }

    if (maxOdd === Number.MIN_SAFE_INTEGER) {
        console.log("OddMax=No,");
    } else {
        console.log(`OddMax=${maxOdd.toFixed(2)},`);
    }

    console.log(`EvenSum=${sumEven.toFixed(2)},`);

    if (minEven === Number.MAX_SAFE_INTEGER) {
        console.log("EvenMin=No,");
    } else {
        console.log(`EvenMin=${minEven.toFixed(2)},`);
    }

    if (maxEven === Number.MIN_SAFE_INTEGER) {
        console.log("EvenMax=No");
    } else {
        console.log(`EvenMax=${maxEven.toFixed(2)}`);
    }

}

oddEvenPosition([
    "6",
    "2",
    "3",
    "5",
    "4",
    "2",
    "1",
])