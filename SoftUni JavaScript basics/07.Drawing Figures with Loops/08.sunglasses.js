function sunglasses(input) {

    let n = Number(input[0]);
    let counter = 0;

    for (let i = 0; i < 1; i++) {

        console.log(`${"*".repeat(2 * n)}${" ".repeat(n)}${"*".repeat(2 * n)}`);

        for (let j = 0; j < n - 2; j++) {
            if (j === Math.floor((n - 1) / 2 - 1)) {
                console.log(`*${"/".repeat(2 * n - 2)}*${"|".repeat(n)}*${"/".repeat(2 * n - 2)}*`);
            } else {
                console.log(`*${"/".repeat(2 * n - 2)}*${" ".repeat(n)}*${"/".repeat(2 * n - 2)}*`);
            }
        }

        console.log(`${"*".repeat(2 * n)}${" ".repeat(n)}${"*".repeat(2 * n)}`);


    }

}

sunglasses([
    "3",
])