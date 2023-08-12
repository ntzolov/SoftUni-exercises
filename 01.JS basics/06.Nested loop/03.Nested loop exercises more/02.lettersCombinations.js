function lettersCombinations(input) {

    let startAscii = input[0].charCodeAt();
    let stopAscii = input[1].charCodeAt();
    let noAscii = input[2].charCodeAt();
    let counter = 0;
    let result = "";

    for (let i = startAscii; i <= stopAscii; i++) {
        for (let j = startAscii; j <= stopAscii; j++) {
            for (let k = startAscii; k <= stopAscii; k++) {
                if (i !== noAscii && j !== noAscii && k !== noAscii) {
                    counter += 1;
                    result += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `
                }
            }
        }
    }

    console.log(`${result}${counter}`);

}

lettersCombinations([
    "a",
    "c",
    "b",
])