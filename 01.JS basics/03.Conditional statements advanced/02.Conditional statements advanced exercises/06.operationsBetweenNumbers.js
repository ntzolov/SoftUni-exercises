function math(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    isEven = ""



    if (operator === "+") {
        result = n1 + n2;
        if (result % 2 === 0) {
            isEven = "even";
        } else {
            isEven = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${isEven}`);
    } else if (operator === "-") {
        result = n1 - n2;
        if (result % 2 === 0) {
            isEven = "even";
        } else {
            isEven = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${isEven}`);
    } else if (operator === "*") {
        result = n1 * n2;
        if (result % 2 === 0) {
            isEven = "even";
        } else {
            isEven = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${isEven}`);
    } else if (operator === "/") {
        result = (n1 / n2).toFixed(2);
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} / ${n2} = ${result}`);
        }
    } else if (operator === "%") {
        result = n1 % n2;
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} % ${n2} = ${result}`);
        }
    }

}

math(["10", "12", "-"])