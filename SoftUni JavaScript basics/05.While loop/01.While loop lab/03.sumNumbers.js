function sumNumbers(input) {

    let number = Number(input[0]);

    let data = Number(input[1]);
    let index = 2;
    let total = data

    while (total < number) {
        total += Number(input[index]);
        index++
    }

    console.log(total);

}

sumNumbers([
    "100",
    "10",
    "20",
    "30",
    "40",
    "40",
])
