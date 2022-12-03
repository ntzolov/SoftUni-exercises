function squareOfStars(input) {

    let n = Number(input[0]);

    for (let i = 0; i < n; i++) {
        console.log(`${"* ".repeat(n)}`);
    }

}

squareOfStars([
    "3",
])