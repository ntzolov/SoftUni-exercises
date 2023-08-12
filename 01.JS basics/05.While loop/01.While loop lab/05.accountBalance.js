function accountBalance(input) {

    let index = 0;
    let total = 0;

    while (index < input.length) {

        let currSum = Number(input[index]);

        if (currSum < 0) {
            console.log("Invalid operation!");
            break;
        } if (String(input[index]) === "NoMoreMoney") {
            break;
        }

        total += currSum;
        console.log(`Increase: ${currSum.toFixed(2)}`);

        index++
    }

    console.log(`Total: ${total.toFixed(2)}`);

}

accountBalance([
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
])

