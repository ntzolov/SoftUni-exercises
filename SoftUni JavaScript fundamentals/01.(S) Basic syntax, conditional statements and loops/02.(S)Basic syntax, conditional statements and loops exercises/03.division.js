function division(num) {
    let result = null;
    for (let i = 2; i <= 10; i++) {
        if (i === 4 || i === 5 || i === 8 || i === 9) {
            continue;
        }
        if (num % i === 0) {
            result = `The number is divisible by ${i}`
        }
    }
    if (result === null) {
        result = 'Not divisible'
    }
    console.log(result);
}

division(30)