function sumOfNumbers(input) {

    let textNum = input[0];
    let result = 0;

    for (i = 0; i < textNum.length; i++) {
        result += Number(textNum[i])
    }
        console.log(`The sum of the digits is:${result}`);

}

sumOfNumbers(["1234"])