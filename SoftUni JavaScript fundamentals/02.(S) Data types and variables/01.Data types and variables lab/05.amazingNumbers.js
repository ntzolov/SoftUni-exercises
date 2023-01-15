function amazingNumbers(num) {
    let numToString = num.toString();
    let sum = 0;
    let isAmazing = false;
    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i])
    }

    let sumToString = String(sum).includes('9');
    console.log(sumToString ? `${num} Amazing? True` : `${num} Amazing? False`)


    // With second loop:
    //
    // sum = String(sum);
    // for (let j = 0; j < sum.length; j++) {
    //     if (Number(sum[j]) === 9) {
    //         isAmazing = true;
    //     }
    // }
    // if (isAmazing) {
    //     console.log(`${num} Amazing? True`);
    // } else {
    //     console.log(`${num} Amazing? False`);
    // }

}

amazingNumbers(1233)