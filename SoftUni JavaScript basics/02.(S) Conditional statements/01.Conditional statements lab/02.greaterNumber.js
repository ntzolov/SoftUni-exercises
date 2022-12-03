function greaterNum(input) {
    let numA = Number(input[0]);
    let numB = Number(input[1]);

    if (numA >= numB) {
        console.log(numA);
    } else {
        console.log(numB);
    }
}

greaterNum(["5", "3"])