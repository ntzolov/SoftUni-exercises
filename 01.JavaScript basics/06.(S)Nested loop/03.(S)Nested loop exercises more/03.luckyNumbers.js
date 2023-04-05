function luckyNumbers(input) {

    let num = Number(input[0]);
    let result = "";

    for (let num1 = 1; num1 <= num && num1 < 10; num1++) {
        for (let num2 = 1; num2 <= num && num2 < 10; num2++) {
            for (let num3 = 1; num3 <= num && num3 < 10; num3++) {
                for (let num4 = 1; num4 <= num && num4 < 10; num4++) {
                    if ((num1 + num2) === (num3 + num4)) {
                        let currNum = "" + num1 + num2 + num3 + num4 + " ";
                        if (num % (num1 + num2) === 0) {
                            result += currNum;
                        }
                    }
                }
            }
        }
    }

    console.log(result);

}

luckyNumbers([
    "7",
])