function specialNumbers(input) {

    let number = Number(input[0]);
    let buff = "";

    for (let first = 1; first <= 9; first++) {
        for (let second = 1; second <= 9; second++) {
            for (let third = 1; third <=9; third++) {
                for (let fourth = 1; fourth <= 9; fourth++) {
                    if (number % first === 0) {
                        if (number % second === 0) {
                            if (number % third === 0) {
                                if (number % fourth === 0) {
                                    buff += "" + first + second + third + fourth + " ";
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }

    console.log(buff);

}

specialNumbers(["11"])