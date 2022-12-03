function barcodeGenerator(input) {

    let start = input[0];
    let stop = input[1];
    let buff = "";

    for (let first = Number(start[0]); first <= Number(stop[0]); first++) {
        for (let second = Number(start[1]); second <= Number(stop[1]); second++) {
            for (let third = Number(start[2]); third <= Number(stop[2]); third++) {
                for (let fourth = Number(start[3]); fourth <= Number(stop[3]); fourth++) {
                    if (first % 2 !== 0 && second % 2 !== 0 && third % 2 !== 0 && fourth % 2 !== 0) {
                        buff += "" + first + second + third + fourth + " ";
                    }
                }
            }
        }
    }

    console.log(buff);

}

barcodeGenerator([
    "2345",
    "6789",
])
