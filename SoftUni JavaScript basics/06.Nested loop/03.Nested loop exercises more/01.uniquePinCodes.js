function uniquePinCodes(input) {

    let i = 0;
    let firstDigitCeil = Number(input[i]);
    i++;
    let secondDigitCeil = Number(input[i]);
    i++;
    let thirdDigitCeil = Number(input[i]);
    i++;

    for (let i = 1; i <= firstDigitCeil; i++) {
        for (let j = 1; j <= secondDigitCeil; j++) {
            for (let l = 1; l <= thirdDigitCeil; l++) {
                if (i % 2 === 0 && (j === 2 || j === 3 || j === 5 || j === 7) && l % 2 === 0) {
                    console.log(`${i} ${j} ${l}`);
                }
            }         
        }
    }
}

uniquePinCodes([
    "3",
    "5",
    "5",
])