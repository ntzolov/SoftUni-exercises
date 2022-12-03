function profit(input) {

    let ones = Number(input[0]);
    let twos = Number(input[1]);
    let fives = Number(input[2]);
    let sum = Number(input[3]);

    for (let i = 0; i <= ones; i++) {
        let resultOnes = i * 1;
        for (let j = 0; j <= twos; j++) {
            let resultTwos = j * 2;
            for (let k = 0; k <= fives; k++) {
                let resultFives = k * 5;
                if (resultOnes + resultTwos + resultFives === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }

}

profit([
    "3",
    "2",
    "3",
    "10",
])