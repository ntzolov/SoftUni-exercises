function carNumber(input) {

    let start = Number(input[0]);
    let stop = Number(input[1]);
    let result = "";

    for (let num1 = start; num1 <= stop; num1++) {
        for (let num2 = start; num2 <= stop; num2++) {
            for (let num3 = start; num3 <= stop; num3++) {
                for (let num4 = start; num4 <= stop; num4++) {
                    if (num1 > num4 && (num2 + num3) % 2 === 0) {
                        if (num1 % 2 === 0) {
                            if (num4 % 2 === 1) {
                                result += "" + num1 + num2 + num3 + num4 + " ";
                            }
                        } else if (num1 % 2 === 1) {
                            if (num4 % 2 === 0) {
                                result += "" + num1 + num2 + num3 + num4 + " "; 
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(result);

}

carNumber([
    "3",
    "5",
])