function multiplyByTwo(input) {

    let i = 0;
    let num = Number(input[i]);
    i++;
    let result = 0;

    while (num >= 0) {
        result = num * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        num = Number(input[i]);
        i++;
    }

    console.log("Negative number!");

}

multiplyByTwo([
    "12",
    "43.2144",
    "12.3",
    "543.23",
    "-20",
])