function diamond(input) {

    let n = Number(input[0]);
    let leftRightDashes = 0;
    let midDashes = 0;
    let firstHalf = Math.ceil(n / 2);

    for (let i = 0; i < firstHalf; i++) {
        if (i === 0 && n % 2 === 1) {
            leftRightDashes = Math.floor(n / 2);
            midDashes = n - 2 * leftRightDashes;
            console.log(`${"-".repeat(leftRightDashes)}*${"-".repeat(leftRightDashes)}`);
            leftRightDashes -= 1;
        } else if (i === 0 && n % 2 === 0) {
            leftRightDashes = (n - 2) / 2;
            midDashes = n - 2 * leftRightDashes;
            console.log(`${"-".repeat(leftRightDashes)}**${"-".repeat(leftRightDashes)}`);
            leftRightDashes -= 1;
        } else {
            console.log(`${"-".repeat(leftRightDashes)}*${"-".repeat(midDashes)}*${"-".repeat(leftRightDashes)}`);
            midDashes += 2;
            leftRightDashes -= 1;
        }
    }

    leftRightDashes = 0;
    midDashes -= 2;

    if (n % 2 === 0) {
        for (let j = 1; j <= n / 2 - 1; j++) {
            midDashes -= 2;
            if (j === n / 2 - 1) {
                leftRightDashes = (n - 2) / 2;
                console.log(`${"-".repeat(leftRightDashes)}**${"-".repeat(leftRightDashes)}`);
            } else {
                leftRightDashes += 1;
                console.log(`${"-".repeat(leftRightDashes)}*${"-".repeat(midDashes)}*${"-".repeat(leftRightDashes)}`);
            }
        }
    } else {
        for (let k = 1; k <= (n - 1) / 2; k++) {
            midDashes -= 2;
            if (k === (n - 1) / 2) {
                leftRightDashes = Math.floor(n / 2);
                console.log(`${"-".repeat(leftRightDashes)}*${"-".repeat(leftRightDashes)}`);
            } else {
                leftRightDashes += 1;
                console.log(`${"-".repeat(leftRightDashes)}*${"-".repeat(midDashes)}*${"-".repeat(leftRightDashes)}`);
            }
        }
    }
}

diamond([
    "7",
])