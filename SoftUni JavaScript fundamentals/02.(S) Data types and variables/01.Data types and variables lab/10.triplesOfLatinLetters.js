function triplesOfLatinLetters(n) {
    let magicNumber = Number(n);
    for (let i = 97; i < 97 + magicNumber; i++) {
        for (let j = 97; j < 97 + magicNumber; j++) {
            for (let k = 97; k < 97 + magicNumber; k++) {
                console.log(`${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}`);
            }
        }
    }
}

triplesOfLatinLetters('3')