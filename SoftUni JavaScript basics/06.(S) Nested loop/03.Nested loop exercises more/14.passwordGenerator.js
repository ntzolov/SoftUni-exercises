function passwordGenerator(input) {

    let n = Number(input[0]);
    let l = Number(input[1]);
    let a = 97;
    let result = "";

    for (let one = 1; one <= n; one++) {
        for (let two = 1; two <= n; two++) {
            for (let three = a; three <= a + l - 1; three++) {
                for (let four = a; four <= a + l - 1; four++) {
                    for (let five = 1; five <= n; five++) {
                        if (five > one && five > two) {
                            result += "" + `${one}${two}${String.fromCharCode(three)}${String.fromCharCode(four)}${five} `
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}

passwordGenerator([
    "4",
    "2",
])