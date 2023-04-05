function powerfulWord(input) {

    let theMostPowerful = "";
    let theMostPowerfulPoints = 0;
    let letterSum = 0;

    let word = input[0];
    let i = 1;

    while (word !== "End of words") {

        let asciiSum = 0;

        for (let i = 0; i < word.length; i++) {

            let currLetterPoints = word.charCodeAt(i);
            asciiSum += currLetterPoints;


        }

        if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u" || word[0] === "y") {
            asciiSum *= word.length;
        } else if (word[0] === "A" || word[0] === "E" || word[0] === "I" || word[0] === "O" || word[0] === "U" || word[0] === "Y") {
            asciiSum *= word.length;
        } else {
            asciiSum = Math.floor(asciiSum / word.length);
        }

        if (asciiSum > letterSum) {
            theMostPowerful = word;
            letterSum = asciiSum;
        }

        if (asciiSum > theMostPowerfulPoints) {
            theMostPowerfulPoints = asciiSum;
        }

        asciiSum = 0;

        word = input[i];
        i++;

    }

    console.log(`The most powerful word is ${theMostPowerful} - ${theMostPowerfulPoints}`);

}

powerfulWord([
    "But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words",
])
