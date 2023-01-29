function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let floatOrInt;
    if (sum % 1 === 0) {
        floatOrInt = 'Integer'
    } else {
        floatOrInt = 'Float'
    }
    console.log(`${sum} - ${floatOrInt}`);
}

integerAndFloat(9, 100, 1.1)