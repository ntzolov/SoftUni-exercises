function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let stop = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinations = 0;
    let flag = false;

    for(let i = start; i <= stop; i++) {

        if (flag === true) {
            break;
        }
        
        for(let j = start; j <= stop; j++) {

            combinations += 1;

            if (i + j === magicNumber) {
            console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
            flag = true;
            break;
            }
        }
    }

    if (flag === false) {
    console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["23",
"24",
"20",
])
