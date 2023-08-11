function averageNumber(input) {

    let n = Number(input[0]);
    let sum = 0;
    let i = 1;

    for (let j = 0; j < n; j++) {
        let number = Number(input[i]);
        i++;
        sum += number;
    }

    console.log((sum / n).toFixed(2));

}

averageNumber([
    "4",
    "3",
    "2",
    "4",
    "2",
])