function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        let result = num * i;
        console.log(`${num} X ${i} = ${result}`);
    }
}

multiplicationTable(5)