function theSongOfTheWheels(input) {

    let magicNumber = Number(input[0]);
    let result = "";
    let counter = 0;

    for (let first = 1; first <= 9; first++) {
        for (let second = 1; second <= 9; second++) {
            for (let third = 1; third <= 9; third++) {
                for (let fourth = 1; fourth <= 9; fourth++) {
                    if ((first * second) + (third * fourth) === magicNumber) {
                        if (first < second && third > fourth) {
                            result += "" + first + second + third + fourth + " "
                            counter += 1;
                        }
                    }
                }
            }
        }
    }

    console.log(`${result}`);
    if (counter >= 4) {
        console.log(`Password: ${result.slice(15, 19)}`);
    } else {
        console.log("No!");
    }
}

theSongOfTheWheels([
    "11",
])