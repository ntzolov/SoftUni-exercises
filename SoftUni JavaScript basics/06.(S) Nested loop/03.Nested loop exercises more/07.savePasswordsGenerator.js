function savePasswordsGenerator(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxGenerated = Number(input[2]);
    let A = 35;
    let B = 64;
    let x = 1;
    let y = 1;
    let result = "";
    let counter = 0;
    let isBrake = false;

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            counter += 1;
            if (counter > maxGenerated) {
                isBrake = true;
                break;
            }
            result += "" + `${String.fromCharCode(A)}${String.fromCharCode(B)}${x}${y}${String.fromCharCode(B)}${String.fromCharCode(A)}|`
            A += 1;
            B += 1;
            y += 1;
            if (A > 55) {
                A = 35;
            }
            if (B > 96) {
                B = 64;
            }
        }
        if (isBrake) {
            break;
        }
        y = 1;
        x += 1;
    }

    console.log(result);

}

savePasswordsGenerator([
    "20",
    "50",
    "10",
])