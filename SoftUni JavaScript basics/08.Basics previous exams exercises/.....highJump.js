function highJump(input) {

    let i = 0;
    let desiredHeight = Number(input[i]);
    i++;
    let currHeight = desiredHeight - 30;
    let tries = 0;
    let totalTries = 0;
    let isJumpedOverTheDesiredHeight = false;

    for (let j = 0; j < 3; j++) {
        let currJump = Number(input[i]);
        i++;
        tries += 1;
        totalTries += 1;

        if (currJump > currHeight) {
            if (currJump > desiredHeight) {
                console.log(`Tihomir succeeded, he jumped over ${currHeight}cm after ${totalTries} jumps.`);
                isJumpedOverTheDesiredHeight = true;
                break;
            }
            currHeight += 5;
            j = -1;
            tries = 0;
        }

        if (tries === 3 || i > input.length - 1) {
            console.log(`Tihomir failed at ${currHeight}cm after ${totalTries} jumps.`);
            break;
        }


    }
}

highJump([
    "230",
    "201",
    "202",
    "203",
    "216",
    "221",
    "226",
    "230",
    "230",
])