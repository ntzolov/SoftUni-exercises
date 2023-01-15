function triangleOfDollars(input) {

    let n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        console.log(`${"$ ".repeat(i)}`);
    }

}

triangleOfDollars([
    "5",
])