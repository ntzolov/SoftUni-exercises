function printAndSum(num1, num2) {
    let allNums = '';
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        allNums += i + ' ';
        sum += i;
    }
    console.log(allNums);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)