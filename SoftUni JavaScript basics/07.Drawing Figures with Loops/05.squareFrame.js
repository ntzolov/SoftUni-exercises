function squareFrame(input) {

    let n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            console.log("+ " + "- ".repeat(n - 2) + "+");
        } else if (i === n) {
            console.log("+ " + "- ".repeat(n - 2) + "+");
        } else {
            console.log("| " + "- ".repeat(n - 2) + "|");
        }
    }

}

squareFrame([
    "5",
])