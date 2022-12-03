function graduation(input) {

    let name = input[0];
    let index = 1;
    let failed = 0;
    let currClass = -1;
    let total = 0;

    while (failed < 2) {
        currClass += 1

        if (currClass > 11) {
            break;
        }

        currMark = Number(input[index]);
        total += currMark;


        if (currMark < 4) {
            failed += 1;
        }

        index++
    }

    if (failed > 1) {
        console.log(`${name} has been excluded at ${currClass} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(total / currClass).toFixed(2)}`);
    }

}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5",
])


