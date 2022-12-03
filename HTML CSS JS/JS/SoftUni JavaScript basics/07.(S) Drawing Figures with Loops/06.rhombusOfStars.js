function rhombusOfStars(input) {

    let n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "*" + " *".repeat(i - 1));
    }

    for (let j = 1; j <= n - 1; j++) {
        console.log(" ".repeat(j) + "*" + " *".repeat(n - j - 1));
    }

}

rhombusOfStars([
    "6",
])