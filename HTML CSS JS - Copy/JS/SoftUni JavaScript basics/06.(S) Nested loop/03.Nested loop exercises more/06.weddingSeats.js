function weddingSeats(input) {

    let lastSector = input[0].charCodeAt();
    let numRowsFirstSector = Number(input[1]);
    let numSeatsOddRow = Number(input[2]);
    let a = 97;
    let counter = 0;

    for (let sector = "A".charCodeAt(); sector <= lastSector; sector++) {
        for (let row = 1; row <= numRowsFirstSector; row++) {
            if (row % 2 === 1) {
                for (let seat = 1; seat <= numSeatsOddRow; seat++) {
                    console.log(`${String.fromCharCode(sector)}${row}${String.fromCharCode(a)}`);
                    a += 1;
                    counter += 1;
                }
            } else {
                for (let seat = 1; seat <= numSeatsOddRow + 2; seat++) {
                    console.log(`${String.fromCharCode(sector)}${row}${String.fromCharCode(a)}`);
                    a += 1;
                    counter += 1;
                }
            }

            a = 97;
        }

        numRowsFirstSector += 1;
    }
    
    console.log(counter);
}

weddingSeats([
    "B",
    "3",
    "2",
])