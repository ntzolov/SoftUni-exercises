function combinations(input) {

    let n = Number(input[0]);
    let validValidations = 0;

    for (let x = 0; x <= n; x++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                if (x + x2 + x3 === n) {
                    validValidations += 1;
                }
            }
        }
    }

    console.log(validValidations);

}

combinations(["25"])